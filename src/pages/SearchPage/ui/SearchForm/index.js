import { useForm } from 'react-hook-form';
import { data } from '../../lib/data';
import styles from './styles.module.css';

export const SearchForm = () => {

    const {
        register,
        formState: { 
            errors, 
            // isValid 
        },
        // handleSubmit,
        // reset
    } = useForm({
        mode: "onBlur"
    });

    return (
        <form className={styles.form}>
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
                        {/* ИСПРАВИТЬ НА OPTION */}
                        <input className={styles.input} />
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
                <div>
                    {
                        data.map((item, index) => (
                            <div className={styles.container_items} key={index}>
                                <input type='checkbox' />
                                <label className={styles.item}>{item}</label>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>

            </div>
        </form>
    );
};