import { useSelector } from 'react-redux';
import styles from './styles.module.css';
import { getDataResult } from '../../../SearchPage/services/slice';

export const InformationResult = () => {

    const dataResult = useSelector(getDataResult);
    console.log(dataResult);

    const parseDate = date => {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day < 9 ? `0${day}` : day}.${month < 9 ? `0${month}` : month}.${year}`;
    }

    return (
        <div className={styles.main}>
            <h2 className={styles.header}>
                Общая сводка
            </h2>
            <p className={styles.par}>
                Найдено 4 221 вариантов
            </p>
            <div className={styles.container_result}>
                <div className={styles.field_description}>
                    <p className={styles.field}>Период</p>
                    <p className={styles.field}>Всего</p>
                    <p className={styles.field}>Риски</p>
                </div>
                {
                    dataResult[0]?.data.map((item, index) => (
                        <div className={styles.container_items} key={index}>
                            <div>
                                <p className={styles.item}>
                                    {parseDate(new Date(item.date))}
                                </p>
                                <p className={styles.item}>
                                    {item.value}
                                </p>
                                <p className={styles.item}>
                                    {dataResult[1].data[index].value}
                                </p>
                            </div>
                            <hr className={styles.hr} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};