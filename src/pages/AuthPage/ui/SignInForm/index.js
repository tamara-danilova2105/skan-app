import styles from './styles.module.css';
import yandex from '../../../../assets/yandex.png';
import google from '../../../../assets/google.png'
import facebook from '../../../../assets/facebook.png'
import form from '../../../../assets/form.png';
import { useForm } from 'react-hook-form';
import { requests } from '../../../../app/endpoints';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setAuthStatus, setToken } from '../../services/slice';

export const SignInForm = ({ changeOpen }) => {

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset
    } = useForm({
        mode: "onBlur"
    });

    const [getToken, setGetToken] = useState(true);
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSignIn = async (data) => {
        changeOpen();
        const respons = await fetch(requests.account.post.login, {
            method: "POST",
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        if (respons.status === 200) {
            const token = await respons.json();
            localStorage.setItem('token', JSON.stringify(token));
            dispatch(setToken(token));
            dispatch(setAuthStatus(true));
            setGetToken(true);
            changeOpen();
            reset();
            navigate('/');
        } else {
            changeOpen();
            setGetToken(false);
        }
    };

    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit(handleSignIn)}
        >
            <img src={form} alt='close' className={styles.close} />
            <div className={styles.container_btn}>
                <div className={styles.signin}>Войти</div>
                <div className={styles.signup}>Зарегистрироваться</div>
            </div>
            <div className={styles.container_login}>
                <label className={styles.label}>
                    Логин или номер телефона:
                </label>
                <input
                    {...register('login', {
                        required: true,
                        minLength: 1,
                    })}
                    className={errors?.login ? styles.input_error : styles.input}
                    type='text'
                />
                <p className={styles.text_error}>
                    {errors?.login && 'Введите корректные данные'}
                </p>
            </div>
            <div>
                <label className={styles.label}>
                    Пароль:
                </label>
                <input
                    {...register('password', {
                        required: true,
                        minLength: 1,
                    })}
                    className={(errors?.password || !getToken) ? styles.input_error : styles.input}
                    type='password'
                />
                <p className={styles.text_error}>
                    {(errors?.password || !getToken) && 'Неправильный пароль'}
                </p>
            </div>
            <button
                type='submit'
                disabled={!isValid}
                className={!isValid ? styles.btn_signin_disabled : styles.btn_signin}
            >
                Войти
            </button>
            <p className={styles.recover_password}>
                Восстановить пароль
            </p>
            <div className={styles.container_sm}>
                <p>Войти через:</p>
                <div>
                    <img className={styles.image} src={google} alt='google' />
                    <img className={styles.image} src={facebook} alt='facebook' />
                    <img className={styles.image} src={yandex} alt='yandex' />
                </div>
            </div>
        </form>
    )
}