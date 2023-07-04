import styles from './styles.module.css';
import logo from '../../../../assets/logo_main.png'
import { Link } from 'react-router-dom';
import { SignIn } from '../../ui/SignIn';
import { UserInfo } from '../../ui/UserInfo';
import { useSelector } from 'react-redux';
import { getAuthStatus } from '../../../../pages/AuthPage/services/slice';

export const NavbarDesktop = () => {

    const authStatus = useSelector(getAuthStatus);

    return (
        <nav className={styles.navbar}>
            <img className={styles.img} src={logo} alt='logo' />

            <div>
                <Link
                    className={styles.link}
                    to={'/'}
                >
                    Главная
                </Link>

                <Link
                    className={styles.link}
                    to={'/rates'}
                >
                    Тарифы
                </Link>

                <Link
                    className={styles.link}
                    to={'/faq'}
                >
                    FAQ
                </Link>
            </div>

            <div>
                { authStatus ? <UserInfo /> : <SignIn /> }
            </div>
        </nav>
    )
}