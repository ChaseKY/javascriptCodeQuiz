var Uscore = document.querySelector("#scoreValue");
var highscore = 0;
var current = 0;
var timer = 20;
var timerStart;
var initialsInput = document.querySelector("#initials");
var submitButton = document.querySelector("#submit");
var display = document.querySelector("#time");
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

    startTimer();
}

function startTimer() {
    timerStart = setInterval(function() {
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = seconds;
        if (--timer < 0) {
            gameOver()
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
        options.addEventListener("click", function(e) {
            correctAnswer(e.target.textContent)
            
            current++;
            document.querySelector("#container").innerHTML = ""
                if (current === test.length) {
                    gameOver()
                }
            displayChoices()
        }
        )
    }
}

function gameOver() {
    document.querySelector("#multiQuestions").classList.add("hide")
    document.querySelector("#container").classList.add("hide")
    document.querySelector(".userInput").classList.remove("hide")
    document.querySelector(".submitBtn").classList.remove("hide")
    clearInterval(timerStart)
    
    
}

//Put function for correct answers
function correctAnswer(selectedChoice) {
    if (selectedChoice == test[current].correct) {
        // document.querySelector("#page").style.backgroundColor = "green";
        highscore++
        Uscore.textContent = highscore;
    }
}

document.querySelector(".start").addEventListener("click", startQuiz)
document.querySelector(".userInput").classList.add("hide")
document.querySelector(".submitBtn").classList.add("hide")
//document.querySelector(".start").addEventListener("click", startTimer)
//    var timeLimit = 20,
//       display = document.querySelector('#time');
//    startTimer(timeLimit, display);
//submitButton.addEventListener("click", function(event) {
//    event.preventDefault();
//    var user = {
//        initials: initialsInput.value,
//        score: 
//    }
//    localStorage.setItem("user", JSON.stringify(user));

//});
displayChoices()