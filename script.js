const questions = [
  {
    text: "¿Que objeto es este?",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.2kt5m_C0IsqX67vvK67pbAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    options: ["Probeta", "Pipeta", "Vaso de precipitados", "Termometro"],
    correct: 0,
  },
  {
    text: "¿Qué herramienta se usa para medir voltaje?",
    options: ["Amperímetro", "Voltímetro", "Ohmímetro", "Regla"],
    correct: 1,
  },
  {
    text: "¿Cuál es el material principal del cemento?",
    options: ["Arena", "Caliza", "Arcilla", "Yeso"],
    correct: 1,
  },
  {
    text: "¿Que objeto es este?",
    image:
      "https://tse1.mm.bing.net/th/id/OIP.8r0dDnl6DA_t3hddAAf-dwHaGY?rs=1&pid=ImgDetMain&o=7&rm=3",
    options: ["Martillo", "destornillador", "Llave inglesa", "Llave francesa"],
    correct: 2,
  },
  {
    text: "¿Como se llama el elemento de menor tamaño que puede considerarse vivo?",
    options: ["Tejido", "Organo", "Atomo", "Celula"],
    correct: 3,
  },
  {
    text: "¿A cual elemento quimico pertenece el simbolo Na?",
    options: ["Potasio", "Cloro", "Magnesio", "Sodio"],
    correct: 3,
  },
  {
    text: "¿Cual es el planeta de la imagen?",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.3PdPsH5D2ytfpNLBzCqxzAHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
    options: ["Tierra", "Jupiter", "Marte", "Saturno"],
    correct: 1,
  },
  {
    text: "¿Que instrumento se usa para medir la presion atmosferica?",
    options: ["Barometro", "Higrómetro", "Anemómetro", "Pluviómetro"],
    correct: 0,
  },
  {
    text: "¿Que tipo de energia se obtiene del sol?",
    options: ["Eolica", "Solar", "Hidraulica", "Geotermica"],
    correct: 1,
  },
  {
    text: "¿Cual es el metal mas ligero?",
    options: ["Aluminio", "Titanio", "Litio", "Magnesio"],
    correct: 2,
  },
  {
    text: "¿Cual es el punto de ebullicion del agua?",
    options: ["50°C", "75°C", "100°C", "150°C"],
    correct: 2,
  },
  {
    text: "¿Como se llamaba este cientifico?",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.8YtQnJ6hOKrGINKUmf6oiQHaJ6?rs=1&pid=ImgDetMain&o=7&rm=3",
    options: [
      "Sthephen Hawking",
      "Albert Einstein",
      "Nikola Tesla",
      "Galileo Galilei",
    ],
    correct: 0,
  },
  {
    text: "¿Cual es la formula molecular del agua?",
    options: ["H2O", "CO2", "O2", "NaCl"],
    correct: 0,
  },
  {
    text: "¿Que estudia la vulcanologia?",
    options: ["El agua", "Los volcanes", "Los terremotos", "Las rocas"],
    correct: 1,
  },
  {
    text: "¿Cual fue la primer carrera que se pudo estudiar en la Regional?",
    options: [
      "Ingenieria Quimica",
      "Ingenieria en Sistemas de Informacion",
      "Ingenieria Electromecanica",
      "Licenciatura en Administracion de Empresas",
    ],
    correct: 2,
  },
  {
    text: "¿Donde estuvo funcionando la facultad antes de tener su edificio propio?",
    options: [
      "En una fabrica",
      "En un galpon universitario",
      "En la municipalidad",
      "En la escuela Normal Sarmiento",
    ],
    correct: 3,
  },
  {
    text: "¿Que carrera carga con la fama de que su lenguaje es 0 y 1 y hablan en binario?",
    options: ["IEM", "ISI", "IQ", "LIC."],
    correct: 1,
  },
  {
    text: "¿Que carrera se dice que hace - explosiones quimicas -?",
    options: [
      "Ingenieria Quimica",
      "Ingenieria en Sistemas de Informacion",
      "Ingenieria Electromecanica",
      "LAR",
    ],
    correct: 0,
  },
  {
    text: "¿De que carrera se suele pensar que todos saben arreglar autos o lavarropas?",
    options: [
      "Ingenieria Quimica",
      "Ingenieria en Sistemas de Informacion",
      "Ingenieria Electromecanica",
      "Licenciaturas",
    ],
    correct: 2,
  },
  {
    text: "¿Cual es la ciencia que estudia las propiedades de la materia y la energia?",
    options: ["Quimica", "Fisica", "Biologia", "Matematicas"],
    correct: 1,
  },
  {
    text: "El sol es...",
    options: ["un planeta", "una estrella", "luz", "un meteorito"],
    correct: 1,
  },
  {
    text: "¿Cuál es el único satélite natural de la Tierra?",
    options: ["La Luna", "Fobos", "Europa", "Titán"],
    correct: 0,
  },
  {
    text: "¿Qué significa 'HTTP' en una dirección web?",
    options: [
      "HyperText Transfer Protocol",
      "High Transmission Text Program",
      "Hyperlink Transfer Process",
      "Host To Transfer Protocol",
    ],
    correct: 0,
  },
];

let scores = [0, 0, 0, 0, 0];
let awaitingCareerSelection = false;

function startGame() {
  document.getElementById("question-box").style.display = "block";
  loadQuestion();
  document
    .getElementById("question-box")
    .scrollIntoView({ behavior: "smooth" });
  document.getElementById("startBtn").style.display = "none";
}

function loadQuestion() {
  let q = questions[Math.floor(Math.random() * questions.length)];
  let questionDiv = document.getElementById("question");
  let optionsDiv = document.getElementById("options");

  questionDiv.innerHTML = `<h2>${q.text}</h2>`;
  if (q.image) questionDiv.innerHTML += `<img src="${q.image}" alt="imagen">`;

  // Crear array de opciones con info de si es correcta o no
  let optionsWithCorrect = q.options.map((opt, i) => ({
    text: opt,
    isCorrect: i === q.correct,
  }));

  // Mezclar el array (Fisher-Yates shuffle)
  for (let i = optionsWithCorrect.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [optionsWithCorrect[i], optionsWithCorrect[j]] = [
      optionsWithCorrect[j],
      optionsWithCorrect[i],
    ];
  }

  optionsDiv.innerHTML = "";
  optionsWithCorrect.forEach((opt) => {
    let btn = document.createElement("button");
    btn.textContent = opt.text;
    btn.onclick = () => checkAnswer(opt.isCorrect, btn);
    optionsDiv.appendChild(btn);
  });
}

function skipQuestion() {
  if (!awaitingCareerSelection) {
    loadQuestion();
  }
}

function checkAnswer(isCorrect, button) {
  if (isCorrect) {
    showConfetti();
    awaitingCareerSelection = true;
    document.querySelector(".header").scrollIntoView({ behavior: "smooth" });
    document.getElementById("skipBtn").style.disabled = true;
  } else {
    button.classList.add("incorrect");
    setTimeout(() => button.classList.remove("incorrect"), 500);
  }
}

function addPoint(career) {
  if (awaitingCareerSelection) {
    scores[career - 1]++;
    document.getElementById(`score${career}`).textContent = scores[career - 1];
    awaitingCareerSelection = false;
    document
      .getElementById("question-box")
      .scrollIntoView({ behavior: "smooth" });
    document.getElementById("skipBtn").style.disabled = false;
    loadQuestion();
  }
}

function showConfetti() {
  const confetti = document.getElementById("confetti");
  confetti.style.display = "flex";
  setTimeout(() => {
    confetti.style.display = "none";
  }, 500);
}
