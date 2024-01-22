//Selectores
const URLBase = 'http://localhost:3000';

//Inputs
const nameUser = document.querySelector('#user-name');
const ageUser = document.querySelector('#user-age');
const form = document.querySelector('#form');
const userId = document.querySelector('#user-id');

//Tbody para incrustar los usuarios
const tbody = document.querySelector('tbody');

//Events
//Cargar el html al iniciar
document.addEventListener('DOMContentLoaded', getUsers);

//Evento submit del formulario
form.addEventListener('submit', async (e)=>
{
    e.preventDefault();

    await createUser();  
})

//Creamos el usuario en la base de datos
async function createUser()
{
    const user =
    {
        name: nameUser.value,
        age: ageUser.value,
    }   

    /*FETCH
    await fetch(`${URLBase}/users`,
        {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },

            body: JSON.stringify(user),
        }
    )
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))*/

    //Con axios
    try
    {
        await axios.post(`${URLBase}/users`, user);

        //Traer los usuarios
        getUsers();
    }
    catch(err)
    {
        console.log(err)
    }


}

//Traer los usuario de la base de datos
async function getUsers()
{
    //Fetch
    /*const response = await fetch(`${URLBase}/users`);
    const data = response.json();
    console.log(data);*/

    //Axios
    try
    {
        const response = await axios.get(`${URLBase}/users`);

        renderUsers(response.data);
    }
    catch(err)
    {
        console.log(err)
    }
    
}

//Mostrar el html de usuarios
function renderUsers(users)
{
    cleanHtml();

    users.forEach( user => 
    {
        tbody.innerHTML += 
        `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.age}</td>
                <td>
                    <button type="button" class="btn btn-primary" id="edit" onClick="updateUser(${user.id})">Edit</button>
                    <button type="button" class="btn btn-danger" id="delete" onClick="deleteUser(${user.id})">Delete</button>
                </td>
            </tr>
        `;
    });
}

//Limpiar html
function cleanHtml()
{
    while(tbody.firstChild)
    {
        tbody.removeChild(tbody.firstChild)
    }
}


function updateUser(id)
{
    console.log('click editar')
    /*
    const user =
    {
        name: 'nuevo nombre',
    }  

    axios.patch(`${URLBase}/users/6695f`)*/
}

function deleteUser(id)
{
    console.log('click eliminar')

    axios.delete(`${URLBase}/users/${id}`)
}