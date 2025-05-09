// Selecciono todos los botones con la clase "collapse"
const buttons = document.querySelectorAll(".collapse");

// Recorro cada botón y le agrego un event listener para que se active cuando se haga click
buttons.forEach(button => {
  button.addEventListener("click", function () {
    // Le agrego o quito la clase "active" al botón
    this.classList.toggle("active");

    // Busco el elemento hermano siguiente (el que contiene el texto que se va a mostrar u ocultar)
    const content = this.nextElementSibling;

    // Verifico si el elemento hermano está visible o no
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});
