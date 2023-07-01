import styles from './styles.module.css';
import images from '../../../assets/Characters.png'
import { SignInForm } from '../ui/SignInForm';
import { useLoader } from '../../../hooks/useLoader';

export const AuthPage = () => {

    const [changeOpen, showLoader] = useLoader();

    return (
        <section className={styles.auth_page}>
            { showLoader() }
            <div>
                <h2 className={styles.header}>Для оформления подписки на тариф, необходимо авторизоваться.</h2>
                <img className={styles.characters} src={images} alt='Characters'/>
            </div>
            <SignInForm changeOpen={changeOpen} />
        </section>
    );
};