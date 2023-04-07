//AS A coding boot camp student
//I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
//SO THAT I can gauge my progress compared to my peers
var time = 0;
var timeSet = document.querySelector("#time");
var timeBar = document.querySelector("#time-left");
var start = document.querySelector("#start-button");
var mainEl = document.querySelector("#questions");
var subTextEl = document.querySelector("#sub-text");

var main = document.querySelector("#main");
var answerList = document.createElement("ul");
answerList.setAttribute("id", "answer-list");
main.appendChild(answerList);
var bottomText = document.createElement("h3");
var highScoreClick = document.querySelector("#high-score-page");
highScoreClick.addEventListener("click", scorePage);
bottomText.setAttribute("style", "display:none");
bottomText.setAttribute("id", "bottom-text");
main.appendChild(bottomText);
answerList.setAttribute("style", "text-align:center; border-bottom: none");

var scoreList = document.getElementById("score-list");

var initialForm = document.querySelector("#initial-form");

var inputLabel = document.createElement("label");
inputLabel.textContent= "Initials here: ";
inputLabel.setAttribute("style", "display:none");
initialForm.appendChild(inputLabel);

var initialInput = document.createElement("input");
initialInput.setAttribute("id","text-box");
initialInput.setAttribute("name", "text-box");
initialInput.setAttribute("style", "display:none");
initialInput.setAttribute("type", "text");
initialInput.setAttribute("minlength", "2");
initialInput.setAttribute("maxlength", "2");
initialForm.appendChild(initialInput);

var submitBtn = document.createElement("button");
initialForm.appendChild(submitBtn);
submitBtn.setAttribute("class", "btn");
submitBtn.setAttribute("style", "display:none");

var goBackBtn = document.createElement("button");
scoreList.appendChild(goBackBtn);
goBackBtn.setAttribute("class", "btn");
goBackBtn.setAttribute("id", "go-back");
goBackBtn.setAttribute("style", "display:none");
goBackBtn.addEventListener("click", restartQuiz);

var clearHighScoreBtn = document.createElement("button");
scoreList.appendChild(clearHighScoreBtn);
clearHighScoreBtn.setAttribute("class", "btn");
clearHighScoreBtn.setAttribute("style", "display:none");

var questionSet = 1;
var isGameWon = false;
//GIVEN I am taking a code quiz
//WHEN I click the start button
//THEN a timer starts and I am presented with a question

function startQuiz() {
    console.log("vee quiz time besties");
    start.setAttribute("style", "display:none");
    time = 75;
    timeSet.textContent = time;
    createButtons();
    firstQuestion();
    var interval = setInterval(function () {
        time--;
        timeSet.textContent = time;
        if (time <= 0) {
            timeBar.remove();
            clearInterval(interval);
            mainEl.textContent = "Nagini ate you :/";
            start.setAttribute("style", "width:8em; text-align:center; padding-top:5px; padding-bottom:5px");
            main.setAttribute("style", "text-align:center");
            start.textContent = "Try Again!";
            answer1.setAttribute("style", "display:none");
            answer2.setAttribute("style", "display:none");
            answer3.setAttribute("style", "display:none");
            answer4.setAttribute("style", "display:none");
            start.removeEventListener("click", buttonStart);
            start.addEventListener("click", restartQuiz);
            answerList.setAttribute("style", "border-bottom:none");
            bottomText.setAttribute("style", "display:none");
        } else if (isGameWon == true) {
            clearInterval(interval);
            timeSet.textContent = time;
        }
    }, 1000);

    
}

//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and my score

function createButtons() {
    var answerEl = [];
    for (let i = 1; i < 5; i++) {
        answerEl[i] = document.createElement("button");
        answerEl[i].set
        answerEl[i].setAttribute("class", "answer-btn");
        answerEl[i].setAttribute("id", "answer" + i);
        answerEl[i].setAttribute("style", "display:block; margin:10px");
        answerList.appendChild(answerEl[i]);
    }
}

start.addEventListener("click", buttonStart);

function buttonStart() {
    startQuiz();
};

function firstQuestion() {
    subTextEl.textContent = "";
    mainEl.setAttribute("style", "font-size:250%");
    mainEl.textContent = "When was Voldemort's birthday?";

    answer1.textContent = "December 2nd, 1933";
    answer1.addEventListener("click", wrongAnswer);

    answer2.textContent = "December 31st, 1926";
    answer2.addEventListener("click", rightAnswer);

    answer3.textContent = "June 4th, 1908";
    answer3.addEventListener("click", wrongAnswer);

    answer4.textContent = "August 17th, 1908";
    answer4.addEventListener("click", wrongAnswer);
}

