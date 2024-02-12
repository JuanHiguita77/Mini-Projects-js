//Imports
import { URLCompanies } from '../API/URLS.js';
import { get, post } from '../API/clientHttp.js';
import { showAlert } from '../utils/alert.js';

//Selectores y variables globales
const form = document.getElementById("formRegister");
const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");
const nameCompany = document.querySelector('#company');
const imageCompany = document.querySelector('#img-company');

//Eventos
form.addEventListener("submit", (event) =>
{
  event.preventDefault();

  createCompany();
})

async function createCompany()
{
    //Validar la información

    if (!validatePassword()) {
      showAlert("Contraseña no válida")
      return;
    }
  
    try
    {
      
    //Validar que el email no esté registrado
      if (await validateEmail()) {
      showAlert("El email ya se encuentra registrado.");
      return;
    }

    const company = 
    {
      email: userEmail.value,
      password: userPassword.value,
      nameCompany: nameCompany.value,
      imageCompany: imageCompany.value,
      nit: parseInt(Math.random() * (99999999 - 11111111 + 1)) + 11111111,
    }
    
    //Crear la empresa
    await post(URLCompanies, company);
  }
  catch (error)
  {
      showAlert("Ocurrió un error al crear la empresa.")
  }

}

async function validateEmail()
{
  try {

    const response = await get(`${URLCompanies}?email=${userEmail.value}`);

    return response.length
  }
  catch (error)
  {
    return false
  }
  
}

function validatePassword() {

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){6,15}$/;

    //Validar que las dos contraseñas sean iguales, tengan una minima longitud de 6 caracteres y tengan un caracter especial
    return userPassword.value === passwordConfirmation.value && regex.test(userPassword.value)
}