import styles from './styles.module.css';
import logo from '../../../../assets/logo_main.png';
import logoWhite from '../../../../assets/logo_white.png';
import { useSelector } from 'react-redux';
import { getAuthStatus } from '../../../../pages/AuthPage/services/slice';
import { AccountInfo } from '../../ui/AccountInfo';
import { BurgerMenu } from '../../ui/BurgerMenu';
import { useState } from 'react';

export const NavbarMobile = () => {

    const authStatus = useSelector(getAuthStatus);
    const [isOpen, setIsOpen] = useState(true);

    return (
        <nav className={isOpen ? styles.navbar : styles.navbar_active}>
            <div className={isOpen ? styles.logo : styles.logo_white}>
                <img className={styles.img} src={isOpen ? logo : logoWhite} alt='logo' />
                { (authStatus && isOpen) && <AccountInfo /> }
            </div>
            <BurgerMenu
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        </nav>
    );
};