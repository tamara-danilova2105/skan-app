import { Link } from 'react-router-dom';
import styles from './styles.module.css';

export const SignIn = () => {
    return (
        <div className={styles.signin}>
            <button className={styles.sign_up}>
                Зарегистрироваться
            </button>
            <hr className={styles.hr} />
            <button className={styles.sign_in}>
                <Link className={styles.link} to={'/auth'}>Войти</Link>
            </button>
        </div>
    );
};