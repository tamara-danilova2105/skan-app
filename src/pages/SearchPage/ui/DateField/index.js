import { useEffect, useState } from 'react';
import styles from './styles.module.css';

export const DateField = () => {

    const nowDate = new Date().getTime();
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [isValid, setIsValid] = useState(true);
    console.log(isValid);

    const handleStartDate = e => {
        setStartDate(new Date(e.target.value).getTime());
    }

    const handleEndDate = e => {
        setEndDate(new Date(e.target.value).getTime())
    }

    useEffect(() => {
        if (nowDate < startDate && nowDate < endDate) {
            setIsValid(false)
        }
        if (endDate < startDate) {
            setIsValid(false)
        } else {
            setIsValid(true)
        }
    }, [startDate, endDate, nowDate])

    return (
        <div>
            <label className={styles.label}>
                Диапазон поиска
                <span
                // className={error ? styles.required_error : styles.required}
                >
                    *
                </span>
            </label>
            <div>
                <input
                    className={styles.date}
                    type='date'
                    onChange={handleStartDate}
                />
                <input
                    className={styles.date}
                    type='date'
                    onChange={handleEndDate}
                />
            </div>
            <p className={styles.text_error}>
                {!isValid && 'Введите корректные данные'}
            </p>
        </div>
    )
}