function secondQuestion() {
    answerList.setAttribute("style", "display: block");
    mainEl.textContent = "What was Lord Voldemort's birth name?";

    answer1.textContent = "Tom Morfin Riddle";

    answer2.removeEventListener("click", rightAnswer);
    answer2.textContent = "Tom Merope Riddle";
    answer2.addEventListener("click", wrongAnswer);

    answer3.textContent = "Thomas Morfin Riddle";

    answer4.removeEventListener("click", wrongAnswer);
    answer4.textContent = "Tom Marvolo Riddle";
    answer4.addEventListener("click", rightAnswer);
}

function thirdQuestion() {
    answerList.setAttribute("style", "display: block");
    mainEl.textContent = "How old was Voldemort when he made his first Horcrux?";

    answer1.textContent = "20";

    answer2.textContent = "14";

    answer3.textContent = "24";

    answer4.textContent = "16";
}

function fourthQuestion() {
    answerList.setAttribute("style", "display: block");
    mainEl.textContent = "What color are Voldemort's eyes?";

    answer1.removeEventListener("click", wrongAnswer);
    answer1.textContent = "Red";
    answer1.addEventListener("click", rightAnswer);

    answer2.textContent = "Blue";

    answer3.textContent = "Brown";

    answer4.removeEventListener("click", rightAnswer);
    answer4.textContent = "Green";
    answer4.addEventListener("click", wrongAnswer);
}

function fifthQuestion() {
    answerList.setAttribute("style", "display: block");

    mainEl.textContent = "What potion was his father under when he was concieved to make him unable to feel love?";

    answer1.removeEventListener("click", rightAnswer);
    answer1.textContent = "Felix Felicis";
    answer1.addEventListener("click", wrongAnswer);

    answer2.textContent = "Polyjuice";

    answer3.removeEventListener("click", wrongAnswer);
    answer3.textContent = "Ammortentia";
    answer3.addEventListener("click", rightAnswer);

    answer4.textContent = "Veritaserum";
}

function sixthQuestion() {
    answerList.setAttribute("style", "display: block");
    mainEl.textContent = "Who did Voldemort kill to create the Hufflepuff's Cup Horcrux?";

    answer1.removeEventListener("click", wrongAnswer);
    answer1.textContent = "Tom Riddle Sr.";
    answer1.addEventListener("click", lastWrong);

    answer2.removeEventListener("click", wrongAnswer);
    answer2.textContent = "Hepzibah Smith";
    answer2.addEventListener("click", lastRight);

    answer3.removeEventListener("click", rightAnswer);
    answer3.textContent = "Horace Slughorn";
    answer3.addEventListener("click", lastWrong);

    answer4.removeEventListener("click", wrongAnswer);
    answer4.textContent = "Moaning Myrtle (Myrtle Warren)";
    answer4.addEventListener("click", lastWrong);
}

function wrongAnswer() {
    time = time - 15;
    console.log(time);
    bottomText.setAttribute("style", "display: block; border:5px solid lightgreen; padding:10px");
    bottomText.textContent = "Wrong :(";
    answerList.setAttribute("style", "display: none");

    transitionPhase();
}

function rightAnswer() {
    answerList.setAttribute("style", "display: none");
    bottomText.setAttribute("style", "display: block; border:5px solid lightgreen; padding:10px");
    bottomText.textContent = "Correct!🐍";
    transitionPhase();
}

function lastWrong() {
    time = time - 15;
    console.log(time);
    bottomText.setAttribute("style", "display: block; border:5px solid lightgreen; padding:10px");
    bottomText.textContent = "Wrong :(";
    answerList.setAttribute("style", "display:none");
    isGameWon = true;
    setTimeout(() => {
        yourScore();
    }, 1000);
}

function lastRight() {
    bottomText.setAttribute("style", "display: block; border:5px solid lightgreen; padding:10px");
    bottomText.textContent = "Correct!🐍";
    answerList.setAttribute("style", "display:none");
    isGameWon = true;
    setTimeout(() => {
        yourScore();
    }, 1000);
   
}

