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
            question: "Quand a été signée la Déclaration d'Indépendance des États-Unis ?",
            options: ["4 juillet 1776", "14 juillet 1789", "4 novembre 1800", "1 janvier 1801"],
            answer: "4 juillet 1776"
        }
    ]
};


let header = document.getElementById("app-header")
let footer = document.getElementById("app-footer")
let categoriesContainer = document.getElementById("categories-container")
let categoriesBtns = document.querySelectorAll(".choise")
let questionShow = document.getElementById("question-show")
let index = 0

categoriesBtns.forEach(btn => {
    btn.addEventListener("click",() => {
        let choise = btn.textContent
        let categorie = quizData[choise]
        showQuestions(categorie)
    })
})

function showQuestions(categorie) {
    header.style.display = "none"
    footer.style.display = "none"
    categoriesContainer.style.display = "none"
    let question = categorie[index].question
    let options = categorie[index].options
    let answer = categorie[index].answer
    console.log(question)
    console.log(options)
    console.log(answer)
}