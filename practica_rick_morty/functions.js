console.log("Hello World Rick and Morty");


async function obtenerPersonajes() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    console.log ("Personajes obtenidos:", data.results);
    return data.results;
  } catch (error) {
    console.error("Error al obtener los personajes:", error);
    return []; 
  }
}