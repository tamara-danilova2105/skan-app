import styles from './styles.module.css';

export const Loader = () => {
    return (
        <div className={styles.container_loader}>
            <div className={styles.lds_ellipsis}><div></div><div></div><div></div><div></div></div>
        </div>
    );
};