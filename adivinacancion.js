// Función para mezclar el orden de los elementos en un array, pero dejando la opción correcta en su lugar
function shuffleOptions(options, correctAnswer) {
    // Primero, aseguramos que la respuesta correcta esté en la lista
    const otherOptions = options.filter(option => option !== correctAnswer);
    
    // Mezclamos las otras opciones
    for (let i = otherOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [otherOptions[i], otherOptions[j]] = [otherOptions[j], otherOptions[i]]; // Intercambiar elementos
    }

    // Colocamos la respuesta correcta de manera aleatoria en el array mezclado
    const randomIndex = Math.floor(Math.random() * (otherOptions.length + 1));
    otherOptions.splice(randomIndex, 0, correctAnswer);

    return otherOptions;
}

// Canciones y opciones
const songs = [
    {
        name: "eme",
        src: "juegocanciones/EME.mp3",
        options: ["bobomensotonto", "bad intenciones", "nadie mas", "cometierra", "si en tu mente estuve"],
    },
    {
        name: "bien decia mi mama",
        src: "juegocanciones/bien decia mi mama.mp3",
        options: ["fortnite", "continental", "el tiempo que necesites", "undostres", "tarde o temprano"],
    },
    {
        name: "cuando me vaya",
        src: "juegocanciones/Cuando Me Vaya.mp3",
        options: ["moldes", "sigo al pendiente", "sisifo", "sopa de letritas", "continental"],
    },
    {
        name: "fortnite",
        src: "juegocanciones/fortnite.mp3",
        options: ["si en tu mente estuve", "sisifo", "undostres", "love language", "si esto es"],
    },
    {
        name: "blamegame",
        src: "juegocanciones/blamegame.mp3",
        options: ["aun te pienso", "cienciaficcion", "si te portas bien", "los alpes", "rompecabezas"],
    },
    {
        name: "lovelanguage",
        src: "juegocanciones/lovelanguage.mp3",
        options: ["nadie mas", "sigo al pendiente", "misa", "miata", "eme"],
    }
];
// Variable para el índice de la canción actual
let currentSong = 0;
let correctAnswer = '';

// Función para cargar la canción y las opciones
function loadSong(songIndex) {
    const song = songs[songIndex];
    const audioElement = document.getElementById('song');
    audioElement.src = song.src;
    audioElement.load();

    // Iniciar la canción
    audioElement.play();

    // Detener la canción después de 15 segundos
    setTimeout(() => {
        audioElement.pause();
        audioElement.currentTime = 0; // Reinicia el tiempo de la canción
    }, 15000); // 15 segundos (15000 milisegundos)

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    // La respuesta correcta será la opción que corresponde al nombre de la canción
    correctAnswer = song.name;

    // Mezclamos las opciones, pero la respuesta correcta debe estar en una posición aleatoria
    const mixedOptions = shuffleOptions(song.options, correctAnswer);

    // Mostrar las opciones con el botón para elegir
    mixedOptions.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(option); // Verificamos la respuesta aquí
        optionsContainer.appendChild(button);
    });
}

// Función para verificar la respuesta
function checkAnswer(selectedOption) {
    const messageElement = document.getElementById('message');
    
    // Verificar si la respuesta es correcta
    if (selectedOption === correctAnswer) {
        messageElement.textContent = "¡Correcto!";
        setTimeout(() => {
            currentSong++;
            if (currentSong < songs.length) {
                loadSong(currentSong);
                messageElement.textContent = '';
            } else {
                messageElement.textContent = 'Felicidades bonita ¡Has adivinado todas las canciones de nsqk !';
            }
        }, 1000);
    } else {
        messageElement.textContent = "Intenta de nuevo.";
    }
}

// Cargar la primera canción al iniciar
loadSong(currentSong);
