# Laboratorio React - Programacion Integrativa de Componentes Web

## Descripcion

Aplicacion web desarrollada con React y Vite para el laboratorio de la asignatura Programacion Integrativa de Componentes Web. El laboratorio implementa componentes reutilizables, navegacion con React Router, estilos encapsulados con CSS Modules y consumo de la API de Rick and Morty.

## Tecnologias utilizadas

- React
- Vite
- React Router DOM
- CSS Modules
- React Icons
- PropTypes

## Estructura del proyecto

src/
├── components/
│   ├── concepto-card/
│   ├── materia-item/
│   ├── personaje-card/
│   ├── header/
│   ├── footer/
│   └── layout/
├── pages/
│   ├── inicio/
│   ├── nosotros/
│   ├── contactos/
│   └── personajes/
├── services/
│   └── rick-and-morty-service.js
├── App.jsx
├── App.css
├── main.jsx
└── index.css

## Componentes reutilizables

- ConceptoCard: Tarjeta que muestra imagen, titulo y descripcion
- MateriaItem: Item que muestra icono, nombre y descripcion de una asignatura
- PersonajeCard: Tarjeta que muestra imagen, nombre y especie de un personaje
- Header: Encabezado con menu de navegacion
- Footer: Pie de pagina con año actual dinamico
- Layout: Estructura general que envuelve Header, contenido y Footer

## Rutas disponibles

- / (Inicio) - Conceptos de React
- /nosotros (Nosotros) - Asignaturas del semestre
- /contactos (Contactos) - Informacion institucional
- /personajes (Personajes) - Personajes de Rick and Morty

## Instalacion y ejecucion

git clone https://github.com/BruceRodri/ejemplo-react.git
cd ejemplo-react
npm install
npm run dev

La aplicacion estara disponible en http://localhost:5173

## API consumida

- Rick and Morty API: https://rickandmortyapi.com/api/character
- Se obtienen 20 personajes con nombre, especie e imagen

## Caracteristicas implementadas

- Componentes reutilizables con PropTypes
- Estilos encapsulados con CSS Modules
- Navegacion SPA con React Router
- Consumo de API REST con fetch
- Hooks useState y useEffect
- Renderizado dinamico con map
- Manejo de estados de carga y error
- Diseño responsivo

## Autor

Bruce Rodriguez
Estudiante de Ingenieria en Tecnologias de la Informacion

## Asignatura

Programacion Integrativa de Componentes Web
Ing. Kevin Chuquitarco, Mgtr.
Periodo Lectivo: 202650 - NRC: 29544
