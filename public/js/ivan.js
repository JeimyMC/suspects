const ivan = document.getElementById("ivantexto");
ivan.style.display = "none";
const ivanSeguirBoton = document.getElementById("ivanSeguir");
const botonIvan = document.getElementById("ivanButton");
const ivanText = document.getElementById("dialogoI");
const volverI = document.getElementById("volver");
let index1 = 0;
let intervalIvan;

for (let i = 1; i < 14; i++) {
  let p = document.createElement("p");
  p.setAttribute("id", "text-ivan" + i);
  ivanText.appendChild(p);
}

function dialogoIvan() {
  index1++;
  if (index1 < 14) {
    const dialogoIvan = document.getElementById("text-ivan" + index1);
    switch (index1) {
      case 1:
        dialogoIvan.innerHTML = "Buenos días... Hace frío hoy ¿no cree?";
        break;
      case 2:
        dialogoIvan.innerHTML =
          "Buenos días señora, sí, bajaron las temperaturas ayer, ¿qué desea?";
        break;
      case 3:
        dialogoIvan.innerHTML = "Un té negro por favor. ¿Se cortó el brazo?";
        break;
      case 4:
        dialogoIvan.innerHTML =
          " Me corté con un cristal al sacar la basura, tengo la piel muy sensible, con nada me hago heridas... Ahora mismo le traigo el té señora.";
        break;
      case 5:
        dialogoIvan.innerHTML =
          "Gracias. Cómo está el mundo, ¿se enteró de lo ocurrido?";
        break;
      case 6:
        dialogoIvan.innerHTML =
          "Por supuesto, salió en todas partes. El chico venía mucho por aquí...intentaba robarme magdalenas.";
        break;
      case 7:
        dialogoIvan.innerHTML = "¿Trabaja hasta tarde?";
        break;
      case 8:
        dialogoIvan.innerHTML =
          "Depende del día, hostelería es muy variante, pero normalmente sí. ¿Por qué lo pregunta?";
        break;
      case 9:
        dialogoIvan.innerHTML =
          " Verá, soy la inspectora que está en el caso. Estoy preguntando por los sitios cercanos al lugar del crimen. Me pasé antes por la carnicería... ¿Vió algo que le llamase la atención?";
        break;
      case 10:
        dialogoIvan.innerHTML = `Supongo que habló con Willy... Ese hombre me da miedo. Vino antes a tomarse un café, me comentó que vio a una persona de abrigo negro que le pareció extraña. Yo también la vi, era una persona ${tip[1]}, pero no me llamó la atención.`;
        break;
      case 11:
        dialogoIvan.innerHTML =
          "¿Me puede decir algo más?¿Y a qué hora salió ayer de aquí?";
        break;
      case 12:
        dialogoIvan.innerHTML =
          "Suelo salir sobre las doce, pero no es un dato exacto, ya sabe... Tenía sombrero y abrigo negro, pero eso es muy común.";
        break;
      case 13:
        dialogoIvan.innerHTML =
          "Muchas gracias Iván. Tenga, le dejo mi tarjeta por si acaso. Y esto por el té, hasta luego.";
    }
  } else {
    clearInterval(dialogoIvan);
  }
}

ivanSeguirBoton.addEventListener("click", () => {
  ivan.style.display = "none";
  ivanText.style.display = "block";
  intervalIvan = setInterval(dialogoIvan, 1000);
});

botonIvan.addEventListener("click", () => {
  ivan.style.display = "block";
  ivanText.style.display = "none";
  document.getElementById("willyButton").style.display = "none";
  document.getElementById("ramiroButton").style.display = "none";
  document.getElementById("silviaButton").style.display = "none";
  document.getElementById("evaButton").style.display = "none";
});

volverI.addEventListener("click", () => {
  clearInterval(intervalIvan);
  ivanText.style.display = "none";
  ivan.style.display = "none";
  document.getElementById("willyButton").style.display = "block";
  document.getElementById("ivanButton").style.display = "block";
  document.getElementById("silviaButton").style.display = "block";
  document.getElementById("evaButton").style.display = "block";
  document.getElementById("ramiroButton").style.display = "block";
});
