/*jshint -W033 */



//on pageload, below function runs and shows welcome section
document.addEventListener("DOMContentLoaded",function() {

    let welcomeA = document.getElementById('welcome-area');
    welcomeA.innerHTML = `
    <img src="assets/images/enterprise-front.JPG" alt="a starship in space" id="image">
    <p id="welcome">Click the button to start the game!</p>
            <button type="submit" id="start" onclick="runGame();">Start Game</button>
            `;
})

/*below are a series of objects for the questions and answers, each assigned to a variable. the object contains keys of questions and answers , the answers key is an array , with each option as an index in the array*/


let allQuestions = [{
        question: "What is the name of Data's cat?",
        answers: [
            ['Fluffy'],
            ['Spot', 'correct'],
            ["Ensign Whiskers"],
            ['William']
        ]
    },
    {
        question: "What is Picard's favourite beverage?",
        answers: [
            ['Black coffee'],
            ['Hot chocolate'],
            ['Earl grey tea', 'correct'],
            ['Espresso']
        ]
    },

    {
        question: "What is the name of the Klingon sword?",
        answers: [
            ["Bat'leth", 'correct'],
            ["Qaplah"],
            ["Lightsabre"],
            ["Bird of prey"]
        ]
    },

    {
        question: "What starship technology is used by Klingons and Romulans, but not by Starfleet?",
        answers: [
            ['Warp drive'],
            ['Cloaking invisibility', 'correct'],
            ['Quantum missiles'],
            ['Time travel']
        ]
    },

    {
        question: "What game did the bridge officers of the Enterprise-D play on a regular basis?",
        answers: [
            ['Scrabble'],
            ['Poker', 'correct'],
            ["Darts"],
            ['Rugby']
        ]
    },

    {
        question: "Who was the original transporter chief on the Enterprise-D?",
        answers: [
            ['Guinan'],
            ['Jordy Laforge', ],
            ["Miles O'Brien", 'correct'],
            ['Leonard McCoy']
        ]
    },

    {
        question: "What ship did Picard command, prior to the Enterprise?",
        answers: [
            ['The Excelsior'],
            ['The Reliant'],
            ['Milennium Falcon'],
            ['The Stargazer', 'correct']
        ]
    },

    {
        question: "What killed all the people on Data's home Omicron Theta?",
        answers: [
            ['Lore'],
            ['Crystalline Entity', 'correct'],
            ["Noonian Singh"],
            ['Khan']
        ]
    },

    {
        question: "Where in space did  Locutus of borg battle against Starfleet?",
        answers: [
            ['Wolf-359', 'correct'],
            ["Earth's orbit"],
            ["Talos-4"],
            ['Vulcan']
        ]
    },

    {
        question: "What was the name of the anti-Cardassian terrorist group?",
        answers: [
            ['Starfleet Rebels'],
            ['The Maquis', 'correct'],
            ["Newfleet"],
            ['Anti-Card']
        ]
    }
];

/*here I have placed the 10 questions variables into an array, so that they can be targetted via array indexing*/
/*let allQuestions = [firstQuestion, secondQuestion, thirdQuestion, fourthQuestion, fifthQuestion, sixthQuestion, seventhQuestion, eigthQuestion, ninthQuestion, tenthQuestion ];*/

/*same as with the Qs and As, I have assigned images to variables, but I have used template literals for html coding. these variables can be called on by targetting the variable name with .innerHTML when manipulating the DOM*/
let allImages = [`<img src="assets/images/data-spot.JPG" alt="Data with his cat" id="image">`,
    `<img src="assets/images/picard-beverage.JPG" alt="Picard with a drink" id="image">`,
    `<img src="assets/images/worf-bat'leth.JPG" alt="Worf holding a Klingon sword" id="image">`,
    `<img src="assets/images/ships.JPG" alt="Romulan and Klingon ships" id="image">`,
    `<img src="assets/images/game.JPG" alt="Data playing a game" id="image">`,
    `<img src="assets/images/transporter.JPG" alt="A person who has beamed in on a transporter" id="image">`,
    `<img src="assets/images/stargazer.JPG" alt="An old starship" id="image">`,
    `<img src="assets/images/omicron-theta.JPG" alt="Data's home planet" id="image">`,
    `<img src="assets/images/Locutus.JPG" alt="Picard post-assimilation" id="image">`,
    `<img src="assets/images/Ro.JPG" alt="Ro Laren holding a phaser" id="image">`,
    `<img src="assets/images/thanks.JPG" alt="Picard holding a beer" id="image">`
];

/*image variables in an array so they can be targetted*/
/*let allImages = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11];/*

/*'score' and 'i' will be incremented as the game progresses. 'i' is used to target the next question/answer on each round*/
let score = 0;
let i = 0;

const welcomeA = document.getElementById('welcome-area');
const quizI = document.getElementById('quiz-image');
const quizA = document.getElementById('quiz-area');
const quizQ = document.getElementById('question-area');
const quizR = document.getElementById('quiz-result');
const quizN = document.getElementById('quiz-next');
const quizS = document.getElementById('quiz-score');
const answerList = document.getElementById('answer-list');

