console.log("hello friend");


/*
document.addEventListener("DOMContentLoaded", function() {
    let questionVar = "";
    console.log(questionVar);
    questionVar = "What is Data's brother's name?";
    document.getElementById("question").innerHTML = questionVar;
    console.log(questionVar);

    }
)*/

document.addEventListener()

function startGame() {
    let y = document.body;
    let welcomeA = document.getElementById('welcome-area');
    welcomeA.remove();

    let quizA = document.getElementById('quiz-area');

    let quizB = `<div id="question-area">
    <h3 id="question">What is the name of Data's cat?</h3>
    </div>         
    <div id="quiz-answers">             
    <label for="answerA">Felix</label>             
    <input type="radio" name="answer" class="answer" id="answerA">              
    <label for="answerB">Spot</label>              
    <input type="radio" name="answer" class="answer" id="answerB">              
    <label for="answerC">Fluffy</label>              
    <input type="radio" name="answer" class="answer" id="answerC">             
    <label for="answerD">Lietenant-Commander Whiskers</label>             
    <input type="radio" name="answer" class="answer" id="answerD">             
    <button type="submit" id="submit" onclick="answerCheck();">Submit Answer</button>         
    </div>         
    <div id="quiz-score">              
    <h3>Your score is <span id="score"></span></h3>         
    </div>`;

    quizA.innerHTML = quizB;

}

function answerCheck() {


    }


console.log("is this working?");

function increaseScore() {

}

function decreaseScore() {

}