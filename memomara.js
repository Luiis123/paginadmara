var tarjetas = [
    "1.jpg", "1.jpg", "2.jpg", "2.jpg",
    "3.jpg", "3.jpg", "44.jpg", "44.jpg",
    "5.jpg", "5.jpg", "6.jpg", "6.jpg",
    "10.jpg", "10.jpg", "8.jpg", "8.jpg"
];

var imagen_temporal, esperando = false;
var contador = 0;

function CambiarImagen(imagen, indice) {
    imagen.src = `./nsqk/${tarjetas[indice]}`;
    imagen.removeAttribute("onclick");
    if (!esperando) imagen_temporal = imagen;
    else {
        if (imagen_temporal.src == imagen.src) {
            //alert("¡Encontramos un par!");
            setTimeout(function(){EliminarPar(imagen_temporal, imagen)}, 500);
        } else {
            //alert("No es par :C");
            setTimeout(function(){Regresar(imagen_temporal, imagen)}, 500);
        }
    }
    esperando = !esperando;
}

function Regresar(imagen1, imagen2) {
    imagen1.src = "./nsqk/prensqk.jpg";
    imagen2.src = "./nsqk/prensqk.jpg";
    imagen1.setAttribute("onclick", `CambiarImagen(this, ${imagen1.id})`);
    imagen2.setAttribute("onclick", `CambiarImagen(this, ${imagen2.id})`);
}

function EliminarPar(imagen1, imagen2) {
    //Desaparece imagen pero no ajusta tabla
    imagen1.style.visibility = "hidden";
    imagen2.style.visibility = "hidden";
    imagen1.removeAttribute("onclick");
    imagen2.removeAttribute("onclick");
    contador++;
    if (contador == 8) {
        document.getElementById("contador").innerHTML = `Pares Encontrados: ${contador} ¡Ganaste!`;
    } else {
        document.getElementById("contador").innerHTML = `Pares Encontrados: ${contador}`;
    }
}

function Revolver() {
    var j = 0;
    for (let i = 15; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        [tarjetas[i], tarjetas[j]] = [tarjetas[j], tarjetas[i]];
    }
    //document.getElementById("Salida").innerHTML = tarjetas.join(" - ");
}

function Fondo() {
    var fondo = Math.floor(Math.random() * 3) + 1;
    document.getElementById("tablita").style = `background-image: url("./nsqk/fondo${fondo}.jpg")`;
}

function Reiniciar() {
    location.reload();
}
