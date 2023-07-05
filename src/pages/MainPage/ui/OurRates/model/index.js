import { RateItem } from '../components/RateItem';
import { rates } from '../lib/rates';
import styles from './styles.module.css';

export const OurRates = () => {

    return (
        <section className={styles.main}>
            <h2 className={styles.header}>
                Наши тарифы
            </h2>
            <div className={styles.container_rates}>
                {
                    rates.map(rate =>
                        <RateItem
                            key={rate.header}
                            rate={rate}
                        />
                    )
                }
            </div>
        </section>
    );
};