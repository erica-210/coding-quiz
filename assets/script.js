// connect opening screen and button to start quiz
var mainScreen = document.querySelector(".main");
var highScores = document.querySelector(".scores");
var optionButtons = document.querySelector(".options");

var answerPosibilities = document.getElementById("answers")
var startButton = document.getElementById("start");
var timerE1 = document.getElementById("countdown");
var questions = document.getElementById("questionOne");

var currentQuestionIndex = 0;
var question;
var timer;
var timerCount;
var score = 0;

// when start is clicked timer is activated

function startGame() {
    currentQuestionIndex = 0;
    timerCount = 75;
    score = 0;

    displayQuestions();
    startTimer();
}

startButton.addEventListener("click", startGame);

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerE1.textContent = timerCount;
        
        if (timerCount === 0) {
        clearInterval(timer);
        
        if (timerCount >= 0) {
        }

    }
    }, 1000);
}

// can keep quesetions and answers in array
var questionPossability = [
    { question: "1",
      answers: [
        {option: "1", isCorrect: false},
        {option: "2", isCorrect: true},
        {option: "3", isCorrect: false},
        {option: "4", isCorrect: false},
      ]
    },
    {
        question: "2",
        answers: [
          {option: "1", isCorrect: true},
          {option: "2", isCorrect: false},
          {option: "3", isCorrect: false},
          {option: "4", isCorrect: false},
        ]
    },
    {
        question: "3",
        answers: [
          {option: "1", isCorrect: false},
          {option: "2", isCorrect: false},
          {option: "3", isCorrect: false},
          {option: "4", isCorrect: true},
        ]
    },
    {
        question: "4",
        answers: [
          {option: "1", isCorrect: false},
          {option: "2", isCorrect: false},
          {option: "3", isCorrect: true},
          {option: "4", isCorrect: false},
        ]
    },
    {
        question: "5",
        answers: [
          {option: "1", isCorrect: false},
          {option: "2", isCorrect: true},
          {option: "3", isCorrect: false},
          {option: "4", isCorrect: false},
        ]
    },
]


// as soon as timer is activated first question pops up
function displayQuestions() {
    var currentQuestion = questionPossability[currentQuestionIndex];
    var questionNumber = currentQuestionIndex + 1;
    questions.innerHTML = questionNumber + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        var button = document.createElement("button");
        button.innerHTML = answers.option;
        button.classList.add("optionButtons");
        answerPosibilities.appendChild(button);
    });


    // after question is answered, next question pops up
    currentQuestionIndex++;
}

startGame();
// when question answered correctly, store points and recieve correct answer notification
function correctAnswer() {
    //display correct answer footer
    
  }


// when question is answered incorrectly, time is subtracted from timer
function wrongAnswer() {

}
    // note at bottom of screen that answer is wrong
// when all question is answered or time runs out, GAME OVER

// when game is over, score can be saved under initals
     // have pop up box to input initials 
    // can save scores in local storage
// can access scores through highscore section
    // has go back button to return to main quiz
    // can clear highscores feature
