import { useSelector } from 'react-redux';
import styles from './styles.module.css';
import { getDataPublics } from '../../../SearchPage/services/slice';
import { PublicCard } from '../PublicCard';
import { useState } from 'react';

export const DocumetList = () => {
    const dataPublics = useSelector(getDataPublics);
    console.log(dataPublics);
    const [next, setNext] = useState(2);

    const showMore = () => setNext(next + 2);

    return (
        <div className={styles.main}>
            <h2 className={styles.header}>
                Список документов
            </h2>
            {
                dataPublics.slice(0, next).map((item, index) =>
                    <PublicCard key={index} item={item} />
                )
            }
            {
                next < dataPublics.length &&
                <button
                    onClick={showMore}
                >
                    Показать больше
                </button>
            }
        </div>
    );
};