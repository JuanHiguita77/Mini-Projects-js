const formLogin = document.getElementById("formLogin")
const userEmail = document.getElementById("userEmail")
const userPassword = document.getElementById("userPassword")


const URL = "http://localhost:3000/users"

formLogin.addEventListener("submit", (e)=>{
    e.preventDefault()
    login()
})

 async function login() {
    //Verificamos que este el correo
    const response =  await fetch(`${URL}?email=${userEmail.value}`)
    const data = await response.json()
    //Muestra el correo encontrado
    console.log(data);

    //Si no hay por lo menos un dato, muestra el mensaje
    if (!data.length) {
        showAlert("email no registrado");
        return
    }
    //Verifica la contraseña que le ingresan por input con el server
    if (data[0].password === userPassword.value) {
        //autenticar 
        localStorage.setItem("isAuthenticated", "true")
        //  Window es un objeto global que nos permite acceder a las propiedades de la ventana
        window.location.href = "administrator.html"
    }else{
        showAlert("contraseña incorrecta");
    }
}

function showAlert(msg) {
    Swal.fire({
        title: 'Error!',
        text: msg,
        icon: 'error',
        showConfirmButton: false,
        timer: 4000,
        toast: "true",
        position: "bottom-right"
    })
}
