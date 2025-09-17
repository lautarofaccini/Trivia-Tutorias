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
    options: ["Martillo", "Destornillador", "Llave inglesa", "Llave francesa"],
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
      "Licenciatura en Administración Rural",
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
  {
    text: "¿Quién lanzó el primer satélite al espacio?",
    options: ["Unión Soviética", "EE.UU", "Japón", "China"],
    correct: 0,
  },
  {
    text: "¿Cómo se llama la unidad de división lógica de un disco duro?",
    options: ["Partición", "Distribución", "Adjudicación", "Dividendo"],
    correct: 0,
  },
  {
    text: "¿Cuántos electrones hay en un átomo de hidrógeno?",
    options: ["Uno", "Dos", "Tres", "Cuatro"],
    correct: 0,
  },
  {
    text: "¿Qué lenguaje de programación es este logotipo?",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    options: ["Java", "JavaScript", "Python", "C++"],
    correct: 1,
  },
  {
    text: "¿Cuál de estos elementos químicos es líquido a temperatura ambiente?",
    options: ["Mercurio", "Hierro", "Plata", "Litio"],
    correct: 0,
  },
  {
    text: "¿Cómo se llama la galaxia donde está nuestro sistema solar?",
    options: ["Andrómeda", "Vía Láctea", "Sombrero", "Ojo de Gato"],
    correct: 1,
  },
  {
    text: "¿Qué circuito eléctrico es este?",
    image: "https://roa.cedia.edu.ec/webappscode/34/c_serie_ejemplo1_1.png",
    options: ["Serie", "Paralelo", "Mixto", "Abierto"],
    correct: 0,
  },
  {
    text: "¿Cuál de estas herramientas sirve para cortar metal?",
    options: ["Sierra", "Tenaza", "Amoladora", "Martillo"],
    correct: 2,
  },
  {
    text: "¿Qué planeta es conocido como el planeta rojo?",
    options: ["Venus", "Júpiter", "Marte", "Saturno"],
    correct: 2,
  },
  {
    text: "¿Qué instrumento se usa para medir la intensidad de corriente?",
    options: ["Voltímetro", "Amperímetro", "Osciloscopio", "Multímetro"],
    correct: 1,
  },
  {
    text: "¿Qué comando en programación significa repetir algo varias veces?",
    options: ["if", "while", "echo", "break"],
    correct: 1,
  },
  {
    text: "¿Qué nombre recibe la primera computadora electrónica de la historia?",
    options: ["ENIAC", "MS-DOS", "Atari", "Pentium"],
    correct: 0,
  },
  {
    text: "¿Cuál es el símbolo químico del oro?",
    options: ["Ag", "Au", "O", "Gd"],
    correct: 1,
  },
  {
    text: "¿Qué invento fue clave para la Revolución Industrial?",
    options: [
      "La rueda",
      "La máquina de vapor",
      "El Internet",
      "El ferrocarril",
    ],
    correct: 1,
  },
  {
    text: "¿Cómo se llama el satélite artificial que dio inicio a la carrera espacial?",
    options: ["Apolo 11", "Sputnik 1", "Vostok 1", "Explorer 1"],
    correct: 1,
  },
  {
    text: "¿Cuál de estas fórmulas corresponde a la energía cinética?",
    options: ["Ec = mc²", "Ec = ma", "Ec = 1/2 mv²", "Ec = V·I"],
    correct: 2,
  },
  {
    text: "¿Cuál de estos lenguajes NO es un lenguaje de programación?",
    options: ["Python", "C#", "HTML", "Java"],
    correct: 2,
  },
  {
    text: "¿Qué invento argentino revolucionó la medicina?",
    options: ["Marcapasos", "Tomógrafo", "Aspirina", "Antibióticos"],
    correct: 0,
  },
  {
    text: "¿Qué unidad se utiliza para medir la resistencia eléctrica?",
    options: ["Voltios", "Ohmios", "Watts", "Amperios"],
    correct: 1,
  },
  {
    text: "¿Cuál es la capital de Japón?",
    options: ["Pekín", "Tokio", "Seúl", "Osaka"],
    correct: 1,
  },
  {
    text: "¿Qué número binario equivale al decimal 5?",
    options: ["101", "111", "100", "110"],
    correct: 0,
  },
  {
    text: "¿Cómo se llama la capa de gases que rodea la Tierra?",
    options: ["Litosfera", "Hidrosfera", "Atmósfera", "Estratosfera"],
    correct: 2,
  },
  {
    text: "¿Qué invento de Nikola Tesla usamos todos los días?",
    options: [
      "Corriente alterna",
      "Corriente continua",
      "La bombilla",
      "El microchip",
    ],
    correct: 0,
  },
  {
    text: "¿Cuál es el metal más abundante en la corteza terrestre?",
    options: ["Hierro", "Aluminio", "Cobre", "Magnesio"],
    correct: 1,
  },
  {
    text: "¿Cuál es el dominio del correo electrónico de la UTN de Resistencia?",
    options: [
      "frre.utn.edu.ar",
      "utn.frre.edu.ar",
      "frt.utn.com.ar",
      "frre.utn.com.ar",
    ],
    correct: 0,
  },
  {
    text: "¿Qué significa la sigla CPU?",
    options: [
      "Central Predecessor Unit",
      "Central Processing Unit",
      "Computer Personal Unit",
      "La caja negra que se enchufa",
    ],
    correct: 1,
  },
  {
    text: "¿Qué instrumento se muestra en la imagen?",
    image: "https://img.directindustry.es/images_di/photo-g/14644-9853016.jpg",
    options: ["Microscopio", "Telescopio", "Caloventor", "Binoculares"],
    correct: 0,
  },
  {
    text: "¿Qué obra famosa pintó Leonardo da Vinci?",
    options: ["La última cena", "La noche estrellada", "El grito", "Guernica"],
    correct: 0,
  },
  {
    text: "¿Cómo se llama el proceso por el cual las plantas producen su alimento?",
    options: ["Respiración", "Fotosíntesis", "Digestión", "Oxidación"],
    correct: 1,
  },
  {
    text: "¿Cómo se llama el siguiente instrumento?",
    image:
      "https://www.casainstrumental.com/wp-content/uploads/2020/09/0149953500-1.jpg",
    options: ["Bajo", "Guitarra", "Ukelele", "Contrabajo"],
    correct: 0,
  },
  {
    text: "¿Qué elemento químico es esencial para la respiración?",
    options: ["Oxígeno", "Nitrógeno", "Hidrógeno", "Helio"],
    correct: 0,
  },
  {
    text: "¿Qué país inventó el sushi?",
    options: ["China", "Corea", "Japón", "Tailandia"],
    correct: 2,
  },
  {
    text: "¿Qué tipo de motor convierte energía eléctrica en movimiento?",
    options: [
      "Motor térmico",
      "Motor a combustión",
      "Motor eléctrico",
      "Motor hidráulico",
    ],
    correct: 2,
  },
  {
    text: "¿Cómo se llama la red de computadoras más grande del mundo?",
    options: ["Intranet", "LAN", "Internet", "WWW"],
    correct: 2,
  },
  {
    text: "¿Qué objeto es este?",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/RE50G_Range_Digital_Mutilmeter%2C_professional_Mutilmeter.jpg/250px-RE50G_Range_Digital_Mutilmeter%2C_professional_Mutilmeter.jpg",
    options: ["Voltímetro", "Amperímetro", "Multímetro", "Osciloscopio"],
    correct: 2,
  },
  {
    text: "¿Qué tipo de gráfico se ve en la imagen?",
    image:
      "https://www.jaspersoft.com/content/dam/jaspersoft/images/graphics/infographics/pie-chart-example.svg",
    options: [
      "Gráfico de barras",
      "Gráfico de Torta",
      "Histograma",
      "Gráfico de dispersión",
    ],
    correct: 1,
  },
  {
    text: "¿Quién es este científico famoso?",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Nikola Tesla",
      "Charles Darwin",
    ],
    correct: 1,
  },
  {
    text: "¿Qué instrumento de laboratorio se muestra en la imagen?",
    image:
      "https://i.pinimg.com/736x/25/a1/85/25a185efc16233eaedfb7a0fb51ffcdb.jpg",
    options: ["Probeta", "Pipeta", "Matraz Erlenmeyer", "Vaso de precipitados"],
    correct: 2,
  },
  {
    text: "¿Qué estructura se observa en la imagen?",
    image:
      "https://static.vecteezy.com/system/resources/previews/003/069/633/non_2x/dna-molecule-icon-illustration-on-white-background-free-vector.jpg",
    options: ["Proteína", "Molécula de ADN", "Célula", "Cromosoma"],
    correct: 1,
  },
  {
    text: "¿Qué objeto aparece en la imagen?",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/%D0%A8%D1%82%D0%B0%D0%BD%D0%B3%D0%B5%D0%BD%D1%86%D0%B8%D1%80%D0%BA%D1%83%D0%BB%D1%8C.jpg/500px-%D0%A8%D1%82%D0%B0%D0%BD%D0%B3%D0%B5%D0%BD%D1%86%D0%B8%D1%80%D0%BA%D1%83%D0%BB%D1%8C.jpg",
    options: ["Micrómetro", "Regla", "Calibre Vernier", "Transportador"],
    correct: 2,
  },
  {
    text: "¿Qué circuito electrónico se muestra en la imagen?",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/AND_ANSI_Labelled.svg/2560px-AND_ANSI_Labelled.svg.png",
    options: ["Puerta AND", "Puerta OR", "Puerta NOT", "Puerta XOR"],
    correct: 0,
  },
  {
    text: "¿Qué invento aparece en la imagen?",
    image:
      "https://i.pinimg.com/564x/bf/40/ab/bf40ab4b30f0f6a08856a82348ade9f1.jpg",
    options: [
      "Motor eléctrico",
      "Telégrafo",
      "Máquina de vapor",
      "Torno mecánico",
    ],
    correct: 1,
  },
  {
    text: "¿Quién formuló la teoría de la gravitación universal?",
    options: [
      "Galileo Galilei",
      "Isaac Newton",
      "Albert Einstein",
      "Johannes Kepler",
    ],
    correct: 1,
  },
  {
    text: "¿Cuál es la capital de Canadá?",
    options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    correct: 2,
  },
  {
    text: "¿Qué es un algoritmo?",
    options: [
      "Una secuencia de pasos para resolver un problema",
      "Un lenguaje de programación",
      "Un error en un programa",
      "Una base de datos",
    ],
    correct: 0,
  },
  {
    text: "¿Qué significa H2O?",
    options: [
      "Un ácido fuerte",
      "Dióxido de carbono",
      "Agua",
      "Peróxido de hidrógeno",
    ],
    correct: 2,
  },
  {
    text: "¿Cuál es la velocidad de la luz en el vacío?",
    options: ["300 km/s", "300.000 km/s", "3.000 km/s", "3.000.000 km/s"],
    correct: 1,
  },
  {
    text: "¿Qué tipo de célula se observa en la imagen?",
    image:
      "https://micro.magnet.fsu.edu/cells/animals/images/animalcellsfigure1.jpg",
    options: ["Célula vegetal", "Célula animal", "Bacteria", "Virus"],
    correct: 1,
  },
  {
    text: "¿Qué instrumento musical es este?",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/Violin_VL100.png",
    options: ["Guitarra", "Violín", "Violonchelo", "Arpa"],
    correct: 1,
  },
  {
    text: "¿Qué continente se muestra en la imagen?",
    image:
      "https://i.pinimg.com/736x/03/23/68/03236896d90ae2d8accfd854ff3230fa.jpg",
    options: ["Asia", "América", "Europa", "África"],
    correct: 2,
  },
  {
    text: "¿Qué símbolo matemático aparece en la imagen?",
    image: "https://www.svgrepo.com/show/28681/sum-sign.svg",
    options: ["Integral", "Sumatoria", "Pi", "Factorial"],
    correct: 1,
  },
  {
    text: "¿En qué año se fundó la Universidad Tecnológica Nacional?",
    options: ["1948", "1959", "1972", "1983"],
    correct: 1,
  },
  {
    text: "¿Cuál era el nombre original de la UTN antes de convertirse en universidad?",
    options: [
      "Escuela de Oficios Industriales",
      "Universidad Obrera Nacional",
      "Instituto Tecnológico Argentino",
      "Colegio Nacional de Ingeniería",
    ],
    correct: 1,
  },
  {
    text: "¿Cuál de estas opciones corresponde a una Tecnicatura que se dicta en la FRRe?",
    options: [
      "Tecnicatura en Programación",
      "Tecnicatura en Petróleo",
      "Tecnicatura en Agroindustrias",
      "Tecnicatura en Minería",
    ],
    correct: 0,
  },
  {
    text: "¿Quién escribió 'Cien años de soledad'?",
    options: [
      "Mario Vargas Llosa",
      "Julio Cortázar",
      "Gabriel García Márquez",
      "Pablo Neruda",
    ],
    correct: 2,
  },
  {
    text: "¿Qué animal es considerado el más grande del planeta?",
    options: ["Elefante africano", "Ballena azul", "Tiburón blanco", "Orca"],
    correct: 1,
  },
  {
    text: "¿Qué instrumento mide la presión atmosférica?",
    options: ["Barómetro", "Termómetro", "Higrómetro", "Calorímetro"],
    correct: 0,
  },
];

