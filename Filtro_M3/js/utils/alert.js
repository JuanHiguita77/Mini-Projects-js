export function showAlert(msg) {
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