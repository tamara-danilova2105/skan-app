import { AboutUs } from '../../components/AboutUs';
import { WhyAreWe } from '../../components/WhyAreWe/model';
import styles from './styles.module.css';

export const MainPage = () => {
    return (
        <main className={styles.main}>
            <AboutUs />
            <WhyAreWe />
        </main>
    );
};
