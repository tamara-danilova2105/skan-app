import { useSelector } from "react-redux";
import { getDataResult } from "../../SearchPage/services/slice";
import resultIcon from '../../../assets/result_icon.png'
import styles from './styles.module.css';

export const ResultPage = () => {

    const dataResult = useSelector(getDataResult);
    console.log(dataResult);

    return (
        <section className={styles.main}>
            <div className={styles.container_header}>
                <div>
                    <h2 className={styles.header}>
                        Ищем. Скоро будут результаты
                    </h2>
                    <p className={styles.par}>
                        Поиск может занять некоторое время, просим сохранять терпение.
                    </p>
                </div>
                <img className={styles.img} src={resultIcon} alt="result icon" />
            </div>
        </section>
    );
};