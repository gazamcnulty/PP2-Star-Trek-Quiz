document.addEventListener("DOMContentLoaded", function() {

    let welcomeA = document.getElementById('welcome-area');
    welcomeA.innerHTML = `
    <img src="assets/images/enterprise-front.JPG" alt="a starship in space" id="image">
    <h3 id="welcome">Click the button to start the game!</h3>
            <button type="submit" id="start" onclick="runGame();">Start Game</button>
            `;
    }
)



let firstQuestion = {
    question: "What is the name of Data's cat?",
    answers: [ ['Fluffy'], ['Spot', true], ["Lt Commander Whiskers"], ['William']]
};


let secondQuestion = {
    question: "What is Picard's favourite beverage?",
    answers: [['Black coffee'], ['Hot chocolate'], ['Earl grey tea', true], ['Espresso']]
};

let thirdQuestion = {
    question: "What is the name of the Klingon sword?",
    answers: [["Bat'leth", true],  ["Qaplah"], ["Lightsabre"], ["Bird of prey"]]
};

let fourthQuestion = {
    question: "What starship technology is used by Klingons and Romulans, but not by Starfleet?",
    answers: [ ['Warp drive'], ['Cloaking invisibility', true], ['Quantum missiles'], ['Time travel']]
};

let fifthQuestion = {
    question: "What game did the bridge officers of the Enterprise-D play on a regular basis?",
    answers: [ ['Scrabble'], ['Poker', true], ["Darts"], ['Rugby']]
};

let sixthQuestion = {
    question: "Who was the transporter chief, for the first few years of the Enterprise-D's operation?",
    answers: [ ['Guinan'], ['Jordy Laforge', ], ["Miles O'Brien", true], ['Leonard McCoy']]
};

let seventhQuestion = {
    question: "What ship did Picard command, prior to the Enterprise?",
    answers: [ ['The Excelsior'], ['The Reliant'], ['The Milennium Falcon'], ['The Stargazer', true]]
};

let eigthQuestion = {
    question: "What killed all the people on Data's home Omicron Theta?",
    answers: [ ['Lore'], ['The Crystalline Entity', true], ["Noonian Singh"], ['Khan']]
};

let ninthQuestion = {
    question: "When Picard was assimilated by the Borg, he unwittingly led the Borg in battle and wiped out hundred's of starships. Where in space did this battle take place?",
    answers: [ ['Wolf-359', true], ["Earth's orbit"], ["Talos-4"], ['Vulcan']]
};

let tenthQuestion = {
    question: "What was the name of the terrorist group who split off from the Federation, to lead an underground campaign against the Cardassians?",
    answers: [ ['Starfleet Rebels'], ['The Maquis', true], ["Newfleet"], ['Anti-Card']]
};


let allQuestions = [firstQuestion, secondQuestion, thirdQuestion, fourthQuestion, fifthQuestion, sixthQuestion, seventhQuestion, eigthQuestion, ninthQuestion, tenthQuestion ];

let score = 0;

let i = 0;

function runGame() {
    let welcomeA = document.getElementById('welcome-area');
    welcomeA.remove();


        let qq = allQuestions[i].question;
        let quizD = document.createElement("h3");
        quizD.setAttribute("id", "quiz-line");
        let quizA = document.getElementById('quiz-area');
        quizD.innerHTML = qq;
        quizA.appendChild(quizD);

        let answerList = document.createElement("div");
        answerList.setAttribute("id", "quiz-list");
        let answerText = `
        <button onclick="checkA();">${allQuestions[i].answers[0][0]}</button>
        <button onclick="checkB();">${allQuestions[i].answers[1][0]}</button>
        <button onclick="checkC();">${allQuestions[i].answers[2][0]}</button>
        <button onclick="checkD();">${allQuestions[i].answers[3][0]}</button>
        `;
        answerList.innerHTML = answerText;
        quizA.appendChild(answerList);
}

function checkA() {

    if(allQuestions[i].answers[0].includes(true)) {
        alert("You chose the correct answer! Score increased by 1");
        score ++; 
        nextQuestion();
    }else  {
          alert("Unfortunately you chose the wrong answer!");
          nextQuestion();
    };
    console.log(score);
    //below score function does not seem to work for some reason 
    let quizS = document.getElementById('quiz-score');
    let quizI = `<h3>Your score is ${score}</h3>`;
    quizS.innerHTML = quizI;
    }

function checkB() {

    if(allQuestions[i].answers[1].includes(true)) {
        alert("You chose the correct answer! Score increased by 1");
        score ++; 
        nextQuestion();
    }else  {
          alert("Unfortunately you chose the wrong answer!");
          nextQuestion();
    };
    console.log(score);
    //below score function does not seem to work for some reason 
    let quizS = document.getElementById('quiz-score');
    let quizI = `<h3>Your score is ${score}</h3>`;
    quizS.innerHTML = quizI;
    }

function checkC() {
    
    if(allQuestions[i].answers[2].includes(true)) {
        alert("You chose the correct answer! Score increased by 1");
        score ++; 
        nextQuestion();
    }else  {
             alert("Unfortunately you chose the wrong answer!");
             nextQuestion();
    };
    console.log(score);
    //below score function does not seem to work for some reason 
    let quizS = document.getElementById('quiz-score');
    let quizI = `<h3>Your score is ${score}</h3>`;
    quizS.innerHTML = quizI;
    }


function checkD() {
    
    if(allQuestions[i].answers[2].includes(true)) {
        alert("You chose the correct answer! Score increased by 1");
        score ++; 
        nextQuestion();
    }else  {
            alert("Unfortunately you chose the wrong answer!");
            nextQuestion();
    };
    console.log(score);
    //below score function does not seem to work for some reason 
    let quizS = document.getElementById('quiz-score');
    let quizI = `<h3>Your score is ${score}</h3>`;
    quizS.innerHTML = quizI;
    }


function nextQuestion() {
    i++;
    if (i >= 10 ) {
        let quizD = document.getElementById('quiz-line');
        let answerList = document.getElementById('quiz-list');
        answerList.remove();
        quizD.innerHTML = "Thanks for playing!"
    };
    let qq = allQuestions[i].question;
        let quizD = document.getElementById('quiz-line');
        let quizA = document.getElementById('quiz-area');
        quizD.innerHTML = qq;
        quizA.appendChild(quizD);

        let answerList = document.getElementById('quiz-list');
        let answerText = `
        <button onclick="checkA();">${allQuestions[i].answers[0][0]}</button>
        <button onclick="checkB();">${allQuestions[i].answers[1][0]}</button>
        <button onclick="checkC();">${allQuestions[i].answers[2][0]}</button>
        <button onclick="checkD();">${allQuestions[i].answers[3][0]}</button>
        `;
        answerList.innerHTML = answerText;
        quizA.appendChild(answerList);
    

}

function increaseScore() {

}

function decreaseScore() {

}



