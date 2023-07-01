import { AccountInfo } from "../AccountInfo";
import user from '../../../../assets/user.png';
import styles from './styles.module.css';

export const UserInfo = ({ setAuthStatus, setToken }) => {

    const sighUp = () => {
        localStorage.removeItem('token');
        setAuthStatus(false);
        setToken(null);
    }

    return (
        <div className={styles.container_account}>
            <AccountInfo />
            <div className={styles.user_info}>
                <div className={styles.info}>
                    <p className={styles.text}>Алексей A.</p>
                    <button
                        className={styles.button}
                        onClick={sighUp}
                    >
                        Выйти
                    </button>
                </div>
                <img className={styles.img} src={user} alt="user" />
            </div>
        </div>
    )
}