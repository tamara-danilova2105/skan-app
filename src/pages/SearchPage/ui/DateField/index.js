import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
import { setDateInterval } from '../../services/slice';

export const DateField = ({ isValid, setIsValid }) => {

    const dispatch = useDispatch();
    const nowDate = new Date().getTime();
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    const handleStartDate = e => {
        setStartDate(new Date(e.target.value).getTime());
    }

    const handleEndDate = e => {
        setEndDate(new Date(e.target.value).getTime())
    }

    useEffect(() => {
        if(isNaN(startDate)) {
            setIsValid(false);
        } else if (isNaN(endDate)) {
            setIsValid(false);
        } else if (startDate > nowDate) {
            setIsValid(false);
        } else if (endDate > nowDate) {
            setIsValid(false);
        } else if (startDate > endDate) {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
    }, [startDate, endDate, nowDate, setIsValid]);

    useEffect(() => {
        isValid && dispatch(setDateInterval({
            startDate: startDate,
            endDate: endDate,
        }))
    }, [isValid, dispatch, startDate, endDate]);

    return (
        <>
            <label className={styles.label}>
                Диапазон поиска
                <span
                className={!isValid ? styles.required_error : styles.required}
                >
                    *
                </span>
            </label>
            <div>
                <input
                    className={!isValid ? styles.date_error : styles.date}
                    type='date'
                    onChange={handleStartDate}
                />
                <input
                    className={!isValid ? styles.date_error : styles.date}
                    type='date'
                    onChange={handleEndDate}
                />
            </div>
            <p className={styles.text_error}>
                {!isValid && 'Введите корректные данные'}
            </p>
        </>
    )
}