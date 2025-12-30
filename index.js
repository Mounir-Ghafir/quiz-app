const quizData = {
    "Informatique": [
        {
            question: "Quel langage est principalement utilisé pour styliser les pages web ?",
            options: ["HTML", "Python", "CSS", "Java"],
            answer: "CSS"
        },
        {
            question: "Que signifie 'HTTP' dans une URL web ?",
            options: ["HyperText Transfer Protocol", "High Transfer Text Process", "Hyper Transfer Text Protocol", "HighTech Transfer Protocol"],
            answer: "HyperText Transfer Protocol"
        },
        {
            question: "Quelle entreprise a développé le langage JavaScript ?",
            options: ["Microsoft", "Netscape", "Google", "Mozilla"],
            answer: "Netscape"
        },
        {
            question: "Quelle balise HTML est utilisée pour créer un lien ?",
            options: ["<link>", "<a>", "<href>", "<url>"],
            answer: "<a>"
        },
        {
            question: "En JavaScript, quel mot-clé permet de déclarer une variable constante ?",
            options: ["let", "var", "const", "static"],
            answer: "const"
        },
        {
            question: "Quel système de gestion de base de données est open-source et très populaire ?",
            options: ["Oracle", "MySQL", "SQL Server", "DB2"],
            answer: "MySQL"
        },
        {
            question: "Quel format de données est couramment utilisé pour les API web ?",
            options: ["XML", "CSV", "JSON", "YAML"],
            answer: "JSON"
        },
        {
            question: "Quelle fonction JavaScript permet d'afficher une boîte de dialogue d'alerte ?",
            options: ["console.log()", "alert()", "prompt()", "confirm()"],
            answer: "alert()"
        }
    ],
    
    "Sciences": [
        {
            question: "Quel est le symbole chimique de l'or ?",
            options: ["Go", "Au", "Ag", "Or"],
            answer: "Au"
        },
        {
            question: "Quelle planète est surnommée la 'Planète Rouge' ?",
            options: ["Vénus", "Mars", "Jupiter", "Saturne"],
            answer: "Mars"
        },
        {
            question: "Combien d'os un adulte humain a-t-il en moyenne ?",
            options: ["206", "300", "150", "187"],
            answer: "206"
        },
        {
            question: "Quelle est la vitesse de la lumière dans le vide ?",
            options: ["300 000 m/s", "300 000 km/h", "300 000 km/s", "30 000 km/s"],
            answer: "300 000 km/s"
        },
        {
            question: "Quelle est la formule chimique de l'eau ?",
            options: ["CO2", "NaCl", "H2O", "O2"],
            answer: "H2O"
        },
        {
            question: "Quelle force maintient les planètes en orbite autour du Soleil ?",
            options: ["La force magnétique", "La gravité", "La force électromagnétique", "La force nucléaire"],
            answer: "La gravité"
        },
        {
            question: "Quel gaz est le plus abondant dans l'atmosphère terrestre ?",
            options: ["Oxygène", "Dioxyde de carbone", "Azote", "Hydrogène"],
            answer: "Azote"
        },
        {
            question: "Quelle particule subatomique a une charge négative ?",
            options: ["Proton", "Neutron", "Électron", "Noyau"],
            answer: "Électron"
        }
    ],
    
    "Géographie": [
        {
            question: "Quelle est la capitale de l'Australie ?",
            options: ["Sydney", "Melbourne", "Canberra", "Perth"],
            answer: "Canberra"
        },
        {
            question: "Quel est le plus grand océan du monde ?",
            options: ["Océan Atlantique", "Océan Indien", "Océan Arctique", "Océan Pacifique"],
            answer: "Océan Pacifique"
        },
        {
            question: "Dans quel pays se trouve la ville de Barcelone ?",
            options: ["Italie", "Portugal", "Espagne", "France"],
            answer: "Espagne"
        },
        {
            question: "Quel est le plus long fleuve du monde ?",
            options: ["Le Nil", "L'Amazone", "Le Mississippi", "Le Yangtsé"],
            answer: "L'Amazone"
        },
        {
            question: "Quelle chaîne de montagnes sépare l'Europe de l'Asie ?",
            options: ["Les Alpes", "L'Himalaya", "Les Montagnes Rocheuses", "L'Oural"],
            answer: "L'Oural"
        },
        {
            question: "Quel est le plus grand pays d'Afrique par sa superficie ?",
            options: ["Nigeria", "Algérie", "Congo", "Afrique du Sud"],
            answer: "Algérie"
        },
        {
            question: "Dans quel pays se trouve le désert du Sahara ?",
            options: ["Chine", "Brésil", "Australie", "Algérie"],
            answer: "Algérie"
        },
        {
            question: "Quelle est la monnaie officielle du Japon ?",
            options: ["Le Won", "Le Yen", "Le Yuan", "Le Dollar"],
            answer: "Le Yen",
        }
    ],
    
    "Histoire": [
        {
            question: "En quelle année a eu lieu la Révolution française ?",
            options: ["1776", "1789", "1799", "1804"],
            answer: "1789"
        },
        {
            question: "Qui a été le premier président des États-Unis ?",
            options: ["Abraham Lincoln", "Thomas Jefferson", "George Washington", "John Adams"],
            answer: "George Washington"
        },
        {
            question: "Quelle civilisation a construit les pyramides de Gizeh ?",
            options: ["Les Grecs", "Les Romains", "Les Égyptiens", "Les Mayas"],
            answer: "Les Égyptiens"
        },
        {
            question: "Quand a pris fin la Seconde Guerre mondiale ?",
            options: ["1943", "1945", "1950", "1939"],
            answer: "1945"
        },
        {
            question: "Qui a peint la 'Joconde' ?",
            options: ["Michel-Ange", "Vincent van Gogh", "Léonard de Vinci", "Pablo Picasso"],
            answer: "Léonard de Vinci"
        },
        {
            question: "Quelle était la capitale de l'Empire romain d'Occident ?",
            options: ["Athènes", "Byzance", "Rome", "Alexandrie"],
            answer: "Rome"
        },
        {
            question: "Qui a découvert l'Amérique en 1492 ?",
            options: ["Vasco de Gama", "Christophe Colomb", "Marco Polo", "Ferdinand Magellan"],
            answer: "Christophe Colomb"
        },
        {
            question : "Quel physicien a formulé la théorie de la relativité générale ?",
            options : ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Stephen Hawking"],
            answer : "Albert Einstein"
        }
    ]
};

