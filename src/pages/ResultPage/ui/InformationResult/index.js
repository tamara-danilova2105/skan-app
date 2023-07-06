import { useSelector } from 'react-redux';
import styles from './styles.module.css';
import { getDataGistorams } from '../../../SearchPage/services/slice';
import { useState } from 'react';
import { BackIcon, NextIcon } from '../../../MainPage/ui/WhyAreWe/ui/lib/icons';
import { cases, parseDate } from '../../../../helpers';

export const InformationResult = () => {

    const dataGistograms = useSelector(getDataGistorams);
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(8);

    const previos = () => {
        setFirst(first === 0 ? 0 : first - 8);
        setSecond(first === 0 ? 8 : second - 8);
    }

    const next = () => {
        setFirst(second > dataGistograms[0]?.data.length ? first : first + 8);
        setSecond(second > dataGistograms[0]?.data.length ? second : second + 8);
    }

    return (
        <div className={styles.main}>
            <h2 className={styles.header}>
                Общая сводка
            </h2>
            <p className={styles.par}>
                Найдено {dataGistograms[0]?.data.length} {cases(dataGistograms[0]?.data.length, ['вариант', 'варианта', 'вариантов'])}
            </p>
            <div className={styles.div}>
                {
                    dataGistograms[0]?.data.length > 8 &&
                    <button
                        onClick={previos}
                        className={styles.button}
                    >
                        {BackIcon()}
                    </button>
                }
                <div className={styles.container_result}>
                    <div className={styles.field_description}>
                        <p className={styles.field}>Период</p>
                        <p className={styles.field}>Всего</p>
                        <p className={styles.field}>Риски</p>
                    </div>
                    {
                        dataGistograms[0]?.data
                            .slice(first, second)
                            .map((item, index) => (
                                <div className={styles.container_items} key={index}>
                                    <div>
                                        <p className={styles.item}>
                                            {parseDate(new Date(item.date))}
                                        </p>
                                        <p className={styles.item}>
                                            {item.value}
                                        </p>
                                        <p className={styles.item}>
                                            {dataGistograms[1].data[index].value}
                                        </p>
                                    </div>
                                    <hr className={styles.hr} />
                                </div>
                            ))
                    }
                </div>
                {
                    dataGistograms[0]?.data.length > 8 &&
                    <button
                        onClick={next}
                        className={styles.button}
                    >
                        {NextIcon()}
                    </button>
                }
            </div>
        </div>
    );
};