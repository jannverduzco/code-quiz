//////////// VARIABLES ----------------------------------------------------------
var questionsP= [
    {
        question: "What does HTML stand for?",
        choices: ["Hypertext Multi Language", "Hypertext Main Language", "Hypertag Multi Language", "Hypertext Markup Language"],
        answer: "Hypertext Markup Language"
    },

    {
        question: "What is the very first declaration in an HTML document? ",
        choices: ["<div>", "<Head>", "<title>", "<!DOCTYPE html>"],
        answer: "<!DOCTYPE html>"
    },

    {
        question: "What does CSS stand for?",
        choices: ["Cascading Style Sheets", "Cascading Style Sample", "Cascading Sectioin Style", "Cascading Style Sections"],
        answer:"Cascading Style Sheets"

    },

    {
        question: "Which of the following removes the first element from an array?",
        choices: [".pop() ", ".shift()", ".push()", ".unshift()"],
        answer: ".shift()"
    },

    {
        question: "What does DOM stand for?",
        choices: ["Document Observer Model", "Document Object Moderation", "Documentation Object Model", "Document Object Model"],
        answer: "Document Object Model"
    }
]
var quizInfo = document.querySelector(".quiz-info")
var startButton = document.querySelector(".start");
var timerEl = document.querySelector(".timer");
var questions = document.querySelector(".questions")
var currentQuestion = document.querySelector(".current-question")
var quizCompleted = document.querySelector(".quiz-completed")
// var score = document.querySelector("")
var submitScore = document.querySelector(".submit-button");
var highscoresSection = document.querySelector(".highscores-section")
var clearScore = document.querySelector(".clearHighscores");
var secondsRem = 60;
var questionNum = 0;
var zero = 0;

//////////// LISTENERS ----------------------------------------------------------

startButton.addEventListener("click", startQuiz);


//////////// FUNCTIONS ----------------------------------------------------------


function startQuiz() {
    console.log("startQuiz")
    var timerInterval = setInterval(function () {
        timerEl.textContent = "Time: " + secondsRem;
        secondsRem--;


        if (secondsRem <= 0) {
            clearInterval(timerInterval);
            timerEl.textContent = "Time: Game Over"
        }


    }, 1000);

    quizInfo.style.display = "none";
    questions.style.display = "block";

    renderQuestion();
}

quizInfo.style.display = "block";
questions.style.display = "none";
highscoresSection.style.display = "none";
quizCompleted.style.display = "none";

function renderQuestion() {
    currentQuestion.textContent = questionsP[0].question;
    console.log(currentQuestion)
}







