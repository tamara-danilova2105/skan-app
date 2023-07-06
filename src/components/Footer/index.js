import styles from './styles.module.css';
import logo from '../../assets/logo_white.png'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img className={styles.img} src={logo} alt='logo' />
            <div className={styles.contact}>
                <div>
                    {
                        ['г. Москва, Цветной б-р, 40', '+7 495 771 21 11', 'info@skan.ru']
                            .map((p, index) => <p key={index} className={styles.text}>{p}</p>)
                    }
                </div>
                <div>
                    <p className={styles.copyright}>Copyright. 2022</p>
                </div>
            </div>
        </footer>
    );
};