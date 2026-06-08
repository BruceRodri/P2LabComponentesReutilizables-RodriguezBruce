import styles from './footer.module.css';

export const Footer = () => {
    const añoActual = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <p className={styles.texto}>
                © {añoActual} - Bruce Rodriguez
            </p>
            <p className={styles.texto}>
                Todos los derechos reservados
            </p>
        </footer>
    );
};