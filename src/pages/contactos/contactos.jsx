import styles from './contactos.module.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export const ContactosPage = () => {
    return (
        <div className={styles.contactos}>
            <h2 className={styles['titulo-pagina']}>Información de Contacto</h2>
            <div className={styles.tarjeta}>
                <div className={styles.item}>
                    <FaEnvelope className={styles.icono} />
                    <div>
                        <h3>Correo Electrónico</h3>
                        <p>blrodriguez4@espe.edu.ec</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <FaPhone className={styles.icono} />
                    <div>
                        <h3>Teléfono</h3>
                        <p>+593 2 1234 567</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <FaMapMarkerAlt className={styles.icono} />
                    <div>
                        <h3>Dirección</h3>
                        <p>Vía Santo Domingo - Via Quevedo Km. 24 Hda. Zoila Luz Avenida Quevedo 3-703-914, 230153 Santo Domingo</p>
                    </div>
                </div>
            </div>
        </div>
    );
};