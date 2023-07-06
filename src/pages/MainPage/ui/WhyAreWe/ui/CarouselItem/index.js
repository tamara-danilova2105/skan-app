import styles from './styles.module.css';

export const CarouselItem = ({ icon, text }) => {
    return (
        <div className={styles.main}>
            <img src={icon} alt='item' />
            <p className={styles.text}>{text}</p>
        </div>
    );
};