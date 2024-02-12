//Imports
import { URLCompanies } from "../API/URLS.js";
import { showAlert } from '../utils/alert.js';
import { get } from '../API/clientHttp.js';

//Selectors
const loginForm = document.querySelector('#formLogin');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

loginForm.addEventListener('submit', (e)=>
{
    e.preventDefault();
    
    logIn();
});

async function logIn()
{
    const data = await get(`${URLCompanies}?email=${email.value}`);

    if(!data)
    {
        showAlert('Email no encontrado');
        return;
    }

    if (data[0].password !== password.value)
    {
      showAlert('Contraseña incorrecta');
      return;
    }
  
    localStorage.setItem('company', JSON.stringify(data));

    window.location.href = 'administrator.html';
}
