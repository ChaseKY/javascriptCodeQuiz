var current = 0;
var timeLimit = 20;
var test = [{
        question: "What is a data type with two possible values of true or false?",
        choices: ["Boolean", "Array", "String", "Function"]
    },
    {   
        question: "Are Java and Javascript the same?",
        choices: ["Yes", "No",]
    }
]

function displayChoices() {
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
    document.querySelector("#container").classList.remove("hide")
    document.querySelector(".start").classList.add("hide")
}

document.querySelector(".start").addEventListener("click", startQuiz)

displayChoices()