var current = 0;
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

function startQuiz() {
    document.querySelector("#multiQuestions").classList.remove("hide")
    document.querySelector("#container").classList.remove("hide")
    document.querySelector(".start").classList.add("hide")
}

function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function() {
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = seconds;
        if (--timer < 0) {
            timer = duration;
        }
    },1000);
}
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

//Put function for correct answers
//function correctAnswer() {
//    if (options.textContent == correct) {
//        document.querySelector(".page").
//    }
//}

document.querySelector(".start").addEventListener("click", startQuiz)

document.querySelector(".start").addEventListener("click", startTimer)
    var timeLimit = 20,
        display = document.querySelector('#time');
    startTimer(timeLimit, display);

displayChoices()