let header = document.getElementById("app-header")
let footer = document.getElementById("app-footer")
let categoriesContainer = document.getElementById("categories-container")
let categoriesBtns = document.querySelectorAll(".choise")
let questionShow = document.getElementById("question-show")
let pointsShow = document.getElementById("points-show")
let showHighScore = document.getElementById("higth-score")
let highScore = Number(localStorage.getItem("highScore")) || 0
let timeToNext
let timeForNext
let startTime
let time = 30
let index = 0
let points = 0 

categoriesBtns.forEach(btn => {
    btn.addEventListener("click",() => {
        let choise = btn.textContent
        let categorie = quizData[choise]
        showQuestions(categorie)
        startTime = new Date()
    })
})

function showQuestions(categorie) {
    clearInterval(timeToNext)
    header.style.display = "none"
    footer.style.display = "none"
    categoriesContainer.style.display = "none"
    showHighScore.style.display = "none"
    let question = categorie[index].question
    let options = categorie[index].options
    let answer = categorie[index].answer
    let length = categorie.length - 1
    let p = document.createElement("p")
    p.textContent = question
    let timer = document.createElement("p")
    timer.textContent = `${time}s`
    let div = document.createElement("div")
    options.forEach(option => {
        let btn = document.createElement("button")
        btn.textContent = option
        btn.className = "option-btn"
        btn.addEventListener("click",() => {
            clearInterval(timeForNext)
            clearInterval(timeToNext)
            time = 30
            isCorrect(btn,answer)
        })
        div.appendChild(btn)
    })

    timeForNext = setInterval(() => {
        time--
        timer.textContent = `${time}s`
    },1000)

    timeToNext = setInterval(() => {
        clearInterval(timeForNext)
        time = 30
        showCorrect(answer)
    },30000)

    let nextBtn = document.createElement("button")
    nextBtn.textContent = "suivant"
    nextBtn.addEventListener("click",() => {
        clearInterval(timeForNext)
        time = 30
        showNext(categorie,length)
    })
    questionShow.append(p, timer, div, nextBtn)    
}

function showNext(categorie,length) {
    if(index === length) {
        clearInterval(timeToNext)
        let endTime = new Date()
        let totalSeconds = Math.floor((endTime - startTime) / 1000)
        let t = document.createElement("p")
        t.textContent = `your time is ${totalSeconds}`
        let p = document.createElement("p")
        p.textContent = `tes points sont ${points}`
        let againBtn = document.createElement("button")
        againBtn.textContent = "joue encore"
        againBtn.addEventListener("click",playAgain)
        questionShow.innerHTML = ""
        pointsShow.append(p, t, againBtn)
        return 
    }
    index++
    questionShow.innerHTML = ""
    showQuestions(categorie)
}

function disabelBtns(optionBtn) {
    optionBtn.forEach(btn => {
        btn.disabled = "true"
    })
}

function correct(optionBtn,answer) {
    optionBtn.forEach(btn => {
        if(btn.textContent === answer) {
            btn.style.backgroundColor = "green"
        }
    })
}

function isCorrect(btn,answer) {
    let optionBtn = document.querySelectorAll(".option-btn")
    if(btn.textContent === answer) {
        btn.style.backgroundColor = "green"
        disabelBtns(optionBtn)
        points++
    }else if(btn.textContent !== answer) {
        btn.style.backgroundColor = "red"
        disabelBtns(optionBtn)
        correct(optionBtn,answer)       
    }
}

function playAgain() {
    header.style.display = "block";
    footer.style.display = "block";
    categoriesContainer.style.display = "block";
    showHighScore.style.display = "block";
    pointsShow.innerHTML = "";

    let highScore = Number(localStorage.getItem("highScore")) || 0;

    if (points > highScore) {
        highScore = points;
        localStorage.setItem("highScore", highScore);
    }

    showHighScore.textContent = `high score is ${highScore}`;
    points = 0;
    index = 0
}

function showCorrect(answer) {
    clearInterval(timeToNext)
    let optionBtn = document.querySelectorAll(".option-btn")
    optionBtn.forEach(btn => {
        if(btn.textContent === answer) {
            btn.style.backgroundColor = "green"
        }
    })
    disabelBtns(optionBtn)
}

showHighScore.textContent = `high score is ${highScore}`