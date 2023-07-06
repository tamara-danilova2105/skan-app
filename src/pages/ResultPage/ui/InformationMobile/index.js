import { useSelector } from 'react-redux';
import styles from './styles.module.css';
import { getDataGistorams } from '../../../SearchPage/services/slice';

export const InformationMobile = () => {

    const dataGistograms = useSelector(getDataGistorams);
    console.log(dataGistograms);

    return (
        <div className={styles.main}>
            ЗДЕСЬ БУДЕТ СЛАЙДЕР
        </div>
    );
};