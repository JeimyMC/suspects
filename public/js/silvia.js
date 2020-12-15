const silvia = document.getElementById("silviatexto");
silvia.style.display = "none";
const silviaSeguirBoton = document.getElementById("silviaSeguir");
const botonSilvia = document.getElementById("silviaButton");
const silviaText = document.getElementById("dialogoS");
const volverS = document.getElementById("volver");
let indexS = 0;
let intervalSilvia;

for (let i = 1; i < 14; i++) {
  let p = document.createElement("p");
  p.setAttribute("id", "text-silvia" + i);
  silviaText.appendChild(p);
}

function dialogoSilvia() {
  indexS++;
  if (indexS < 14) {
    const dialogoSilvia = document.getElementById("text-silvia" + indexS);
    switch (indexS) {
      case 1:
        dialogoSilvia.innerHTML = "Buenos días. Soy la inspectora Mery...";
        break;
      case 2:
        dialogoSilvia.innerHTML =
          "No tengo nada que hablar con usted, a no ser que quiera comprar algo. ";
        break;
      case 3:
        dialogoSilvia.innerHTML =
          "Estoy investigando el caso del niño. ¿No quiere colaborar?";
        break;
      case 4:
        dialogoSilvia.innerHTML =
          "No quiero meterme en líos... Soy nueva aquí.";
        break;
      case 5:
        dialogoSilvia.innerHTML = "¿En qué líos?";
        break;
      case 6:
        dialogoSilvia.innerHTML = "Si no va a comprar váyase...";
        break;
      case 7:
        dialogoSilvia.innerHTML = "Sino colabora le puedo acusar de complice.";
        break;
      case 8:
        dialogoSilvia.innerHTML = `No... Bueno, en el camino a casa me choqué con una persona... sus ojos eran de un ${tip[4]} oscuro. Nos chocamos por mi culpa, soy torpe ¿sabe? y se fue corriendo... Cuando llegué a casa vi que tenía sangre en el abrigo...`;
        break;
      case 9:
        dialogoSilvia.innerHTML = "¿Puede deicrme algo más de la persona?";
        break;
      case 10:
        dialogoSilvia.innerHTML =
          "No... fue todo muy rápido. Pero al llegar esta mañana a la frutería me encontré con una carta...";
        break;
      case 11:
        dialogoSilvia.innerHTML = "¿Qué dice?";
        break;
      case 12:
        dialogoSilvia.innerHTML =
          "'Sé quién eres y lo que sabes. Mantente callada por tu bien.'";
        break;
      case 13:
        dialogoSilvia.innerHTML =
          "Venga conmigo, le llevaré a un lugar seguro, hasta que encuentre a la persona responsable.";
    }
  } else {
    clearInterval(dialogoSilvia);
  }
}

silviaSeguirBoton.addEventListener("click", () => {
  silvia.style.display = "none";
  silviaText.style.display = "block";
  intervalSilvia = setInterval(dialogoSilvia, 1000);
});

botonSilvia.addEventListener("click", () => {
  silvia.style.display = "block";
  silviaText.style.display = "none";
  document.getElementById("willyButton").style.display = "none";
  document.getElementById("ivanButton").style.display = "none";
  document.getElementById("ramiroButton").style.display = "none";
  document.getElementById("evaButton").style.display = "none";
});

volverS.addEventListener("click", () => {
  clearInterval(intervalSilvia);
  silviaText.style.display = "none";
  silvia.style.display = "none";
  document.getElementById("willyButton").style.display = "block";
  document.getElementById("ivanButton").style.display = "block";
  document.getElementById("silviaButton").style.display = "block";
  document.getElementById("evaButton").style.display = "block";
  document.getElementById("ramiroButton").style.display = "block";
});
