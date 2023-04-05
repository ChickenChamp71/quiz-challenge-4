//AS A coding boot camp student
//I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
//SO THAT I can gauge my progress compared to my peers
var time = 0;
var main = document.main;
var timeSet = document.querySelector("#time");
var timeBar = document.querySelector("#time-left");
var start = document.querySelector("#start-button");
var mainEl = document.querySelector("#questions");
var subTextEl = document.querySelector("#sub-text");
var highScores = [];
//GIVEN I am taking a code quiz
//WHEN I click the start button
//THEN a timer starts and I am presented with a question

function startQuiz() {
    console.log("vee quiz time besties");
    start.remove();
    time = 75;
    timeSet.textContent = time;
    createButtons();
    firstQuestion();

    var interval = setInterval(function () {
        time--;
        timeSet.textContent = time;
        if (time === 0) {
        timeBar.remove();
        clearInterval(interval);

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

start.addEventListener("click", function () {
    startQuiz();
});

function createButtons() {
    var answerEl = [];
    var answerList = document.createElement("ul");
    answerList.setAttribute("id", "answer-list");
    document.body.appendChild(answerList);
    
    for (let i = 1; i < 5; i++) {
        answerEl[i] = document.createElement("button");
        answerEl[i].set
        answerEl[i].setAttribute("class", "btn");
        answerEl[i].setAttribute("id", "answer" + i);
        answerList.appendChild(answerEl[i]);
        console.log(answerEl[i]);
    }
}

function firstQuestion() {
    subTextEl.textContent = ""; 
    mainEl.textContent = "Question One Placeholder";
    answer1.textContent = "Answer One One Placeholder";
    answer2.textContent = "Answer One Two Placeholder";
    answer3.textContent = "Answer One Three Placeholder";
    answer4.textContent = "Answer One Four Placeholder"
}

answerList.setAttribute("style", "text-align:center; ")