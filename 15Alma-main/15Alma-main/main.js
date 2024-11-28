let fechaObjetivo = new Date(new Date().getFullYear(), 11, 21, 0, 0, 0).getTime();

function actualizarReloj() {
    let ahora = new Date().getTime(); 
    let diferencia = fechaObjetivo - ahora; 

    if (diferencia >= 0) { 
        let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        let horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        let segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        document.getElementById("dias").innerText = `${dias}`;
        document.getElementById("horas").innerText = `${horas < 10 ? '0' + horas : horas}`;
        document.getElementById("minutos").innerText = `${minutos < 10 ? '0' + minutos : minutos}`;
        document.getElementById("segundos").innerText = `${segundos < 10 ? '0' + segundos : segundos}`;

        let formato = 
            `${horas < 10 ? '0' + horas : horas}:` +
            `${minutos < 10 ? '0' + minutos : minutos}:` +
            `${segundos < 10 ? '0' + segundos : segundos}`;

        document.getElementById("reloj").innerText = formato;
    } else {
        document.getElementById("reloj").innerText = "¡Tiempo finalizado!";
        clearInterval(intervalo);
    }
}

// Actualizar cada segundo
let intervalo = setInterval(actualizarReloj, 1000);

document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("myAudio");
    let playButton = document.getElementById("playButton");


    playButton.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            playButton.textContent = "Pausar";
        } else {
            audio.pause();
            playButton.textContent = "Play";
        }

    });


});