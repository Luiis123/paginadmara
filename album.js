// Función para mostrar la fecha debajo de cada foto y reproducir la música correspondiente
function showDate(photoCard) {
    // Muestra la fecha
    const dateElement = photoCard.querySelector('.date');
    dateElement.style.opacity = '1'; // Cambia la opacidad a 1 para mostrar

    // Pausa todos los audios antes de reproducir el actual
    const allAudios = document.querySelectorAll('.background-music');
    allAudios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0; // Reinicia el audio
    });

    // Selecciona el audio del photo-card actual y lo reproduce
    const audio = photoCard.querySelector('.background-music');
    audio.volume = 0.1; // Volumen bajo
    audio.play(); // Comienza la reproducción
}
// Función para abrir el modal
function openModal() {
    const modal = document.getElementById('info-modal');
    modal.classList.add('show'); // Añade la clase 'show' para hacerlo visible
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('info-modal');
    modal.classList.remove('show'); // Remueve la clase 'show' para ocultarlo
}