let scores = [0, 0, 0, 0, 0];
let awaitingCareerSelection = false;
let editMode = false;

function startGame() {
  document.getElementById("question-box").style.display = "block";
  loadQuestion();
  document
    .getElementById("question-box")
    .scrollIntoView({ behavior: "smooth" });
  document.getElementById("startBtn").style.display = "none";
  document.getElementById("endBtn").style.display = "block";
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
    saveScores();
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

function toggleEditMode() {
  editMode = !editMode;

  document.querySelectorAll(".career").forEach((c, idx) => {
    if (editMode) {
      // Controles individuales (+1 / -1)
      if (!c.querySelector(".edit-controls")) {
        c.innerHTML += `
          <div class="edit-controls">
            <button onclick="modifyScore(${idx + 1}, 1)">+1</button>
            <button onclick="modifyScore(${idx + 1}, -1)">-1</button>
          </div>`;
      }
    } else {
      // Quitar controles individuales
      c.querySelectorAll(".edit-controls").forEach((e) => e.remove());
    }
  });

  // Botón global de reset
  if (editMode) {
    if (!document.getElementById("resetAllBtn")) {
      const resetBtn = document.createElement("button");
      resetBtn.id = "resetAllBtn";
      resetBtn.textContent = "🔄 Resetear todo";
      resetBtn.onclick = resetAllScores;
      document.querySelector(".scoreboard").after(resetBtn);
    }
  } else {
    const resetBtn = document.getElementById("resetAllBtn");
    if (resetBtn) resetBtn.remove();
  }
}

function resetAllScores() {
  if (confirm("¿Seguro que quieres reiniciar todos los puntos?")) {
    scores = scores.map(() => 0);
    scores.forEach((s, i) => {
      document.getElementById(`score${i + 1}`).textContent = s;
    });
    saveScores();
  }
}

function modifyScore(career, delta) {
  scores[career - 1] = Math.max(0, scores[career - 1] + delta);
  document.getElementById(`score${career}`).textContent = scores[career - 1];
  saveScores();
}

function saveScores() {
  localStorage.setItem("scores", JSON.stringify(scores));
}

function loadScores() {
  const saved = localStorage.getItem("scores");
  if (saved) {
    scores = JSON.parse(saved);
    scores.forEach((s, i) => {
      document.getElementById(`score${i + 1}`).textContent = s;
    });
  }
}

window.onload = loadScores;

function endEvent() {
  document.getElementById("endBtn").style.display = "none";
  document.getElementById("podio").style.display = "block";
  let ranking = scores
    .map((s, i) => ({
      carrera: document.querySelector(`#carrera${i + 1} h2`).textContent,
      puntos: s,
    }))
    .sort((a, b) => b.puntos - a.puntos);

  let podioDiv = document.getElementById("podio");
  podioDiv.innerHTML = `
    <h2>🏆 Leaderboard</h2>
    <ul class="leaderboard">
      ${ranking
        .map(
          (r, idx) => `
        <li class="${
          idx === 0 ? "first" : idx === 1 ? "second" : idx === 2 ? "third" : ""
        }">
          <span class="pos">#${idx + 1}</span>
          <span class="name">${r.carrera}</span>
          <span class="pts">${r.puntos} pts</span>
        </li>`
        )
        .join("")}
    </ul>
  `;
  document.getElementById("podio").scrollIntoView({ behavior: "smooth" });
}
