import { useForm } from 'react-hook-form';
import { data, tonality } from '../../lib/data';
import styles from './styles.module.css';
import { DateField } from '../DateField';
import { useDispatch, useSelector } from 'react-redux';
import { getDateInterval, saveDataGistograms, saveDataPublics, setDate } from '../../services/slice';
import { useState } from 'react';
import { requests } from '../../../../app/endpoints';
import { getToken } from '../../../AuthPage/services/slice';
import { body } from '../../lib/body';
import { useNavigate } from 'react-router';

export const SearchForm = ({ changeOpen }) => {

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
    } = useForm({
        mode: "onBlur"
    });

    const [isValidDate, setIsValidDate] = useState(false);
    const dispatch = useDispatch();
    const token = useSelector(getToken);
    const issueDateInterval = useSelector(getDateInterval);
    let navigate = useNavigate();

    const hadleDataSearch = async data => {

        dispatch(setDate(data));
        changeOpen();

        const searchBody = {
            ...body,
            issueDateInterval: {
                startDate: issueDateInterval.startDate,
                endDate: issueDateInterval.endDate,
            },
            searchContext: {
                ...body.searchContext,
                targetSearchEntitiesContext: {
                    ...body.targetSearchEntitiesContext,
                    targetSearchEntities: [
                        {
                            type: "company",
                            inn: data.inn,
                        }
                    ],
                    tonality: data.tonality,
                }
            },
            limit: data.limit,
        }

        const respons = await fetch(requests.objectsearch.post.histograms, {
            method: "POST",
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json',
                'Authorization': `Bearer ${token.accessToken}`,
            },
            body: JSON.stringify(searchBody)
        });

        const respons_new = await fetch(requests.objectsearch.post.objectsearch, {
            method: "POST",
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json',
                'Authorization': `Bearer ${token.accessToken}`,
            },
            body: JSON.stringify(searchBody)
        });

        const resultHistorgrams = await respons.json();
        const resultPublics = await respons_new.json();
        changeOpen();
        navigate('/result');
        dispatch(saveDataGistograms(resultHistorgrams.data));
        dispatch(saveDataPublics(resultPublics.items));
    };

    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit(hadleDataSearch)}
        >
            <div className={styles.container_params}>
                <div>
                    <div className={styles.container_filter}>
                        <label className={styles.label}>
                            ИНН компании
                            <span
                                className={errors?.inn ? styles.required_error : styles.required}
                            >
                                *
                            </span>
                        </label>
                        <input
                            {...register('inn', {
                                required: true,
                                maxLength: 12,
                                pattern: /[0-9]{10,12}/,
                            })}
                            className={errors?.inn ? styles.input_error : styles.input}
                        />
                        <p className={styles.text_error}>
                            {errors?.inn && 'Введите корректные данные'}
                        </p>
                    </div>

                    <div className={styles.container_filter}>
                        <label className={styles.label}>
                            Тональность
                        </label>
                        <select
                            {...register('tonality')}
                            className={styles.select}
                            defaultValue={'any'}
                        >
                            {
                                tonality.map(item =>
                                    <option
                                        className={styles.option}
                                        key={item.text}
                                        value={item.value}
                                    >
                                        {item.text}
                                    </option>
                                )
                            }
                        </select>
                        <p className={styles.text_error}></p>
                    </div>

                    <div className={styles.container_filter}>
                        <label className={styles.label}>
                            Количество документов в выдаче
                            <span
                                className={errors?.limit ? styles.required_error : styles.required}
                            >
                                *
                            </span>
                        </label>
                        <input
                            {...register('limit', {
                                required: true,
                                valueAsNumber: true,
                                min: 1,
                                max: 1000,
                            })}
                            className={errors?.limit ? styles.input_error : styles.input}
                            placeholder={errors?.limit && 'От 1 до 1000'}
                        />
                        <p className={styles.text_error}>
                            {errors?.limit && 'Обязательное поле'}
                        </p>
                    </div>
                </div>
                <div className={styles.items}>
                    {
                        data.map((item, index) => (
                            <div className={styles.container_items} key={index}>
                                <input type='checkbox' className={styles.checkbox} />
                                <label className={styles.item}>{item}</label>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={styles.container_button}>
                <DateField
                    isValid={isValidDate}
                    setIsValid={setIsValidDate}
                />
                <div>
                    <button
                        type='submit'
                        disabled={!isValid || !isValidDate}
                        className={
                            !isValid || !isValidDate
                                ? styles.button_disabled
                                : styles.button
                        }
                    >
                        Поиск
                    </button>
                    <p className={styles.required_text}>
                        * Обязательные к заполнению поля
                    </p>
                </div>
            </div>
        </form>
    );
};