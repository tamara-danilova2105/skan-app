import styles from './styles.module.css';
import document from '../../../assets/Document.png';
import folders from '../../../assets/Folders.png'
import searchimg from '../../../assets/searchPage.png';
import { SearchForm } from '../ui/SearchForm';

export const SearchPage = () => {
    return (
        <section className={styles.main}>
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
                <SearchForm />
                <img src={searchimg} alt='search' />
            </div>
        </section>
    );
};