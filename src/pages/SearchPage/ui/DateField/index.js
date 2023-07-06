import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
import { setDateInterval } from '../../services/slice';

export const DateField = ({ isValid, setIsValid }) => {

    const dispatch = useDispatch();
    const nowDate = new Date().getTime();
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [textError, setTextError] = useState(true);

    let uagent = navigator.userAgent.toLowerCase();
    let isSafari = uagent.search("iphone") > -1;

    const onDateFocus = e => (e.target.type = "date");
    const onDateBlur = e => (e.target.type = "text"); 

    const handleStartDate = e => setStartDate(new Date(e.target.value).getTime());
    const handleEndDate = e => setEndDate(new Date(e.target.value).getTime());


    const parseDate = date => {
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    };

    useEffect(() => {
        if (isNaN(startDate)) {
            setIsValid(false);
        } else if (isNaN(endDate)) {
            setIsValid(false);
        } else if (startDate > nowDate) {
            setTextError(false);
            setIsValid(false);
        } else if (endDate > nowDate) {
            setTextError(false);
            setIsValid(false);
        } else if (startDate > endDate) {
            setTextError(false);
            setIsValid(false);
        } else {
            setTextError(true);
            setIsValid(true);
            console.log();
        }
    }, [startDate, endDate, nowDate, setIsValid]);

    useEffect(() => {
        isValid && dispatch(setDateInterval({
            startDate: `${parseDate(new Date(startDate))}T00:00:00+03:00`,
            endDate: `${parseDate(new Date(endDate))}T23:59:59+03:00`,
        }))
    }, [isValid, dispatch, startDate, endDate]);

    return (
        <div>
            <label className={styles.label}>
                Диапазон поиска
                <span
                    className={!textError ? styles.required_error : styles.required}
                >
                    *
                </span>
            </label>
            <div>
                <input
                    className={!textError ? styles.date_error : styles.date}
                    type={!isSafari ? 'text' : 'date'}
                    placeholder="Дата начала"
                    onChange={handleStartDate}
                    onFocus={!isSafari ? onDateFocus : null}
                    onBlur={!isSafari ? onDateBlur : null}
                />
                <input
                    className={!textError ? styles.date_error : styles.date}
                    type={!isSafari ? 'text' : 'date'}
                    placeholder="Дата конца"
                    onChange={handleEndDate}
                    onFocus={!isSafari ? onDateFocus : null}
                    onBlur={!isSafari ? onDateBlur : null}
                />
            </div>
            <p className={styles.text_error}>
                {!textError && 'Введите корректные данные'}
            </p>
        </div>
    )
}