// document.addEventListener("contextmenu", e => e.preventDefault());
// document.addEventListener("keydown", e => {
//   if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
//     e.preventDefault();
//   }
// });

function toExchangeImage(imgElement) {
document.getElementById("img_main").src = imgElement.src;
}

function toExchangeImage(img) {
// Cambiar la imagen principal
document.getElementById("img_main").src = img.src;

// Quitar "active" de todas las miniaturas
document.querySelectorAll(".thumbnail").forEach(el => {
    el.classList.remove("active");
});

// Agregar "active" a la miniatura clickeada
img.parentElement.classList.add("active");
}

// Marcar la primera miniatura como seleccionada por defecto al cargar
window.addEventListener("DOMContentLoaded", () => {
const firstThumbnail = document.querySelector(".thumbnail");
if (firstThumbnail) {
    firstThumbnail.classList.add("active");
}
});



