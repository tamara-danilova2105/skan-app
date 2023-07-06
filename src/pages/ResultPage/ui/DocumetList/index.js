import { useSelector } from 'react-redux';
import styles from './styles.module.css';
import { getDataPublics } from '../../../SearchPage/services/slice';
import { PublicCard } from '../PublicCard';
import { useState } from 'react';

export const DocumetList = () => {

    const dataPublics = useSelector(getDataPublics);
    const [next, setNext] = useState(10);

    const showMore = () => setNext(next + 10);

    return (
        <div className={styles.main}>
            <h2 className={styles.header}>
                Список документов
            </h2>
            <div className={styles.container_publics}>
                {
                    dataPublics.slice(0, next).map((item, index) =>
                        <PublicCard
                            key={index}
                            item={item}
                        />
                    )
                }
            </div>
            <div className={styles.container_btn}>
                {
                    next < dataPublics.length &&
                    <button
                        className={styles.button}
                        onClick={showMore}
                    >
                        Показать больше
                    </button>
                }
            </div>
        </div>
    );
};