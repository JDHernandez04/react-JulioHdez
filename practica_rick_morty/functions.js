async function obtenerPersonajes() {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    return data.results;
}

function pintarPersonajes(personajes) {
    let tarjetasHTML = "";
    
    personajes.forEach(personaje => {
        tarjetasHTML += `
        <div class="card">
            <img src="${personaje.image}" alt="${personaje.name}">
            
            <!-- Agregamos este div para aplicar el padding de tu CSS -->
            <div class="card-info">
                <h3>${personaje.name}</h3>
                <p class="species">${personaje.species}</p>
            </div>
        </div>
        `;
    });
    
    document.getElementById("main-container").innerHTML = tarjetasHTML;
}

obtenerPersonajes().then(pintarPersonajes);