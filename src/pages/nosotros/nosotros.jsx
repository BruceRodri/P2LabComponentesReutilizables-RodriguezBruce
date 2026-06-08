import styles from './nosotros.module.css';
import { MateriaItem } from '../../components/materia-item';
import { FaCode, FaDatabase, FaLaptopCode, FaBrain, FaBookOpen } from 'react-icons/fa';

export const NosotrosPage = () => {
    const materias = [
        {
            icono: <FaCode />,
            nombre: "Desarrollo Web para Integracion de Tecnologías",
            descripcion: "Desarrollo de aplicaciones web modernas con HTML, CSS y JavaScript."
        },
        {
            icono: <FaDatabase />,
            nombre: "Modelado Avanzado de Bases de Datos",
            descripcion: "Diseño y administración de bases de datos relacionales y NoSQL."
        },
        {
            icono: <FaLaptopCode />,
            nombre: "Programación Integrativa de Componentes Web",
            descripcion: "Creación de componentes para páginas web"
        },
        {
            icono: <FaBrain />,
            nombre: "Inteligencia Artificial",
            descripcion: "Estudio de algoritmos, aprendizaje automático, redes neuronales y modelos capaces de simular el pensamiento humano para resolver problemas complejos."
        },
        {
            icono: <FaBookOpen />,
            nombre: "Lectura y Escritura de Textos Académicos",
            descripcion: "Desarrollo de habilidades de comprensión lectora, argumentación crítica y redacción estructurada de documentos científicos y académicos bajo normas de citación."
        }
    ];

    return (
        <div className={styles.nosotros}>
            <h2 className={styles['titulo-pagina']}>Asignaturas del Semestre</h2>
            <div className={styles.lista}>
                {materias.map((materia, index) => (
                    <MateriaItem
                        key={index}
                        icono={materia.icono}
                        nombre={materia.nombre}
                        descripcion={materia.descripcion}
                    />
                ))}
            </div>
        </div>
    );
};