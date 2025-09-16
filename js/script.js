// Función para mostrar u ocultar elementos
function toggleElement(id) {
  var element = document.getElementById(id);
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

// Mensaje de bienvenida moderno
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    alert(
      "¡Bienvenido al Portal de Programación para Nutriólogos!\nExplora nuestros recursos para tus materias de computación."
    );
  }, 1000);
});

// Efecto de escritura para el título
let i = 0;
const title = "Programación para Nutriólogos";
const speed = 100;

function typeWriter() {
  if (i < title.length) {
    document.querySelector("h1").textContent += title.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// Descomenta la siguiente línea para activar el efecto de escritura
// window.onload = typeWriter;
