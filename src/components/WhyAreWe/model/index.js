import { Carousel } from '../ui/Carousel';
import styles from './styles.module.css';

export const WhyAreWe = () => {
    return (
        <section className={styles.main}>
            <h2 className={styles.header}>
                Почему именно мы
            </h2>
            <Carousel />
        </section>
    )
}
