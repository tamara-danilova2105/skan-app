import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css';
import { Link } from "react-router-dom";
import { getAuthStatus, setAuthStatus, setToken } from '../../../../pages/AuthPage/services/slice';

export const BurgerMenu = ({ isOpen, setIsOpen }) => {

    const authStatus = useSelector(getAuthStatus);

    const dispatch = useDispatch();

    const sighUp = () => {
        setIsOpen(true)
        localStorage.removeItem('token');
        dispatch(setAuthStatus(false));
        dispatch(setToken(null));
    }

    return (
        <div>
            <div
                className={styles.hamburger_lines}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={isOpen ? styles.line1 : styles.line1_active}></span>
                <span className={isOpen ? styles.line2 : styles.line2_active}></span>
                <span className={isOpen ? styles.line3 : styles.line3_active}></span>
            </div>
            <div>
                {
                    !isOpen &&
                    <div className={styles.menu_items_active}>
                        <div className={styles.container_link}>
                            <Link
                                className={styles.link}
                                to={'/'}
                                onClick={() => setIsOpen(true)}
                            >
                                Главная
                            </Link>

                            <Link
                                className={styles.link}
                                to={'/rates'}
                                onClick={() => setIsOpen(true)}
                            >
                                Тарифы
                            </Link>

                            <Link
                                className={styles.link}
                                to={'/faq'}
                                onClick={() => setIsOpen(true)}
                            >
                                FAQ
                            </Link>
                        </div>
                        {
                            !authStatus
                                ? <div className={styles.container_signin}>
                                    <p className={styles.text}>
                                        Зарегистрироваться
                                    </p>
                                    <Link className={styles.link_btn} to={'/auth'}>
                                        <button
                                            className={styles.button}
                                            onClick={() => setIsOpen(true)}
                                        >
                                            Войти
                                        </button>
                                    </Link>

                                </div>
                                : <div className={styles.container_signin}>
                                    <button
                                        className={styles.button}
                                        onClick={sighUp}
                                    >
                                        Выйти
                                    </button>
                                </div>
                        }
                    </div>
                }
            </div>
        </div>

    )
};