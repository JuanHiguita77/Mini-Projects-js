//Función para hacer el llamado a la API

//Selector
const container = document.querySelector(".container-cards");

export async function callToApi(title) 
{
    //Modifico la URL de la petición donde de añado el titulo de la pelicula
    const URL = `https://www.omdbapi.com/?apikey=690d22ef&s=${title}`
    //Realizo la petición HTTP con el servicio fetch
    //Await = codigo no bloqueante A código bloqueante
    
    //const response = await fetch(URL)
    const response = await axios.get(URL)

    //const data = await response.json()
    console.log('Datos de la pelicula por titulo: ', response.data.Search)

    //printMovies(data.Search)
    printMovies(response.data.Search)
}

//Traer mas informacion de la pelicula con el id cambiando la url
export async function loadShowMore(id)
{
    try
    {
        //Le pasamos el id y cambiamos la s por la i, porque asi dice la API que debe ser
        const URL = `https://www.omdbapi.com/?apikey=690d22ef&i=${id}`;

        //Peticion get a la URL
        const response = await axios.get(URL);

        console.log('Respuesta de la pelicula: ', response.data);

        printShowMore(response.data);
    }
    catch(err)
    {
        console.log('Pelicula no encontrada', err)
    }
}

//Función para mostrar las peliculas en el HTML
export function printMovies(movies) {
    //Elimine anteriores busquedas
    cleanHTML();

    //Recorremos la lista
    movies.forEach(movie => {
        //Inyectar el HTML
        container.innerHTML += `
            <div class="card">
                <h2 class="title-movie">${movie.Title}</h2>
                <img
                src="${movie.Poster}"
                alt=""
                />

                <p>Año: <span>${movie.Year}</span></p>
                <p>Tipo: <span>${movie.Type}</span></p>
                <button class="btn-show-more" id-movie="${movie.imdbID}">Ver más</button>
            </div>
        `;
    });
}

//INsertar el html con la informacion adicional por pelicula
export function printShowMore(dataMovie)
{
    //Sacamos los datos de la pelicula con destructuring
    const { Poster, Language, Genre, Country, Actors, 
            BoxOffice, Title, Year, Writer, Released, Plot } = dataMovie;

    //Limpiamos las anteriores peliculas
    cleanHTML();

    container.innerHTML = 
    `
        <div class="card-show-more">
            <h2>${Title}</h2>
            <img src="${Poster}" alt="poster"/>

            <div>
                <p>Genre: <span>${Genre}</span></p>
                <p>Released: <span>${Released}</span></p>
                <p>Año: <span>${Year}</span></p>
                <p>Language: <span>${Language}</span></p>
                <p>Writer: <span>${Writer}</span></p>
                <p>Country: <span>${Country}</span></p>
                <p>Actors: <span>${Actors}</span></p>
                <p>Plot: <span>${Plot}</span></p>
                <p>BoxOffice: <span>${BoxOffice}</span></p>
            </div> 
            <i class='bx bx-arrow-back'></i>
        </div>
    `;
}

export function cleanHTML()
{
    while(container.firstChild)
    {
        container.removeChild(container.firstChild)
    }
}