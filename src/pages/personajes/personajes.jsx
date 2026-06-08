import styles from './personajes.module.css';
import { useState, useEffect } from 'react';
import { PersonajeCard } from '../../components/personaje-card';
import { obtenerPersonajes } from '../../services/rick-and-morty-service';

export const PersonajesPage = () => {
    // ESTADO: PERSONAJES
    const [personajes, setPersonajes] = useState([]);
    // ESTADO: CARGA
    const [cargando, setCargando] = useState(true);
    // ESTADO: ERROR
    const [error, setError] = useState(null);

    useEffect(() => {
        const cargarPersonajes = async () => {
            try {
                setCargando(true);
                const datos = await obtenerPersonajes();
                setPersonajes(datos);
                setError(null);
            } catch (err) {
                setError('Error al cargar personajes: ' + err.message);
            } finally {
                setCargando(false);
            }
        };
        cargarPersonajes();
    }, []);

    if (cargando) return <div className={styles.estado}><p>Cargando personajes...</p></div>;
    if (error) return <div className={styles.estado}><p className={styles.error}>{error}</p></div>;

    return (
        <div className={styles.personajes}>
            <h2 className={styles['titulo-pagina']}>Personajes de Rick and Morty</h2>
            <div className={styles.grid}>
                {personajes.map((personaje) => (
                    <PersonajeCard
                        key={personaje.id}
                        imagen={personaje.image}
                        nombre={personaje.name}
                        especie={personaje.species}
                    />
                ))}
            </div>
        </div>
    );
};