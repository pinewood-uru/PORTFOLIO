// COLLAPSE ------- Creador con ayuda de windsurf extension

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
    content.style.display = content.style.display === "flex" ? "none" : "flex";
  });
});

// CURSOR-------- https://codepen.io/OuterVale/embed/MYWQQoR?default-tab=result&theme-id=1

const cursor = document.querySelector(".cursor");

// Position cursor div to cursor position
document.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
});

// Add 'click' class to cursor on mousedown and remove on mouseup
document.addEventListener("mousedown", (e) => cursor.classList.add("click"));
document.addEventListener("mouseup", (e) => cursor.classList.remove("click"));

// Add 'pressable' class to cursor when hovering certain elements
const items = document.querySelectorAll('a, button');
items.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('pressable');
  });
  
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('pressable');
  });
});

// LOADER ------- https://css-loaders.com/clones/

const loader = document.getElementById('ctn-loader');

window.addEventListener('load', () => {

  loader.classList.add('hide');
  setTimeout(() => {
    loader.style.display = 'none';
    document.body.style.overflowY = 'auto';
  }, 2000);
});

loader.classList.add('show');
document.body.style.overflowY = 'hidden';


// FOOTER EN MOBILE --------- Creador con ayuda de windsurf extension

const footer = document.querySelector("footer");

function showFooter() {
  if (window.innerWidth <= 600) {
    if (window.scrollY > 500) {
      footer.style.bottom = "0";
    } else {
      footer.style.bottom = "-8vh";
    }
  }
}

window.addEventListener("scroll", showFooter);

