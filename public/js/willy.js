const willy = document.getElementById("willytexto");
willy.style.display = "none";
const willySeguirBoton = document.getElementById("willySeguir");
const botonWilly = document.getElementById("willyButton");
const willyText = document.getElementById("dialogoW");
const volverW = document.getElementById("volver");
let index = 0;
let intervalWilly;

for (let i = 1; i < 14; i++) {
  let p = document.createElement("p");
  p.setAttribute("id", "text-willy" + i);
  willyText.appendChild(p);
}

function dialogoWilly() {
  index++;
  if (index < 14) {
    const dialogo = document.getElementById("text-willy" + index);
    switch (index) {
      case 1:
        dialogo.innerHTML =
          "Buenos días Willy, soy la inspectora Mery, no sé si se ha enterado del suceso de ayer en la noche...";
        break;
      case 2:
        dialogo.innerHTML =
          "Buenos días inspectora, si se refiere al asesinato del niño, por supuesto, en qué mundo vivimos para matar a un crío. Vale que no me gustan los críos, son unos mocosos, pero matarlos es otra cosa.";
        break;
      case 3:
        dialogo.innerHTML =
          "El hecho no fue muy lejos de aquí, ¿por casualidad vio algo notorio a lo largo del día?";
        break;
      case 4:
        dialogo.innerHTML = "Nada que me llamase la atención.";
        break;
      case 5:
        dialogo.innerHTML = "¿Qué le pasó en el brazo?";
        break;
      case 6:
        dialogo.innerHTML = "¿Esto? Soy carnicero, son cosas del oficio...";
        break;
      case 7:
        dialogo.innerHTML = "¿Trabaja en esas condiciones?";
        break;
      case 8:
        dialogo.innerHTML =
          "HAHAHHAA. En absoluto. Estos días me estoy pasando por aquí para ver como va el chico. El negocio hay que cuidarlo, y hay que tener mucha precaución con la gente nueva.";
        break;
      case 9:
        dialogo.innerHTML =
          " Entiendo... Bueno, le dejo mi tarjeta por si recuerda algo de importancia. Cualquier cosa.";
        break;
      case 10:
        dialogo.innerHTML =
          " La guardaré. Tenga cuidado inspectora, dicen que hoy habrá tormenta y no veo que lleve consigo paragüas.";
        break;
      case 11:
        dialogo.innerHTML =
          " Oh, no lo sabía, no miré el tiempo la verdad. Muchas gracias, voy a seguir antes de que empiece, a ver si puedo conseguir un poco más. Hasta luego.";
        break;
      case 12:
        dialogo.innerHTML = `¡Espere! Ahora que lo pienso, ayer vi a una persona cerca de la cafetería, con un paragüas negro. No le vi la cara, el sombrero se la cubría, pero era una persona ${tip[0]}. Tenía mucha prisa, pues se le cayó un billete de 50 euros, y lejos de cogerlos, siguió corriendo. Este es un pueblo pobre ¿sabe?`;
        break;
      case 13:
        dialogo.innerHTML =
          "Tal vez sea una persona de dinero.... Muchas gracias, si recuerda algo más por favor llámeme.";
    }
  } else {
    clearInterval(dialogoWilly);
  }
}

willySeguirBoton.addEventListener("click", () => {
  willy.style.display = "none";
  willyText.style.display = "block";
  intervalWilly = setInterval(dialogoWilly, 1000);
});

botonWilly.addEventListener("click", () => {
  willy.style.display = "block";
  willyText.style.display = "none";
  document.getElementById("ivanButton").style.display = "none";
  document.getElementById("ramiroButton").style.display = "none";
  document.getElementById("silviaButton").style.display = "none";
  document.getElementById("evaButton").style.display = "none";
});

volverW.addEventListener("click", () => {
  clearInterval(intervalWilly);
  willyText.style.display = "none";
  willy.style.display = "none";
  document.getElementById("willyButton").style.display = "block";
  document.getElementById("ivanButton").style.display = "block";
  document.getElementById("silviaButton").style.display = "block";
  document.getElementById("evaButton").style.display = "block";
  document.getElementById("ramiroButton").style.display = "block";
});
