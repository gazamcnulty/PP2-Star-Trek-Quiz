//on pageload, below function runs and shows welcome section
document.addEventListener("DOMContentLoaded", function() {

    let welcomeA = document.getElementById('welcome-area');
    welcomeA.innerHTML = `
    <img src="assets/images/enterprise-front.JPG" alt="a starship in space" id="image">
    <h3 id="welcome">Click the button to start the game!</h3>
            <button type="submit" id="start" onclick="runGame();">Start Game</button>
            `;
    }
)

/*below are a series of objects for the questions and answers, each assigned to a variable. the object contains keys of questions and answers , the answers key is an array , with each option as an index in the array*/


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

/*here I have placed the 10 questions variables into an array, so that they can be targetted via array indexing*/
let allQuestions = [firstQuestion, secondQuestion, thirdQuestion, fourthQuestion, fifthQuestion, sixthQuestion, seventhQuestion, eigthQuestion, ninthQuestion, tenthQuestion ];

/*same as with the Qs and As, I have assigned images to variables, but I have used template literals for html coding. these variables can be called on by targetting the variable name with .innerHTML when manipulating the DOM*/
let image1 = `<img src="assets/images/data-spot.JPG" alt="Data with his cat" id="image">`;
let image2 = `<img src="assets/images/picard-beverage.JPG" alt="Picard with a drink" id="image">`;
let image3 = `<img src="assets/images/worf-bat'leth.JPG" alt="Worf holding a Klingon sword" id="image">`;
let image4 = `<img src="assets/images/ships.JPG" alt="Romulan and Klingon ships" id="image">`;
let image5 = `<img src="assets/images/game.JPG" alt="Data playing a game" id="image">`;
let image6 = `<img src="assets/images/transporter.JPG" alt="A person who has beamed in on a transporter" id="image">`;
let image7 = `<img src="assets/images/stargazer.JPG" alt="An old starship" id="image">`;
let image8 = `<img src="assets/images/omicron-theta.JPG" alt="Data's home planet" id="image">`;
let image9 = `<img src="assets/images/Locutus.JPG" alt="Picard post-assimilation" id="image">`;
let image10 = `<img src="assets/images/Ro.JPG" alt="Ro Laren holding a phaser" id="image">`;
let image11 = `<img src="assets/images/thanks.JPG" alt="Picard holding a beer" id="image">`;

/*image variables in an array so they can be targetted*/
let allImages = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11];

/*'score' and 'i' will be incremented as the game progresses. 'i' is used to target the next question/answer on each round*/
let score = 0;
let i = 0;
const quizR = document.getElementById('quiz-result');

const quizN = document.getElementById('quiz-next');



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
    let welcomeA = document.getElementById('welcome-area');
    welcomeA.remove();

    let quizI = document.getElementById('quiz-image');
    quizI.innerHTML = `${allImages[i]}`;


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

//below are 4 functions using if/else statements to check the answer validity, of the respective button clicked
//the 4 functions are similar, the only difference being which option they check
//1st function checks if the first index of the answers array in firstQuestion object
//if that index contains true it confirms it was correct, increments score and runs 'nextQuesiton()' function
//if was incorrect, it confirms it was incorrect, it does not increment score and runs 'nextQuestion()' function

function checkA() {

    if(allQuestions[i].answers[0].includes(true)) {
        /*alert("You chose the correct answer! Score increased by 1");*/
        quizR.innerHTML = `<p>That's the right answer!</p>`;
        score ++; 
        quizN.innerHTML = `<button onclick='nextQuestion();'>Next</button>`;
        
    }else  {
        quizR.innerHTML = `<p>That's the wrong answer</p>`;
        quizN.innerHTML = `<button onclick='nextQuestion();'>Next</button>`;
          /*alert("Unfortunately you chose the wrong answer!");*/
    };
    console.log(score);
    let quizS = document.getElementById('quiz-score');
    let quizI = `<h3>Your score is ${score}</h3>`;
    quizS.innerHTML = quizI;
    }

function checkB() {

    if(allQuestions[i].answers[1].includes(true)) {
        /*alert("You chose the correct answer! Score increased by 1");*/
        quizR.innerHTML = `<p>That's the right answer!</p>`;
        score ++; 
        quizN.innerHTML = `<button onclick='nextQuestion();'>Next</button>`;
        
    }else  {
        quizR.innerHTML = `<p>That's the wrong answer</p>`;
        quizN.innerHTML = `<button onclick='nextQuestion();'>Next</button>`;
          /*alert("Unfortunately you chose the wrong answer!");*/
    };
    console.log(score);
    let quizS = document.getElementById('quiz-score');
    let quizI = `<h3>Your score is ${score}</h3>`;
    quizS.innerHTML = quizI;
    }

function checkC() {
    
    if(allQuestions[i].answers[2].includes(true)) {
        /*alert("You chose the correct answer! Score increased by 1");*/
        quizR.innerHTML = `<p>That's the right answer!</p>`;
        score ++; 
        quizN.innerHTML = `<button onclick='nextQuestion();'>Next</button>`;
        
    }else  {
        quizR.innerHTML = `<p>That's the wrong answer</p>`;
        quizN.innerHTML = `<button onclick='nextQuestion();'>Next</button>`;
          /*alert("Unfortunately you chose the wrong answer!");*/
    };
    console.log(score);
    let quizS = document.getElementById('quiz-score');
    let quizI = `<h3>Your score is ${score}</h3>`;
    quizS.innerHTML = quizI;
    }


