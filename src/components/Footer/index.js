import styles from './styles.module.css';
import logo from '../../assets/logo_white.png'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img className={styles.img} src={logo} alt='logo' />
            <div className={styles.contact}>
                <div>
                    <p className={styles.text}>г. Москва, Цветной б-р, 40</p>
                    <p className={styles.text}>+7 495 771 21 11</p>
                    <p className={styles.text}>info@skan.ru</p>
                </div>
                <div>
                    <p className={styles.copyright}>Copyright. 2022</p>
                </div>
            </div>
        </footer>
    );
};