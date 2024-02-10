//Imports
import { URLUsers } from "../API/URLS.js";
//Selectors
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const loginForm = document.querySelector('#loginForm');

loginForm.addEventListener('submit', (e)=>
{
    e.preventDefault();

    logIn();
});

async function logIn()
{
    const response = await fetch(`${URLUsers}?email=${email.value}`);
    const data = await response.json();

    if(!data)
    {
        console.log('email no encontrado');
        return;
    }

    if(data[0].password !== password.value)
    {
        console.log('Contraseña mala');
        return;
    }
    
    localStorage.setItem('user', JSON.stringify(data[0]));

    window.location.href = 'administrator.html';
}