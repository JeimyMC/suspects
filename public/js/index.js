const win = document.getElementById("win");
win.style.display = "none";
const interrogacion = document.getElementById("whoIsHim");
const names = ["willy", "ivan", "ramiro", "eva", "silvia"];
const eyeColor = ["azul", "marron", "azul", "marron", "verde"];
const height = ["bajita", "alta", "alta", "bajita", "alta"];
const tattooed = [
  "con tatuajes",
  "sin tatuajes",
  "sin tatuajes",
  "con tatuajes",
  "con tatuajes",
];

const arrayTips = [
  [
    { height: "alta" },
    { height: "alta" },
    { tattooed: "sin tatuajes" },
    { height: "alta" },
    { eyeColor: "marron" },
  ],
  [
    { height: "bajita" },
    { height: "bajita" },
    { tattooed: "con tatuajes" },
    { height: "bajita" },
    { eyeColor: "azul" },
  ],
  [
    { height: "alta" },
    { height: "alta" },
    { tattooed: "sin tatuajes" },
    { height: "alta" },
    { eyeColor: "azul" },
  ],
  [
    { height: "bajita" },
    { height: "bajita" },
    { tattooed: "con tatuajes" },
    { height: "bajita" },
    { eyeColor: "marron" },
  ],
  [
    { height: "alta" },
    { height: "alta" },
    { tattooed: "con tatuajes" },
    { height: "alta" },
    { eyeColor: "verdes" },
  ],
];

function randomSuspect() {
  const tip = arrayTips[Math.floor(Math.random() * 4)];
  return tip;
}

const tips = randomSuspect();

class Persons {
  constructor(name, eyecolor, height, tattooed, tip) {
    (this.name = name),
      (this.eyecolor = eyecolor),
      (this.height = height),
      (this.tattooed = tattooed),
      (this.tip = tip);
  }
}

class Suspects {
  listOfSuspects() {
    const arrayList = [];
    for (let i = 0; i < names.length; i++) {
      arrayList.push(
        new Persons(names[i], eyeColor[i], height[i], tattooed[i], tips[i])
      );
    }

    return arrayList;
  }
}

class Police {
  tests1 = [];
  constructor(cases) {
    this.cases = cases;
  }

  getTips() {
    for (const person of this.cases) {
      const values = Object.values(person.tip);
      this.tests1.push(values[0]);
    }
    return this.tests1;
  }

  judgement() {
    for (const person of this.cases) {
      if (
        person.height === this.tests1[0] &&
        person.height === this.tests1[1] &&
        person.height === this.tests1[3] &&
        person.eyecolor === this.tests1[4] &&
        person.tattooed === this.tests1[2]
      ) {
        return person.name;
      }
    }
  }
}

const inspector = new Police(new Suspects().listOfSuspects());
const tip = inspector.getTips();

interrogacion.addEventListener("click", () => {
  const input = document.getElementById("whoIs").value.toLowerCase();
  const decision = inspector.judgement();
  win.style.display = "block";
  document.getElementById("persons").style.display = "none";
  if (decision === input) {
    win.innerHTML = `¡El asesino es ${input}!`;
  } else {
    win.innerHTML = `He fracasado...`;
  }
});

module.exports = { tip };
