console.log("hello friend");



document.addEventListener("DOMContentLoaded", function() {
    let welcomeA = document.getElementById('welcome-area');
    welcomeA.innerHTML = `
    <img src="assets/images/enterprise-front.JPG" alt="a starship in space" id="image">
    <h3 id="welcome">Click the button to start the game!</h3>
            <button type="submit" id="start" onclick="startGame();">Start Game</button>
            `;
    }
)


function startGame() {
    let y = document.body;
    let welcomeA = document.getElementById('welcome-area');
    welcomeA.remove();

    let imageA = document.getElementById('quiz-image');
    imageA.innerHTML = `
        <img src="assets/images/data-spot.JPG" alt="data and his cat" id="image">
            `;

    let quizA = document.getElementById('quiz-area');

    let quizB = `
    <h3 id="question">What is the name of Data's cat?</h3>
    </div>         
    <div id="quiz-answers">             
    <label for="answerA">Felix</label>             
    <input type="radio" name="answer" class="answer" class="wrong-answer">              
    <label for="answerB">Spot</label>              
    <input type="radio" name="answer" class="answer" id="correct-answer">              
    <label for="answerC">Fluffy</label>              
    <input type="radio" name="answer" class="answer" class="wrong-answer">             
    <label for="answerD">Lietenant-Commander Whiskers</label>             
    <input type="radio" name="answer" class="answer" class="wrong-answer">
    <div id="button-area">           
    <button type="submit" id="submit" onclick="answerCheck();">Submit Answer</button>
    </div>         
    </div>         
    <div id="quiz-score">              
    <h3>Your score is <span id="score"></span></h3>  
    </div>       
    `;

    quizA.innerHTML = quizB;

}

function answerCheck() {
    if(document.getElementById('correct-answer').checked) {
        alert("You chose the correct answer! Score increased by 1");
    }else  {
          alert("Unfortunately you chose the wrong answer!");
    }

    let buttonA = document.getElementById('button-area');
    buttonA.innerHTML = `<button type="submit" id="submit" onclick="checkScore();">Next Question</button>`

    }

function checkScore() {

}

function nextQuestion() {

}

function increaseScore() {

}

function decreaseScore() {

}