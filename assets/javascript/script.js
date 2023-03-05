console.log("hello friend");



let firstQuestion = {
    question: "What is the name of Data's cat?",
    answers: [ ['Fluffy'], ['Spot', true], ["Lieutenant Commander Whiskers"], ['William']]
};


let secondQuestion = {
    question: "What is Picard's favourite beverage?",
    answers: ['Black coffee', 'Hot chocolate', 'Earl grey tea', 'Espresso']
};

let thirdQuestion = {
    question: "What is the name of the Klingon sword?",
    answers: ["Bat'leth",  "Qaplah", "Lightsabre", "Bird of prey"]
}

let allQuestions = [firstQuestion, secondQuestion, thirdQuestion];

let score = 0;



document.addEventListener("DOMContentLoaded", function() {

    let welcomeA = document.getElementById('welcome-area');
    welcomeA.innerHTML = `
    <img src="assets/images/enterprise-front.JPG" alt="a starship in space" id="image">
    <h3 id="welcome">Click the button to start the game!</h3>
            <button type="submit" id="start" onclick="runGame();">Start Game</button>
            `;
    }
)


/*function startGame() {
    let y = document.body;
    

    let imageA = document.getElementById('quiz-image');
    imageA.innerHTML = `
        <img src="assets/images/data-spot.JPG" alt="data and his cat" id="image">
            `;

    let quizA = document.getElementById('quiz-area');

    /*let quizB = `
    <h3 id="question">What is the name of Data's cat?</h3>      
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
    `;
    quizA.innerHTML = quizB;

    


}
*/

let i = 0;

function runGame() {
    let welcomeA = document.getElementById('welcome-area');
    welcomeA.remove();


        let qq = allQuestions[i].question;
        let quizD = document.createElement("h3");
        let quizA = document.getElementById('quiz-area');
        quizD.innerHTML = qq;
        quizA.appendChild(quizD);

        let answerList = document.createElement("div");
        let answerText = `
        <button onclick="answerCheck();">${allQuestions[i].answers[0][0]}</button>
        <button onclick="answerCheck();">${allQuestions[i].answers[1][0]}</button>
        <button onclick="answerCheck();">${allQuestions[i].answers[2][0]}</button>
        <button onclick="answerCheck();">${allQuestions[i].answers[3][0]}</button>
        `;
        answerList.innerHTML = answerText;
        quizA.appendChild(answerList);
}

function answerCheck() {

    let buttonA = document.getElementById('button-area');
    buttonA.innerHTML = `<button type="submit" id="next-question" onclick="nextQuestion();">Next Question</button>`;

    if(document.getElementById('correct-answer').checked) {
        alert("You chose the correct answer! Score increased by 1");
        score ++; 
    }else  {
          alert("Unfortunately you chose the wrong answer!");
    };
    console.log(score);
    //below score function does not seem to work for some reason 
    let quizS = document.getElementById('quiz-score');
    let quizI = `<h3>Your score is ${score}</h3>`;
    quizS.innerHTML = quizI;
    }


function nextQuestion() {
    i++;
    let qq = allQuestions[i].question;
        let aa = allQuestions[i][1,2,3];
        let quizD = document.createElement("h3");
        let quizA = document.getElementById('quiz-area');
        quizD.innerHTML = qq;
        quizA.appendChild(quizD);

        let answerList = document.createElement("div");
        let answerText = `
        <label for="answerA">${allQuestions[i].answerX}</label>             
        <input type="radio" name="answer"  id="answerA>              
        <label for="correctAnswer">${allQuestions[i].answerCorrect}</label>              
        <input type="radio" name="answer"  id="correct-answer">              
        <label for="answerC">${allQuestions[i].answerY}</label>              
        <input type="radio" name="answer"  id="answerC">             
        <label for="answerD">${allQuestions[i].answerZ}</label>             
        <input type="radio" name="answer" id="answerD">
        <div id="button-area">           
            <button type="submit" id="submit" onclick="answerCheck();">Submit Answer</button>
        </div>   
        `;
        answerList.innerHTML = answerText;
        quizA.appendChild(answerList); 

}

function increaseScore() {

}

function decreaseScore() {

}



