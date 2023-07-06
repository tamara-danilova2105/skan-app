import { useSelector } from 'react-redux';
import styles from './styles.module.css';
import { getDataGistorams } from '../../../SearchPage/services/slice';
import { BackIcon, NextIcon } from '../../../MainPage/ui/WhyAreWe/ui/lib/icons';
import { useState } from 'react';
import { cases, parseDate } from '../../../../helpers';

export const InformationMobile = () => {

    const dataGistograms = useSelector(getDataGistorams);
    const [index, setIndex] = useState(0);

    const previos = () => {
        setIndex((index => {
            index--
            if (index < 0) return dataGistograms[0]?.data.length - 1
            return index
        }))
    };

    const next = () => {
        setIndex((index => {
            index++
            if (index > dataGistograms[0]?.data.length - 1) index = 0
            return index
        }))
    }

    return (
        <div className={styles.main}>
            <h2 className={styles.header}>
                Общая сводка
            </h2>
            <p className={styles.par}>
                Найдено {dataGistograms[0]?.data.length} {cases(dataGistograms[0]?.data.length, ['вариант', 'варианта', 'вариантов'])}
            </p>
            <div className={dataGistograms[0]?.data.length > 1 ? styles.main2 : styles.main3}>
                {
                    dataGistograms[0]?.data.length > 1 &&
                    <button
                        onClick={previos}
                        className={styles.button}
                    >
                        {BackIcon()}
                    </button>
                }

                <div className={styles.container}>
                    <div className={styles.field_description}>
                        <p className={styles.field1}>Период</p>
                        <p className={styles.field2}>Всего</p>
                        <p className={styles.field3}>Риски</p>
                    </div>
                    <div className={styles.container_items}>
                        <p className={styles.item1}>
                            {parseDate(new Date(dataGistograms[0]?.data[index]?.date))}
                        </p>
                        <p className={styles.item2}>
                            {dataGistograms[0]?.data[index]?.value}
                        </p>
                        <p className={styles.item3}>
                            {dataGistograms[1]?.data[index]?.value}
                        </p>
                    </div>
                </div>
                {
                    dataGistograms[0]?.data.length > 1 &&
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