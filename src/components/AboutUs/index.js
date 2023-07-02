import { useSelector } from 'react-redux';
import styles from './styles.module.css';
import { getAuthStatus } from '../../pages/AuthPage/services/slice';
import { Link } from 'react-router-dom';
import main from '../../assets/main.png'

export const AboutUs = () => {
    const authStatus = useSelector(getAuthStatus);

    return (
        <section className={styles.main}>
            <div className={styles.container_about}>
                <h1 className={styles.header}>
                    Cервис по поиску публикаций <br /> о компании <br /> по его ИНН
                </h1>
                <p className={styles.text}>
                    Комплексный анализ публикаций, получение данных <br /> в формате PDF на электронную почту.
                </p>
                {
                    authStatus &&
                    <Link to={'/search'}>
                        <button
                            className={styles.button}
                        >
                            Запросить данные
                        </button>
                    </Link>
                }
            </div>
            <img src={main} alt='main' />
        </section>
    );
};