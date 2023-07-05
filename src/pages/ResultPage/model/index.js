import { useSelector } from "react-redux";
import resultIcon from '../../../assets/result_icon.png'
import styles from './styles.module.css';
import { getAuthStatus } from "../../AuthPage/services/slice";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { InformationResult } from "../ui/InformationResult";

export const ResultPage = () => {

    const authStatus = useSelector(getAuthStatus);
    const navigate = useNavigate();

    useEffect(() => {
        !authStatus && navigate('/')
    }, [authStatus, navigate])

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
            <InformationResult />
        </section>
    );
};