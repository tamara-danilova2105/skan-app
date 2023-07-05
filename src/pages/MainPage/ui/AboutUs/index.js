import { useSelector } from 'react-redux';
import { getAuthStatus } from '../../../AuthPage/services/slice';
import { Link } from 'react-router-dom';
import main from '../../../../assets/main.png';
import styles from './styles.module.css';

export const AboutUs = () => {
    const authStatus = useSelector(getAuthStatus);

    return (
        <section className={styles.main}>
            <div className={styles.container_about}>
                <h1 className={styles.header}>
                    Cервис по поиску публикаций <br /> о компании <br /> по его ИНН
                </h1>
                <p className={styles.text}>
                    Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.
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
            <img className={styles.img} src={main} alt='main' />
        </section>
    );
};