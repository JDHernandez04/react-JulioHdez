async function obtenerPeliculas() {
    const response = await fetch("https://ghibliapi.vercel.app/films");
    const data = await response.json();
    return data; 
}

function pintarPeliculas(peliculas) {
    let tarjetasHTML = "";
    
    peliculas.forEach(pelicula => {
        tarjetasHTML += `
        <div class="card">
            <!-- Imagen -->
            <img src="${pelicula.image}" alt="${pelicula.title}">
            
            <div class="card-info">
                <!-- Elemento 1: Título en Inglés -->
                <h3>${pelicula.title}</h3>
                
                <!-- Elemento 2: Título Original en Japonés -->
                <p class="original-title">${pelicula.original_title}</p>
                
                <!-- Elemento 3: Director y Año concatenados -->
                <p class="director-year">${pelicula.director} • ${pelicula.release_date}</p>
            </div>
        </div>
        `;
    });
    
    document.getElementById("main-container").innerHTML = tarjetasHTML;
}

obtenerPeliculas().then(pintarPeliculas);