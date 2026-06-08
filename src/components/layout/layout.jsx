import styles from './layout.module.css';
import { Header } from '../header';
import { Footer } from '../footer';

export const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
        </div>
    );
};