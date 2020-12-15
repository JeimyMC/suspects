const eva = document.getElementById("evatexto");
eva.style.display = "none";
const evaSeguirBoton = document.getElementById("evaSeguir");
const botonEva = document.getElementById("evaButton");
const evaText = document.getElementById("dialogoE");
const volverE = document.getElementById("volver");
let indexE = 0;
let intervalEva;

for (let i = 1; i < 14; i++) {
  let p = document.createElement("p");
  p.setAttribute("id", "text-eva" + i);
  evaText.appendChild(p);
}

function dialogoEva() {
  indexE++;
  if (indexE < 14) {
    const dialogoEva = document.getElementById("text-eva" + indexE);
    switch (indexE) {
      case 1:
        dialogoEva.innerHTML =
          "¿Puedo sentarme con usted? Soy la inspectora Mery.";
        break;
      case 2:
        dialogoEva.innerHTML =
          "Buenos días inspectora, por favor, póngase cómoda.";
        break;
      case 3:
        dialogoEva.innerHTML =
          "No es un buen día para sentarse en el parque, anuncian tormenta...";
        break;
      case 4:
        dialogoEva.innerHTML =
          "Pero es bella la calma antes del caos. ¿Quiere algo de mí?";
        break;
      case 5:
        dialogoEva.innerHTML =
          "Estoy investigando el asesinato del niño. Usted vive por la zona, ¿puede decirme algo que viera anoche?";
        break;
      case 6:
        dialogoEva.innerHTML = `Sólo a una pareja andar... y a una persona ${tip[3]} con sombrero. Caminaba muy rápido.`;
        break;
      case 7:
        dialogoEva.innerHTML = "¿No sospecha de alguien?";
        break;
      case 8:
        dialogoEva.innerHTML =
          "Todos tienen motivos para odiar al niño, era un estorbo, pero no para matarlo...";
        break;
      case 9:
        dialogoEva.innerHTML =
          "Entiendo... Me dijeron que solía meterse en líos.";
        break;
      case 10:
        dialogoEva.innerHTML =
          "Robó al carnicero, al camarero, a mi ex-marido...";
        break;
      case 11:
        dialogoEva.innerHTML = "Entiendo... ¿y a usted le hizo algo?";
        break;
      case 12:
        dialogoEva.innerHTML =
          "Le defendí cuando robó a mi ex-marido, eso causó nuestro divorcio. Me tengo que ir. Hasta luego inspectora.";
        break;
      case 13:
        dialogoEva.innerHTML = "Gracias por su tiempo. Hasta luego. ";
    }
  } else {
    clearInterval(dialogoEva);
  }
}

evaSeguirBoton.addEventListener("click", () => {
  eva.style.display = "none";
  evaText.style.display = "block";
  intervalEva = setInterval(dialogoEva, 1000);
});

botonEva.addEventListener("click", () => {
  eva.style.display = "block";
  evaText.style.display = "none";
  document.getElementById("willyButton").style.display = "none";
  document.getElementById("ivanButton").style.display = "none";
  document.getElementById("silviaButton").style.display = "none";
  document.getElementById("ramiroButton").style.display = "none";
});

volverE.addEventListener("click", () => {
  clearInterval(intervalEva);
  evaText.style.display = "none";
  eva.style.display = "none";
  document.getElementById("willyButton").style.display = "block";
  document.getElementById("ivanButton").style.display = "block";
  document.getElementById("silviaButton").style.display = "block";
  document.getElementById("evaButton").style.display = "block";
  document.getElementById("ramiroButton").style.display = "block";
});
