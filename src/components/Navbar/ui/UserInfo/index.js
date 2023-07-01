import { AccountInfo } from "../AccountInfo";
import user from '../../../../assets/user.png';
import styles from './styles.module.css';
import { useDispatch } from "react-redux";
import { setAuthStatus, setToken } from "../../../../pages/AuthPage/services/slice";

export const UserInfo = () => {

    const dispatch = useDispatch();

    const sighUp = () => {
        localStorage.removeItem('token');
        dispatch(setAuthStatus(false));
        dispatch(setToken(null));
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