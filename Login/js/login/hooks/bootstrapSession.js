(()=>{
    //logica
    //si existe la sesion del usuario dentro del local storage
    const isAuthenticated = localStorage.getItem("isAuthenticated")
    const path = window.location.pathname
    //obtengo la ruta a que el usuario quiere acceder y creo una lista con 
    //los nombres de los archivos que quiero proteger
    const privateRoutes = ["administrator.html"]
    
    //cort el path para acceder solo al archivo al que intenta acceder el usuario
    const routerActu = path.substring(path.lastIndexOf("/") +1)

    console.log(isAuthenticated)
    console.log(path);
    console.log(routerActu);

    if (privateRoutes.includes(routerActu)&& !isAuthenticated) {
        console.log("No tienes permisos")
        window.location.href = "index.html"
    }
}
    
)()