const answerText = `
        <button onclick="checkAnswer(allQuestions[i].answers[0])">${allQuestions[i].answers[0][0]}</button>
        <button onclick="checkAnswer(allQuestions[i].answers[1])">${allQuestions[i].answers[1][0]}</button>
        <button onclick="checkAnswer(allQuestions[i].answers[2])">${allQuestions[i].answers[2][0]}</button>
        <button onclick="checkAnswer(allQuestions[i].answers[3])">${allQuestions[i].answers[3][0]}</button>
        `;

//below function ' runGame()' runs after clicking the start game button
// targets the welcome area and removes it 
// targets the quiz-image div and assigns it a variable, then replaces its html with the first image from images array
// targets the first question from questions array, assigns it to variable
// creates a h3 element with id of 'quiz-line'
// targets quiz-area div and assigns it to a variable
// targets the h3 and makes its innerhtml the first question from questions array
// targets the quiz-area variable, makes the h3 question a child of quiz-area

//creates a div assigns it to answerList variable, gives it an id of 'quiz-list'
//creates a variable with inner html with creates 4 answer buttons
//buttons have onclick to target checkAnswer functions, they target the answer by array indexing
//puts buttons html into the answerList variable, this is then made a child of the quiz-area div
function runGame() {
    welcomeA.remove();
    quizI.innerHTML = `${allImages[i]}`;
    quizQ.innerHTML = `<br>${allQuestions[i].question}`;
    answerList.innerHTML = answerText;
    /*quizR.innerHTML = `<br></br>`;
    quizS.innerHTML =  `<br></br>`;*/
    quizS.innerHTML = `<p>Your score is ${score}</p>`;
    let reset = document.getElementById('quiz-reset');
    reset.innerHTML = `<a href="index.html"><button id="reset-button">Reset quiz</button></a>`;

}

//below function using if/else statements to check the answer validity, of the respective button clicked
//each of the 4 buttons checks a different index, of allQuestions[i].answers 
// checks if the selected index contains the word 'correct'
//if it does contain the word 'correct', it increments score and runs 'nextQuesiton()' function
//if was incorrect, it confirms it was incorrect, it does not increment score and runs 'nextQuestion()' function

function checkAnswer(selectedIndex) {
    quizQ.innerHTML = ``;
    quizN.innerHTML = `<button onclick='nextQuestion();'>Next</button>`;
    if ((selectedIndex).includes('correct')) {
        answerList.innerHTML = `<p>That's the right answer!</p>`;
        score++;
    } else {
        answerList.innerHTML = `<p>That's the wrong answer</p>`;
    }
    quizS.innerHTML = `<p>Your score is ${score}</p>`;
}

// below 'nextQuestion()' function increments 'i' variable, changes question image and loops through to the next question
// first increases i so the targetted questions, answers and images will be the next index in their respective arrays
// uses the higher i value, to target the next image and make it the innerHTML of quiz-image variable
// each image is relevant to the question, final image is thank you message

// if/else statement to check if the game has ended (i has reached value of 10)
// if i >= 10 it targets quiz-line div and replaces innerHTML with thank you message and removes the answer list from view
// increments score to show final score

//if i is less than 10, it goes to the next question, using similar code as runGame();
//targets elements, assigns to variables, uses object/array indexing to target the next question and set of answers

function nextQuestion() {
    quizR.innerHTML = ``;
    quizN.innerHTML = ``;

    i++;

    let quizI = document.getElementById('quiz-image');
    quizI.innerHTML = `${allImages[i]}`;

    if (i >= 10) {
        finalScore();
    }
    quizQ.innerHTML = `<br>${allQuestions[i].question}`;
    answerList.innerHTML = `
        <button onclick="checkAnswer(allQuestions[i].answers[0])">${allQuestions[i].answers[0][0]}</button>
        <button onclick="checkAnswer(allQuestions[i].answers[1])">${allQuestions[i].answers[1][0]}</button>
        <button onclick="checkAnswer(allQuestions[i].answers[2])">${allQuestions[i].answers[2][0]}</button>
        <button onclick="checkAnswer(allQuestions[i].answers[3])">${allQuestions[i].answers[3][0]}</button>
        `;

}

function finalScore() {
    answerList.remove();
    quizQ.innerHTML = "Thanks for playing!"
    let quizI = `<button type="submit" id="rank" onclick="starfleetRank();">Is Starfleet the career for you?</button>`;
    quizN.innerHTML = quizI;
    quizS.innerHTML = `<p>Your final score on the Star Trek Quiz is ${score} out of 10</p>`;
}

