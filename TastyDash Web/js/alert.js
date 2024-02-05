const form = document.querySelector('.container-order-confirmation');
const alert = document.querySelector('#alertForm');

form.addEventListener('submit', e =>
{
  e.preventDefault();
})

//ANIMATION ADDITIONAL INFO
function modalInformacion()
{
  console.log('sumbit');
  //Estilo que se le aplicara al modal despues de añadirle la clase para el estilo
  alert.classList.add("modal-animation-open")
};

modalInformacion();

