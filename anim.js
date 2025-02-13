// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Nos dimos todo lo que se nos dio", time: 22 },
  { text: "Nos dimos todo eso y mucho más", time: 27 },
  { text: "Para después reconocernos otra vez", time: 33 },
  { text: "Y nos damos todo lo que se nos da", time: 41 },
  { text: "Nos damos todo eso y mucho más", time: 46 },
  { text: "Amanecer colgado de tus labios", time: 50 },
  { text: "Oh, brillas y brillas tan lindo", time: 57 },
  { text: "Y brillamos juntos entre pestañas", time: 63 },
  { text: "Divina, divina sonrisa", time: 69 },
  { text: "Abrazo de Luna, de Luna llena", time: 74 },
  { text: "Nos dimos todo lo que se nos dio", time: 108 },
  { text: "Nos dimos todo eso y mucho más", time: 112 },
  { text: "Para después reconocernos otra vez", time: 118 },
  { text: "Oh, brillas y brillas tan lindo", time: 125 },
  { text: "Y brillamos juntos entre pestañas", time: 130 },
  { text: "Divina, divina sonrisa", time: 136 },
  { text: "Abrazo de Luna, de Luna llena", time: 140 },
  { text: "Y asi, juntitos los dos", time: 146},
  { text: "Y asi, lo que nos dio", time: 151 },
  { text: "Y asi, juntitos los dos", time: 156 },
  { text: "Y asi, lo que nos dio", time: 161 },

];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);