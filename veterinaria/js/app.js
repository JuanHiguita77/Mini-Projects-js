//selectores
const mascotNameInput = document.querySelector('#name_pet');
const namePersonInput = document.querySelector('#name_person');
const phoneInput = document.querySelector('#phone_person');
const dateCiteInput = document.querySelector('#date_cite');
const timeCiteInput = document.querySelector('#time_cite');
const descriptionInput = document.querySelector('#description');

//Boton en cada tarjeta de cita
//Boton editar
const editCite = document.querySelector('.editar');

//Boton guardar
const btnSave = document.querySelector('#btnSave');

//Guarda las citas
const cites = [];

//Boton guardar cita
btnSave.addEventListener('click', () =>
{
    //Añadir una cita
    addCite();

    console.log(cites);
})

//Llenar objeto agregando la cita
function addCite()
{   
    //Objeto cita
    const cite = 
    {
        mascot: null,
        own: null,
        phone: null,
        date: null,
        hour: null,
        description: null,
    } 

    //llenar el objeto con una cita
    cite.mascot = mascotNameInput.value;
    cite.own = namePersonInput.value;
    cite.phone = phoneInput.value;
    cite.date = dateCiteInput.value;
    cite.hour = timeCiteInput.value;
    cite.description = descriptionInput.value;

    if(alerta())
    {    
        //Añadir el objeto al arreglo
        cites.push(cite);

        //Creamos la cita html
        addCiteHtml();
    }
}

//Alerta
function alerta()
{
    //Elemento donde se agrega la alerta
    const citesAlert = document.querySelector('.citasContainer h4');
    //Contenedor de la alerta
    const alerta = document.createElement('div');
    
    //Funcion de mostrar alerta(hacer los selectores globales)
    if(mascotNameInput.value === '' || namePersonInput.value === '' || phoneInput.value === '' || dateCiteInput.value === '' || timeCiteInput.value === '' || descriptionInput.value === '')
    {
        //mensaje de ingresar todos los datos
        //Agregar alerta
        alerta.innerHTML = `<div class="alert alert-danger" role="alert">
            Todos los campos son obligatorios!
        </div>`;
    
        //Agregar alerta
        citesAlert.before(alerta, citesAlert);
    
        //Eliminar alerta despues de 2 segundos
        setTimeout(() =>
        {
            alerta.remove();
        },2000);
        
        //Retorna que no se agrego ninguna cita
        return false;
    }
    
    //mensaje de ingresar todos los datos
    alerta.innerHTML = `<div class="alert alert-success" role="alert">
                            Cita guardada satisfactoriamente!
                        </div>`;

    //Agregar alerta              
    citesAlert.before(alerta, citesAlert);

    //Eliminar el mensaje
    setTimeout(() =>
    {
        alerta.remove();
    },2000)

    //reset formulario
    document.querySelector('.form').reset();

    //Retorna que se agrego una cita
    return true;
}

function addCiteHtml()
{
    //Contenedor de la tarjeta
    const cardContainer = document.querySelector('.container-cites');

    //Contenedor Template tarjeta
    const cardFull = document.createElement('div');

    //Recorremos cada objeto para mostrar las citas con los diferentes datos
    cites.forEach(cita =>
    {
        //Template de la tarjeta
        cardFull.innerHTML = `
                                <div class="card card_cite">
                                    <div class="card-body">
                                        <h5 class="card-title fs-3 fw-bold">${cita.mascot}</h5>
                                        <p class="card-text">
                                            <div class="d-flex gap-2">
                                            <span class="fw-bold">Propietario:</span>
                                            <span>${cita.own}</span>
                                            </div>
                                            <div class="d-flex gap-2">
                                            <span class="fw-bold">Telefono:</span>
                                            <span>${cita.phone}</span>
                                            </div>
                                            <div class="d-flex gap-2">
                                            <span class="fw-bold">Fecha:</span>
                                            <span>${cita.date}</span>
                                            </div>
                                            
                                            <div class="d-flex gap-2">
                                            <span class="fw-bold">Hora:</span>
                                            <span>${cita.hour}</span>
                                            </div>
                                            <div class="d-flex gap-2">
                                            <span class="fw-bold">Sintomas:</span>
                                            <span>${cita.description}</span>
                                            </div>
                                        </p>

                                        <div class="d-flex gap-2">
                                            <button class="btn btn-primary editar">Editar</button>
                                            <button class="btn btn-danger eliminar" onClick="deleteCite()">Eliminar</button>
                                        </div>
                                    </div>
                                </div>
        `;
    });

    //Agregamos cada tarjeta al html
    cardContainer.appendChild(cardFull);
}

//Funcion eliminar citas individuales
function deleteCite(e)
{
    const citeFullContainer = e.target.parentElement.parentElement.parentElement;
    
    console.log('se borro el div', citeFullContainer);
}

//arreglar para que aparezca una sola vez la alerta