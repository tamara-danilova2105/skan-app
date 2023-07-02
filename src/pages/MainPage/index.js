import { AboutUs } from '../../components/AboutUs';
import styles from './styles.module.css';

export const MainPage = () => {
    return (
        <main className={styles.main}>
            <AboutUs />
        </main>
    );
};
