import styles from './styles.module.css';
import logo from '../../../assets/logo_main.png'

export const NavbarMobile = () => {
    return (
        <nav className={styles.navbar}>
            <img className={styles.img} src={logo} alt='logo' />
            ЗДЕСЬ будет меню для мобильных
        </nav>
    );
};