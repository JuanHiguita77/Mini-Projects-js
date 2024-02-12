const btnLogout = document.querySelector("#btnLogout");

btnLogout.addEventListener("click", () =>
{
  localStorage.removeItem('company');
  window.location.href = "index.html";
})