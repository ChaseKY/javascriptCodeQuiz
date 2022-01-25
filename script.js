var current = 0;
var timeLimit = 20;
var questionText = document.querySelector("#multiQuestions");
var test = [{
        question: "What is a data type with two possible values of true or false?",
        choices: ["Boolean", "Array", "String", "Function"],
        correct: "Boolean"
    },
    {   
        question: "Are Java and Javascript the same?",
        choices: ["Yes", "No",],
        correct: "No"
    },
    {
        question: "A ______ is a block of code designed to perform a particular task.",
        choices: ["String", "Boolean", "Function", "String"],
        correct: "Function"
    }
]

function displayChoices() {
    questionText.textContent = test[current].question
    for (var i = 0; i < test[current].choices.length; i++) {
        var options = document.createElement("p")
        options.classList.add("options")
        options.textContent = test[current].choices[i]
        document.querySelector("#container").appendChild(options)
        options.addEventListener("click", function() {
            current++;
            document.querySelector("#container").innerHTML = ""

            displayChoices()
        }
        )
    }
}

function startQuiz(){
    document.querySelector("#multiQuestions").classList.remove("hide")
    document.querySelector("#container").classList.remove("hide")
    document.querySelector(".start").classList.add("hide")
}

//Put function for correct answers
function correctAnswer() {
    if (options.textContent == correct) {
        document.querySelector(".page").setAttribute("id", "#boop")
    }
}

document.querySelector(".start").addEventListener("click", startQuiz)

displayChoices()