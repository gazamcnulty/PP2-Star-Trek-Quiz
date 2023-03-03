console.log("hello friend");



document.addEventListener("DOMContentLoaded", function() {
    let questionVar = "";
    console.log(questionVar);
    questionVar = "What is Data's brother's name?";
    document.getElementById("question").innerHTML = questionVar;
    console.log(questionVar);


    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("id") === "submit") {
                alert("you clicked submit!");

            }
            questionVar = "Who was captain of the Excelsior?";
            document.getElementById("question").innerHTML = questionVar;
        })
    }

    
}

)

function startGame() {

}

function answerCheck() {


    }

    /*
    buttonVar.addEventListener("click", function() {
        questionVar =  "What is Picard's favourite beverage?";
        document.getElementById("question").innerHTML = questionVar;
        
    })*/

console.log("is this working?");

function increaseScore() {

}

function decreaseScore() {

}