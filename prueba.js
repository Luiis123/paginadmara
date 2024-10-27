document.getElementById("btn_open").addEventListener("click", open_close_menu);



//Declaramos variables
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-images img');
const dots = document.querySelectorAll('.carousel-dots .dot');
var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = "none";
        dots[index].classList.remove("active");
    });
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
    setTimeout(showSlides, 4000); // Cambia cada 4 segundos
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}

showSlides();
//Evento para mostrar y ocultar menú
    function open_close_menu(){
        body.classList.toggle("body_move");
        side_menu.classList.toggle("menu__side_move");
    }

//Si el ancho de la página es menor a 760px, ocultará el menú al recargar la página

if (window.innerWidth < 760){

    body.classList.add("body_move");
    side_menu.classList.add("menu__side_move");
}

//Haciendo el menú responsive(adaptable)

window.addEventListener("resize", function(){

    if (window.innerWidth > 760){

        body.classList.remove("body_move");
        side_menu.classList.remove("menu__side_move");
    }

    if (window.innerWidth < 760){

        body.classList.add("body_move");
        side_menu.classList.add("menu__side_move");
    }

});