function checkD() {
    
    if(allQuestions[i].answers[3].includes(true)) {
        /*alert("You chose the correct answer! Score increased by 1");*/
        quizR.innerHTML = `<p>That's the right answer!</p>`;
        score ++; 
        quizN.innerHTML = `<button onclick='nextQuestion();'>Next</button>`;
        
    }else  {
        quizR.innerHTML = `<p>That's the wrong answer</p>`;
        quizN.innerHTML = `<button onclick='nextQuestion();'>Next</button>`;
          /*alert("Unfortunately you chose the wrong answer!");*/
    };
    console.log(score);
    let quizS = document.getElementById('quiz-score');
    let quizI = `<h3>Your score is ${score}</h3>`;
    quizS.innerHTML = quizI;
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

    if (i >= 10 ) {
        finalScore();
        /*let quizD = document.getElementById('quiz-line');
        let answerList = document.getElementById('quiz-list');
        answerList.remove();
        quizD.innerHTML = "Thanks for playing!"
        let quizS = document.getElementById('quiz-score');
        let quizI = `<h3>Your score is ${score}</h3>`;
        quizS.innerHTML = quizI;*/
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

function finalScore() {
    let quizD = document.getElementById('quiz-line');
        let answerList = document.getElementById('quiz-list');
        answerList.remove();
        quizD.innerHTML = "Thanks for playing!"
        let quizS = document.getElementById('quiz-score');
        let quizI = `<h3>Your score is ${score}</h3>
        <button type="submit" id="rank" onclick="starfleetRank();">Is Starfleet the career for you?</button>`;
        quizS.innerHTML = quizI;
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
    `<p>Your score was 0 out of 10, yet you still seek a place in Starfleet? You posess unflinching determination, even in the face of inevitable failure. Akin to someone tending a garden, knowing full well the plants will eventually wither. Your would make a fine gardener, like Boothby, beloved groundskeeper of Starfleet academy.</p>` , 
    `<p>Your score was 1 out of 10, you have made the first step towards serving in Starfleet. Everyone can make a difference, regardless of career aptitude. While Starfleet academy might be outside your scope, you could always enlist directly in Starfleet. Without pursuing the high end career like others in the academy, this gets you right in the action. You could rise to the rank of petty officer, start your journey for a more grounded path to the stars.</p>` , 
    `<p>Your score was 2 out of 10, you are a long way from the captain's chair. But every great journey begins with a small step. If you are determined, then consider joining Starfleet academy. As a Cadet trainee, you will receive a robust education and an opportunity to explore many avenues of starship service, including command, operations and sciences.</p>` ,
    `<p>Your score was 3 out of 10, you're not just the average Pakled. You have the aptitude of Starfleet Academy graduate, with the rank of Ensign. Your service aboard the ship has only just begun, but remember , the trial never ends</p>` , 
    `<p>Your score was 4 out of 10, you might be the wisest Klingon of the house. You would be well suited to begin training in the officer's program and would be easily considered for the rank of Lieutenant. You've proven you can take command, how far are you willing to go? </p>` ,
    `<p>Your score was 5 out of 10, you are as observant as any Betazoid. With your impressive knowledge of Starfleet activity, you could certainly rise to the rank of Lieutenant Commander. An impressive achievement for anyone, and a stonesthrow from ship XO position of commander. You've got the stuff, but how much stuff is the question</p>` , 
    `<p>Your score was 6 out of 10, you are conniving as any Romulan. You have the drive to suceed and there's no reason you couldn't ascend to the impressive rank of Commander, 1st officer of the ship and XO, ranking just below the Captain.Your path starts here...but lets not pretend you don't covet the captain's chair</p>` ,
    `<p>Your score was 7 out of 10, you are as wise as any Vulcan. You have the charisma, the focus and sheer force of will to ascend to the coveted rank of Captain. You are responsible for the lives of the hundreds of crew serving under you, while also shouldering the responsibility of leading by example while representing Starfleet. You are one in a million</p>` ,
    `<p>Your score was 8 out of 10, you have the intellect of a genetically altered superman of the Eugenics wars. The Captain's chair is not enough for you and by the prophets will Starfleet recognise it. You are clearly fit to be an Admiral of Starfleet, in command of major sectors of Starfleet and acting as department head at Starfleet headquarters. Your decisions will affect the destiny of the galaxy</p>` , 
    `<p>Your score was 9 out of 10, you have the intelligence, strength and energy of a positronic Android. Starfleet was too small for you, after all, managing the activity of thousands of Starships is small change, when you could influence the entire United Federation of Planets. You could be President of the Federation, signing new laws into effect, brokering peace with unknowable civilizations and stretching the fate of the cosmos like strings on a violin. You are one in a galaxy</p>` , 
    `<p>Your score was 10 out of 10 - but you already knew that didn't you? You knew what the score would be before you started the quiz, you knew what the score would be before I even thought of making the quiz. You don't just know things... you KNOW. Omnipotence is a frightening concept to many, but to you its just another 11 letter word in your frighteningly diverse vocabulary. You are obviously a member of the Q continuom, an immortal being posessing omnipotence and omniscience, deigning to play with mortals such as us for your amusement. With a click of a button you could change reality... so whats stopping you?</p>`
]

function starfleetRank () {
    let quizI = document.getElementById('quiz-image');
    quizI.innerHTML = `${finalImages[score]}`;
    let quizS = document.getElementById('quiz-score');
    quizS.remove();
    let quizD = document.getElementById('quiz-line');
        let answerList = document.getElementById('quiz-list');
        /*answerList.remove();*/
        quizD.innerHTML = `${suggestedRank[score]}`
        /*<button type="submit" id="apply" onclick="application();">click here to apply to Starfleet</button>`;
        /*let quizS = document.getElementById('quiz-score');
        let quizI = `${suggestedRank[score]}`;
        quizS.innerHTML = quizI;*/
};


function application() {
   
};