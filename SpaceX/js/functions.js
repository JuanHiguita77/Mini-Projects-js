//Función para hacer el llamado a la API

//Selector
const container = document.querySelector(".container-cards");

export async function callToApi() 
{
    const URL = `https://api.spacexdata.com/v3/launches`;

    
    const response = await axios.get(URL)

    console.log('Datos de los lanzamientos: ', response.data)

    printLaunchs(response.data)
}

export async function loadShowMore(id)
{
    try
    {
        const URL = `https://api.spacexdata.com/v3/launches/${id}`;

        const response = await axios.get(URL);

        console.log('Respuesta del lanzamiento: ', response);

        printShowMore(response.data);
    }
    catch(err)
    {
        console.log('Pelicula no encontrada', err)
    }
}


export function printLaunchs(launchs) {

    cleanHTML();

    launchs.forEach(launch => {

        container.innerHTML += `
            <div class="card">
                <h2 class="title-launch">${launch.mission_name}</h2>
                <img
                src="${launch.links.mission_patch}"
                alt=""
                />
                <p>Año: <span>${launch.launch_year}</span></p>
                <button class="btn-show-more" id-launch="${launch.flight_number}">Ver más</button>
            </div>
        `;
    });
}

export function printShowMore(launchData)
{

    const { rocket, links, launch_year, launch_success, mission_name } = launchData;

    cleanHTML();

    container.innerHTML = 
    `
        <div class="card-show-more">
                                                
            <iframe class="mx-auto" width="800" height="560" src="https://www.youtube.com/embed/${links.youtube_id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div>
                <h2>${mission_name}</h2>
                <p>Cohete: <span>${rocket.rocket_type}</span></p>
                <p>Rocket Type: <span>${launch_year}</span></p>
                <p>Succes?: <span>${launch_success ? 'Success Nice!!' : 'Noooo!, Destroy total!'}</span></p>
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