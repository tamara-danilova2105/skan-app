import styles from './styles.module.css';
import logo from '../../../../assets/logo_main.png'
import { useSelector } from 'react-redux';
import { getAuthStatus } from '../../../../pages/AuthPage/services/slice';
import { AccountInfo } from '../../ui/AccountInfo';

export const NavbarMobile = () => {

    const authStatus = useSelector(getAuthStatus);

    return (
        <nav className={styles.navbar}>
            <img className={styles.img} src={logo} alt='logo' />
            { authStatus && <AccountInfo />}
            ЗДЕСЬ будет меню для мобильных
        </nav>
    );
};