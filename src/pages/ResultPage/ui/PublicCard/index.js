import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { requests } from '../../../../app/endpoints';
import { useSelector } from 'react-redux';
import { getToken } from '../../../AuthPage/services/slice';
import { cases, parseDate } from '../../../../helpers';
import { Link } from 'react-router-dom';

export const PublicCard = ({ item }) => {

    const token = useSelector(getToken);
    const [document, setDocument] = useState(null);
    console.log(document);

    useEffect(() => {
        const getPublic = async () => {
            const respons = await fetch(requests.documents.post.documents, {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/json',
                    'Authorization': `Bearer ${token.accessToken}`
                },
                body: JSON.stringify({
                    ids: [item.encodedId]
                })
            })

            const data = await respons.json();
            setDocument(data[0].ok);
        }

        getPublic();
    }, [token, item]);

    const createMarkup = text => {
        let parser = new DOMParser();
        let doc = parser.parseFromString(text, 'application/xml');
        let html = doc.documentElement.textContent;
        return {
            __html: html
        };
    };

    return (
        <div className={styles.main}>
            {
                document &&
                <>
                    <div className={styles.date_source}>
                        <p className={styles.date}>
                            {parseDate(new Date(document.issueDate))}
                        </p>
                        <p className={styles.name}>
                            {document.source.name}
                        </p>
                    </div>

                    <div className={styles.type}>
                        {document.attributes.isTechNews && <p className={styles.par}>Технические новости</p>}
                        {document.attributes.isTechNews && <p className={styles.par}>Анонсы и события</p>}
                        {document.attributes.isTechNews && <p className={styles.par}>Сводки новостей</p>}
                    </div>

                    <h2 className={styles.header}>
                        <Link
                            className={styles.link}
                            to={document.url}
                            target='_blank'
                        >
                            {
                                document.title.text.length > 100
                                    ? document.title.text.substring(0, 100) + " ..."
                                    : document.title.text
                            }
                        </Link>
                    </h2>

                    <div
                        className={styles.text}
                        dangerouslySetInnerHTML={createMarkup(document.content.markup)}
                    />

                    <div className={styles.more}>
                        <button className={styles.btn_reed}>
                            <Link
                                className={styles.link}
                                to={document.url}
                                target='_blank'
                            >
                                Читать в источнике
                            </Link>
                        </button>
                        <p className={styles.word}>
                            {document.attributes.wordCount} {cases(document.attributes.wordCount, ['слово', 'слова', 'слов'])}
                        </p>
                    </div>
                </>
            }
        </div>
    )
}