function transitionPhase() {
    setTimeout(() => {
        answerList.setAttribute("style", "border-bottom: none");
        bottomText.setAttribute("style", "display:none");
        questionSet++;
        if (questionSet == 2 && time > 0) {
            secondQuestion();
        } else if (questionSet == 3 && time > 0) {
            thirdQuestion();
        } else if (questionSet == 4 && time > 0) {
            fourthQuestion();
        } else if (questionSet == 5 && time > 0) {
            fifthQuestion();
        } else if (questionSet == 6 && time > 0) {
            sixthQuestion();
        }
    }, 1000);
}

function yourScore() {
    bottomText.setAttribute("style", "display:none");
    timeBar.setAttribute("style", "display:none");
    mainEl.textContent = "You Won!";
    subTextEl.setAttribute("style", "display:block");
    subTextEl.textContent = "Your final score is " + time + "!";
    inputLabel.setAttribute("style", "display:inline-block; padding:5px");
    initialInput.setAttribute("style", "display:inline-block");
    submitBtn.setAttribute("style", "display:inline-block; margin-left:10px");
    submitBtn.textContent = "Submit";
    submitBtn.addEventListener("click", submitAndScore);
}



var highScoreList = document.createElement("ul");
scoreList.appendChild(highScoreList);
highScoreList.setAttribute("id", "high-score-list");
highScoreList.setAttribute("style", "text-align:start");


function submitAndScore(event) {

    event.preventDefault();

    storeScores();
    scorePage();
}

function storeScores() {

    var scores = JSON.parse(localStorage.getItem("scores"));

    if (scores !== null) {

        var userScore = {
        highScore: time,
        initials: initialInput.value
        }

        scores.push(userScore);

        console.log(scores);

        localStorage.setItem("scores", JSON.stringify(scores));

    } else {

        var scores = [];

        var userScore = {
            highScore: time,
            initials: initialInput.value
        }

        scores.push(userScore);

        console.log(scores);

        localStorage.setItem("scores", JSON.stringify(scores));

    }
}

function scorePage() {
    renderScores();

    console.log("vee <3");
    mainEl.textContent = "High Scores 🐍";
    start.setAttribute("style", "display:none");
    subTextEl.setAttribute("style", "display:none");
    answerList.setAttribute("style", "display:none");
    bottomText.setAttribute("style", "display:none");
    inputLabel.setAttribute("style", "display:none");
    initialInput.setAttribute("style", "display:none");
    submitBtn.setAttribute("style", "display:none");
    goBackBtn.setAttribute("style", "display:inline-block");
    goBackBtn.textContent = "Go Back";
    goBackBtn.addEventListener("click", restartQuiz);
    clearHighScoreBtn.setAttribute("style", "display:inline-block");
    clearHighScoreBtn.textContent = "Clear High Scores";
    clearHighScoreBtn.addEventListener("click", clearHighScores);
}

function renderScores() {  

    var scores = JSON.parse(localStorage.getItem("scores"));

    if (scores !== null) {

        var liScores = JSON.parse(localStorage.getItem("scores"));

        for (let i = 0; i < scores.length; i++) {
            console.log("mood");
            liScores[i] = document.createElement("li");
            liScores[i].setAttribute("class", "score-initials");
            console.log(scores[i]);
            highScoreList.appendChild(liScores[i]);
            liScores[i].setAttribute("data-index", i);
            liScores[i].textContent = [i + 1] + ". " + scores[i].initials + " - " + scores[i].highScore;
        }
    }
    mainEl.textContent = "High Scores 🐍";
    highScoreClick.setAttribute("style", "display:none");
    isGameWon = true;
    timeBar.setAttribute("style", "display:none");
    start.setAttribute("style", "display:none");
    subTextEl.setAttribute("style", "display:none");
    answerList.setAttribute("style", "display:none");
    bottomText.setAttribute("style", "display:none");
    inputLabel.setAttribute("style", "display:none");
    initialInput.setAttribute("style", "display:none");
    submitBtn.setAttribute("style", "display:none");
    goBackBtn.setAttribute("style", "display:inline-block");
    goBackBtn.textContent = "Go Back";
    goBackBtn.addEventListener("click", restartQuiz);
    clearHighScoreBtn.setAttribute("style", "display:inline-block");
    clearHighScoreBtn.textContent = "Clear High Scores";
    clearHighScoreBtn.addEventListener("click", clearHighScores);
}

function clearHighScores() {
    localStorage.clear();
    var scoreInitials = document.querySelector(".score-initials");
    scoreInitials.setAttribute("style", "display:none");
}

function restartQuiz() {
    window.location.reload();
}