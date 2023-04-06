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
main.appendChild(submitBtn);
submitBtn.setAttribute("class", "btn");
submitBtn.setAttribute("style", "display:none");

var goBackBtn = document.createElement("button");
goBackBtn.setAttribute("class", "btn");
goBackBtn.setAttribute("style", "display:none");
goBackBtn.addEventListener("click", restartQuiz);

var clearHighScoreBtn = document.createElement("button");
clearHighScoreBtn.setAttribute("class", "btn");
clearHighScoreBtn.setAttribute("style", "display:none");

var questionSet = 1;
var userScoreRecall = [];
var userScore = {
    highScore: time,
    initials: initialInput.value
}
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
    mainEl.textContent = "How much wood could a wood chuck chuck if a wood chuck could chuck wood?";

    answer1.textContent = "Answer One One Placeholder";
    answer1.addEventListener("click", wrongAnswer);

    answer2.textContent = "Answer One Two Placeholder";
    answer2.addEventListener("click", rightAnswer);

    answer3.textContent = "Answer One Three Placeholder";
    answer3.addEventListener("click", wrongAnswer);

    answer4.textContent = "Answer One Four Placeholder";
    answer4.addEventListener("click", wrongAnswer);
}

function secondQuestion() {
    answerList.setAttribute("style", "display: block");
    mainEl.textContent = "How much wood could a wood chuck chuck if a wood chuck could chuck wood?";

    answer1.textContent = "Answer One One Placeholder";

    answer2.removeEventListener("click", rightAnswer);
    answer2.textContent = "Answer One Two Placeholder";
    answer2.addEventListener("click", wrongAnswer);

    answer3.textContent = "Answer One Three Placeholder";

    answer4.removeEventListener("click", wrongAnswer);
    answer4.textContent = "Answer One Four Placeholder";
    answer4.addEventListener("click", rightAnswer);
}

function thirdQuestion() {
    answerList.setAttribute("style", "display: block");
    mainEl.textContent = "How much wood could a wood chuck chuck if a wood chuck could chuck wood?";

    answer1.textContent = "Answer One One Placeholder";

    answer2.textContent = "Answer One Two Placeholder";

    answer3.textContent = "Answer One Three Placeholder";

    answer4.textContent = "Answer One Four Placeholder";
}

function fourthQuestion() {
    answerList.setAttribute("style", "display: block");
    mainEl.textContent = "How much wood could a wood chuck chuck if a wood chuck could chuck wood?";

    answer1.removeEventListener("click", wrongAnswer);
    answer1.textContent = "Answer One One Placeholder";
    answer1.addEventListener("click", rightAnswer);

    answer2.textContent = "Answer One Two Placeholder";

    answer3.textContent = "Answer One Three Placeholder";

    answer4.removeEventListener("click", rightAnswer);
    answer4.textContent = "Answer One Four Placeholder";
    answer4.addEventListener("click", wrongAnswer);
}

function fifthQuestion() {
    answerList.setAttribute("style", "display: block");

    mainEl.textContent = "How much wood could a wood chuck chuck if a wood chuck could chuck wood?";

    answer1.removeEventListener("click", rightAnswer);
    answer1.textContent = "Answer One One Placeholder";
    answer1.addEventListener("click", wrongAnswer);

    answer2.textContent = "Answer One Two Placeholder";

    answer3.removeEventListener("click", wrongAnswer);
    answer3.textContent = "Answer One Three Placeholder";
    answer3.addEventListener("click", rightAnswer);

    answer4.textContent = "Answer One Four Placeholder";
}

function sixthQuestion() {
    answerList.setAttribute("style", "display: block");
    mainEl.textContent = "How much wood could a wood chuck chuck if a wood chuck could chuck wood?";

    answer1.removeEventListener("click", wrongAnswer);
    answer1.textContent = "Answer One One Placeholder";
    answer1.addEventListener("click", lastWrong);

    answer2.removeEventListener("click", wrongAnswer);
    answer2.textContent = "Answer One Two Placeholder";
    answer2.addEventListener("click", lastRight);

    answer3.removeEventListener("click", rightAnswer);
    answer3.textContent = "Answer One Three Placeholder";
    answer3.addEventListener("click", lastWrong);

    answer4.removeEventListener("click", wrongAnswer);
    answer4.textContent = "Answer One Four Placeholder";
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
main.appendChild(highScoreList);
highScoreList.setAttribute("id", "high-score-list");
highScoreList.setAttribute("style", "text-align:start");

function storeScores() {
    localStorage.setItem("userScoreRecall", JSON.stringify(userScoreRecall));
}

function submitAndScore(event) {

    event.preventDefault();

    var initialText = initialInput.value;

    if (initialText === "") {
        return;
    }

    userScoreRecall.push(initialText);
    initialText.value = "";

    storeScores();
    scorePage();
}

function renderScores() {
    highScoreList.innerHTML = "";
    

    for (let i = 0; i < userScoreRecall.length; i++) {
        var userScoreRecall = userScoreRecall[i];

        var scoreLi = document.createElement("li");
        scoreLi.textContent = userScoreRecall;
        scoreLi.setAttribute("data-index", i);

        highScoreList.appendChild(scoreLi);
    }
}

function scorePage() {
    init();

    console.log("vee <3");
    mainEl.textContent = "High Scores 🐍";
    start.setAttribute("style", "display:none");
    subTextEl.setAttribute("style", "display:none");
    answerList.setAttribute("style", "display:none");
    bottomText.setAttribute("style", "display:none");
    inputLabel.setAttribute("style", "display:none");
    initialInput.setAttribute("style", "display:none");
    submitBtn.setAttribute("style", "display:none");
    goBackBtn.setAttribute("style", "display:block");
    goBackBtn.textContent = "Go Back";
    goBackBtn.addEventListener("click", restartQuiz);
    clearHighScoreBtn.setAttribute("style", "display:block");
    clearHighScoreBtn.textContent = "Clear High Scores";
    clearHighScoreBtn.addEventListener("click", clearHighScores);
}

function init() {

    var storedScores = JSON.parse(localStorage.getItem("userScoreRecall"));

    if (storedScores !== null) {
        storedScores = userScoreRecall;
    }
    
    renderScores();
}

function clearHighScores() {

}

function restartQuiz() {
    window.location.reload();
}