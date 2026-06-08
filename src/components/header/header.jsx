import styles from './header.module.css';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className={styles.header}>
            <h2 className={styles.titulo}>Programación Integrativa de Componentes Web</h2>
            <nav className={styles.nav}>
                <Link className={styles['items-menu']} to="/">Inicio</Link>
                <Link className={styles['items-menu']} to="/nosotros">Nosotros</Link>
                <Link className={styles['items-menu']} to="/contactos">Contactos</Link>
                <Link className={styles['items-menu']} to="/personajes">Personajes</Link>
            </nav>
        </header>
    );
};