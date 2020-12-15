const ramiro = document.getElementById("ramirotexto");
ramiro.style.display = "none";
const ramiroSeguirBoton = document.getElementById("ramiroSeguir");
const botonRamiro = document.getElementById("ramiroButton");
const ramiroText = document.getElementById("dialogoR");
const volverR = document.getElementById("volver");
let indexR = 0;
let intervalRamiro;

for (let i = 1; i < 14; i++) {
  let p = document.createElement("p");
  p.setAttribute("id", "text-ramiro" + i);
  ramiroText.appendChild(p);
}

function dialogoRamiro() {
  indexR++;
  if (indexR < 14) {
    const dialogoRamiro = document.getElementById("text-ramiro" + indexR);
    switch (indexR) {
      case 1:
        dialogoRamiro.innerHTML = "La tienda está cerrada señora.";
        break;
      case 2:
        dialogoRamiro.innerHTML =
          "Buenos días, no vengo a comprar. Soy la inspectora Mery. Investigo lo que ocurrió anoche...";
        break;
      case 3:
        dialogoRamiro.innerHTML =
          "¿Y en qué puedo ayudarla? Tengo mucho que hacer, no puedo perder tiempo.";
        break;
      case 4:
        dialogoRamiro.innerHTML = "¿Estuvo aquí toda la noche?";
        break;
      case 5:
        dialogoRamiro.innerHTML =
          "Por supuesto. Siempre suelo estar aquí. Los relojes y las navajas son mi única compañía.";
        break;
      case 6:
        dialogoRamiro.innerHTML = "¿Y no escuchó o vió nada extraño?";
        break;
      case 7:
        dialogoRamiro.innerHTML = `Bueno... Al salir por la noche a tirar la basura vi a una persona con abrigo negro a medio poner. Llevaba sombrero, y yo no tenía mis gafas puestas, así que no pude verle bien... Pero recuerdo que la piel era muy blanca.`;
        break;
      case 8:
        dialogoRamiro.innerHTML = "¿Tenía reloj, tatuajes, pulseras...?";
        break;
      case 9:
        dialogoRamiro.innerHTML = `Ni reloj, ni pulseras y ${tip[2]}. Los odio ¿sabe? No sé como la gente puede hacerse esas cosas en el cuerpo.`;
        break;
      case 10:
        dialogoRamiro.innerHTML = "¿Qué más sucedió?";
        break;
      case 11:
        dialogoRamiro.innerHTML = "Se fue, y yo me marché.";
        break;
      case 12:
        dialogoRamiro.innerHTML =
          "Tenga mi tarjeta, estaré por la zona, si quiere comentarme algo más llámeme. Hasta luego y muchas gracias.";
        break;
      case 13:
        dialogoRamiro.innerHTML = "Gracias a usted. Que tenga suerte.";
    }
  } else {
    clearInterval(dialogoRamiro);
  }
}

ramiroSeguirBoton.addEventListener("click", () => {
  ramiro.style.display = "none";
  ramiroText.style.display = "block";
  intervalRamiro = setInterval(dialogoRamiro, 1000);
});

botonRamiro.addEventListener("click", () => {
  ramiro.style.display = "block";
  ramiroText.style.display = "none";
  document.getElementById("willyButton").style.display = "none";
  document.getElementById("ivanButton").style.display = "none";
  document.getElementById("silviaButton").style.display = "none";
  document.getElementById("evaButton").style.display = "none";
});

volverR.addEventListener("click", () => {
  clearInterval(intervalRamiro);
  ramiroText.style.display = "none";
  ramiro.style.display = "none";
  document.getElementById("willyButton").style.display = "block";
  document.getElementById("ivanButton").style.display = "block";
  document.getElementById("silviaButton").style.display = "block";
  document.getElementById("evaButton").style.display = "block";
  document.getElementById("ramiroButton").style.display = "block";
});
