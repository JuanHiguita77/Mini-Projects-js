//Importaciones
import {callToApi, loadShowMore} from './functions.js'

//Selectores
const inputTitle = document.querySelector("#search");
const container = document.querySelector(".container-cards");

let timer = 0;

//Eventos
container.addEventListener('click', (e) =>
{
    //Nos devuelve las clases del elemento clickeado
    if(e.target.classList.contains('btn-show-more'))
    {
        //Extraemos el id del elemento
        const id = e.target.getAttribute('id-movie')
        
        loadShowMore(id);
    }

    if(e.target.classList.contains('bx-arrow-back'))
    {
        callToApi(inputTitle.value);
    }
})


inputTitle.addEventListener("input", (event) => {
    //Event = evento que ocurrió
    //target = la etiqueta donde ocurrió el evento
    //Value = el valor del input
    // console.log(event.target.value)

    //Hacemos un BackDrop de forma manual con JAVASCRIPT    
    clearTimeout(timer)
    timer = setTimeout(() => {
        //Llamado a la API
        callToApi(event.target.value)
    }, 500);
})




