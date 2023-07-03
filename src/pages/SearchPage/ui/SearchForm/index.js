import { data } from '../../lib/data';
import styles from './styles.module.css';

export const SearchForm = () => {

    return (
        <form className={styles.form}>
            <div className={styles.container_params}>
                <div>

                </div>
                <div>

                </div>
            </div>
            <div>
                {
                    data.map((item, index) => (
                        <div className={styles.container_items} key={index}>
                            <input type='checkbox' />
                            <label className={styles.item}>{item}</label>
                        </div>
                    ))
                }
            </div>
        </form>
    );
};