let finalImages = [
    `<img src="assets/images/boothby.JPG" alt="a groundskeeper at Starfleet academy" >`,
    `<img src="assets/images/enlisted.JPG" alt="an enlisted crewman" >`,
    `<img src="assets/images/cadet.JPG" alt="a cadet at Starfleet academy" >`,
    `<img src="assets/images/ensign.JPG" alt="Ensign Crusher the Enterprise" >`,
    `<img src="assets/images/lieutenant.JPG" alt="Worf, a Klingon Lieutenant of the Enterprise" >`,
    `<img src="assets/images/lieutenant-commander.JPG" alt="Lieutenant-commander Data of the Enterprise" >`,
    `<img src="assets/images/commander.JPG" alt="Commander Riker of the Enterprise" >`,
    `<img src="assets/images/captain.JPG" alt="Captain Picard of the Enterprise" >`,
    `<img src="assets/images/admiral.JPG" alt="an admiral of Starfleet" >`,
    `<img src="assets/images/president.JPG" alt="the president of the United Federation of Planets">`,
    `<img src="assets/images/q.JPG" alt="Q , the omnipotent immortal prankster from the Q continuum" >`
]

let suggestedRank = [
    `<p id="suggestion-p">Your score was 0 out of 10, yet you still seek a place in Starfleet? You posess unflinching determination, even in the face of inevitable failure. Akin to someone tending a garden, knowing full well the plants will eventually wither. Your would make a fine <bold>groundskeeper</bold>, like Boothby, beloved groundskeeper of Starfleet academy.</p>`,
    `<p id="suggestion-p">Your score was 1 out of 10, you have made the first step towards serving in Starfleet. Everyone can make a difference, regardless of career aptitude. While Starfleet academy might be outside your scope, you could serve as an <bold>Enlisted</bold> crewman. Without pursuing the high end career like others in the academy, this gets you right in the action. You could rise to the rank of petty officer, start your journey for a more grounded path to the stars.</p>`,
    `<p id="suggestion-p">Your score was 2 out of 10, you are a long way from the captain's chair. But every great journey begins with a small step. If you are determined, then consider joining Starfleet academy. As a <bold>Cadet</bold> trainee, you will receive a robust education and an opportunity to explore many avenues of starship service, including command, operations and sciences.</p>`,
    `<p id="suggestion-p">Your score was 3 out of 10, you're not just the average Pakled. You have the aptitude of Starfleet Academy graduate, with the rank of <bold>Ensign</bold>. Your service aboard the ship has only just begun, but remember , the trial never ends</p>`,
    `<p id="suggestion-p">Your score was 4 out of 10, you might be the wisest Klingon of the house. You would be well suited to begin training in the officer's program and would be easily considered for the rank of <bold>Lieutenant</bold>. You've proven you can take command, how far are you willing to go? </p>`,
    `<p id="suggestion-p">Your score was 5 out of 10, you are as observant as any Betazoid. With your impressive knowledge of Starfleet activity, you could certainly rise to the rank of <bold>Lieutenant Commander</bold>. An impressive achievement for anyone, and a stonesthrow from ship XO position of commander. You've got the stuff, but how much stuff is the question</p>`,
    `<p id="suggestion-p">Your score was 6 out of 10, you are conniving as any Romulan. You have the drive to suceed and there's no reason you couldn't ascend to the impressive rank of <bold>Commander</bold>, 1st officer of the ship and XO, ranking just below the Captain.Your path starts here...but lets not pretend you don't covet the captain's chair</p>`,
    `<p id="suggestion-p">Your score was 7 out of 10, you are as wise as any Vulcan. You have the charisma, the focus and sheer force of will to ascend to the coveted rank of <bold>Captain</bold>. You are responsible for the lives of the hundreds of crew serving under you, while also shouldering the responsibility of leading by example while representing Starfleet. You are one in a million</p>`,
    `<p id="suggestion-p">Your score was 8 out of 10, you have the intellect of a genetically altered superman of the Eugenics wars. The Captain's chair is not enough for you and by the prophets will Starfleet recognise it. You are clearly fit to be an <bold>Admiral</bold> of Starfleet, in command of major sectors of Starfleet and acting as department head at Starfleet headquarters. Your decisions will affect the destiny of the galaxy</p>`,
    `<p id="suggestion-p">Your score was 9 out of 10, you have the intelligence, strength and energy of a positronic Android. Starfleet was too small for you, after all, managing the activity of thousands of Starships is small change, when you could influence the entire United Federation of Planets. You could be <bold>President of the Federation</bold> , signing new laws into effect, brokering peace with unknowable civilizations and stretching the fate of the cosmos like strings on a violin. You are one in a galaxy</p>`,
    `<p id="suggestion-p">Your score was 10 out of 10 - but you already knew that didn't you? You knew what the score would be before you started the quiz, you knew what the score would be before I even thought of making the quiz. You don't just know things... you KNOW. Omnipotence is a frightening concept to many, but to you its just another 11 letter word in your frighteningly diverse vocabulary. You are obviously <bold>a Q, a godlike entity of of the Q continuum</bold> , an immortal being posessing omnipotence and omniscience, deigning to play with mortals such as us for your amusement. With a click of a button you could change reality... so whats stopping you?</p>`
]

function starfleetRank() {
    quizI.innerHTML = `${finalImages[score]}`;
    quizA.remove();
    quizS.remove();
    quizR.innerHTML = `${suggestedRank[score]}`;
    quizN.innerHTML = `<a id ="application-link" href="application.html">Click here to apply to Starfleet!</a>`;
}