import styles from './styles.module.css';
import document from '../../../assets/Document.png';
import folders from '../../../assets/Folders.png'
import searchimg from '../../../assets/searchPage.png';
import { SearchForm } from '../ui/SearchForm';
import { useLoader } from '../../../hooks/useLoader';
import { useSelector } from 'react-redux';
import { getAuthStatus } from '../../AuthPage/services/slice';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

export const SearchPage = () => {

    const [changeOpen, showLoader] = useLoader();
    const authStatus = useSelector(getAuthStatus);
    const navigate = useNavigate();

    useEffect(() => {
        !authStatus && navigate('/')
    }, [authStatus, navigate])

    return (
        <section className={styles.main}>
            { showLoader() }

            <div className={styles.container_header}>
                <div>
                    <h2 className={styles.header}>
                        Найдите необходимые данные в пару кликов.
                    </h2>
                    <p className={styles.par}>
                        Задайте параметры поиска. <br /> Чем больше заполните, тем точнее поиск
                    </p>
                </div>
                <div>
                    <img className={styles.document} src={document} alt='document' />
                    <img className={styles.folders} src={folders} alt='folders' />
                </div>
            </div>
            <div className={styles.container_form}>
                <SearchForm changeOpen={changeOpen} />
                <img className={styles.img} src={searchimg} alt='search' />
            </div>
        </section>
    );
};