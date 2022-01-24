var current = 0;
var timeLimit = 20;
var test = [{
   question: "What is a data type with two possible values of true or false?",
   choices: ["Boolean", "Array", "String", "Function"]
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