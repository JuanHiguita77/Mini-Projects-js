const btnLogout = document.querySelector("#btnLogout")

btnLogout.addEventListener("click", ()=>{
    localStorage.removeItem("isAuthenticated")
    window.location.href = "index.html"
})