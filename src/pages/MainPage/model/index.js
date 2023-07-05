import styles from './styles.module.css';
import desktop from '../../../assets/Group14Desk.png';
import mobile from '../../../assets/Group14Mob.png';
import { OurRates } from '../ui/OurRates/model';
import { AboutUs } from '../ui/AboutUs';
import { WhyAreWe } from '../ui/WhyAreWe/model';

export const MainPage = () => {
    const width = window.innerWidth;
    const breakpoint = 620;

    return (
        <main className={styles.main}>
            <AboutUs />
            <WhyAreWe />
            <img className={styles.img} src={width > breakpoint ? desktop : mobile} alt='logo' />
            <OurRates />
        </main>
    );
};
