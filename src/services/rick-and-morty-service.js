//API DE RICK AND MORTY
const API_URL = "https://rickandmortyapi.com/api/character";
// FUNCION PARA OBTENER LOS PERSONAJES
export const obtenerPersonajes = async () => {
  try {
    // PETICION GET A LA API
    const respuesta = await fetch(API_URL);
    // VERIFICA SI FUE EXITOSA
    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }
    // CONVIERTE RESPUESTA EN JSON
    const datos = await respuesta.json();
    // RETORNA ARREGLO DE PERSONAJES
    return datos.results;
  } catch (error) {
    // MUESTRA ERROR OCURRIDO
    console.error("Error al obtener personajes:", error);
    throw error;
  }
};
