import styles from './styles.module.css';
// import { Link } from "react-router-dom";

export const BurgerMenu = ({ isOpen, setIsOpen }) => {
    return (
        <div>
            <div
                className={styles.hamburger_lines}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={isOpen ? styles.line1 : styles.line1_active}></span>
                <span className={isOpen ? styles.line2 : styles.line2_active}></span>
                <span className={isOpen ? styles.line3 : styles.line3_active}></span>
            </div>
            {/* <div class={isOpen ? styles.menu_items : styles.menu_items_active}>
                <div className={styles.container_link}>
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
                <div className={styles.container_signin}>

                </div>
            </div> */}
        </div>

    )
};