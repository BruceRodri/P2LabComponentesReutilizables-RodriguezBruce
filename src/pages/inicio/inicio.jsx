import styles from './inicio.module.css';
import { ConceptoCard } from '../../components/concepto-card';

export const InicioPage = () => {
    const conceptos = [
        {
            imagen: "https://keepcoding.io/wp-content/uploads/2023/09/image-265.png",
            titulo: "Componentes Reutilizables",
            descripcion: "Los componentes permiten dividir la UI en piezas independientes y reutilizables, facilitando el mantenimiento del código."
        },
        {
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHnJDLOcdm_0b6N6kNj-1OvO9KhKYgqIy0w&s",
            titulo: "JavaScript Moderno",
            descripcion: "React utiliza las características más modernas de JavaScript como arrow functions, destructuring y spread operators."
        },
        {
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCi82ldsv57GMVCXc1VahigJu4SxiT8wTWIQ&s",
            titulo: "Vite",
            descripcion: "Vite proporciona un entorno de desarrollo rápido con Hot Module Replacement (HMR) y builds optimizados."
        }
    ];

    return (
        <div className={styles.inicio}>
            <h2 className={styles['titulo-pagina']}>Laboratorio Bruce Rodriguez</h2>
            <div className={styles.grid}>
                {conceptos.map((concepto, index) => (
                    <ConceptoCard
                        key={index}
                        imagen={concepto.imagen}
                        titulo={concepto.titulo}
                        descripcion={concepto.descripcion}
                    />
                ))}
            </div>
        </div>
    );
};