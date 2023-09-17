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
var score;
var correct;

// when start is clicked timer is activated

function startGame() {
    currentQuestionIndex = 0;
    timerCount = 50;
    score = 0;

    displayQuestions();
    startTimer();
}


function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerE1.textContent = timerCount;
        
        if (timerCount === 0) {
        clearInterval(timer);
        
    }
    }, 1000);
}


startButton.addEventListener("click", startGame);

// can keep quesetions and answers in array
var questionPossability = [
    { question: "1",
      answers: [
        {option: "1"},
        {option: "2"},
        {option: "3"},
        {option: "4"},
      ]
      correct: ""
    },
    {
        question: "2",
        answers: [
          {option: "1"},
          {option: "2"},
          {option: "3"},
          {option: "4"},
        ]
        correct: ""
    },
    {
        question: "3",
        answers: [
          {option: "1"},
          {option: "2"},
          {option: "3"},
          {option: "4"},
        ]
        correct: ""
    },
    {
        question: "4",
        answers: [
          {option: "1"},
          {option: "2"},
          {option: "3"},
          {option: "4"},
        ]
        correct: ""
    },
    {
        question: "5",
        answers: [
          {option: "1", isCorrect: false},
          {option: "2", isCorrect: true},
          {option: "3", isCorrect: false},
          {option: "4", isCorrect: false},
        ]
        correct: ""
    },
]


// as soon as timer is activated first question pops up
function displayQuestions() {
    var currentQuestion = questionPossability[currentQuestionIndex];
  
if (currentQuestionIndex < questionPossability.length && timerCount > 0) {
   document.querySelector(".main").style.display= 'none';
   document.querySelector(".quiz").style.display= 'block';

   document.getElementById('questions').innerHTML =
                <div class="questions">
                    <h2 id="questionOne">${questionPossability[currentQuestionIndex].question}</h2>
                    <div id="answers">
                        <button class="options">${questionPossability[currentQuestionIndex].answers[0]}</button>
                        <button class="options">${questionPossability[currentQuestionIndex].answers[1]}</button>
                        <button class="options">${questionPossability[currentQuestionIndex].answers[2]}</button>
                        <button class="options">${questionPossability[currentQuestionIndex].answers[3]}</button>
                    </div>
                </div>;
     } else {
        clearInterval(timer)
        score = timerCount;
        document.querySelector('#score').textContent = score;
        document.querySelector('#mainDiv').style.display = 'none';
        document.querySelector('#finalPage').style.display = 'block';

     }
    // after question is answered, next question pops up
    
}

document.getElementById('questions').onclick = function(e) {
    document.querySelector('.footer').style.display = block;
    var answer = e.target.innerText;
    console.log(answer);
    if (answer === questionPossability[currentQuestionIndex].correct) {
        document.querySelector('footer').innerHTML = 
        <div id="correct"><h4>CORRECT ANSWER!</h4></div>; {

        } else {
            document.querySelector('.footer').innerHTML = 
            <div id="wrong"><h4>WRONG ANSWER!</h4></div>;
            timerCount = timerCount - 10;
        }
    }
    currentQuestionIndex++

}
// when question answered correctly, store points and recieve correct answer notification
// when question is answered incorrectly, time is subtracted from timer
    // note at bottom of screen that answer is wrong
// when all question is answered or time runs out, GAME OVER

// when game is over, score can be saved under initals
     // have pop up box to input initials 
    // can save scores in local storage
// can access scores through highscore section
    // has go back button to return to main quiz
    // can clear highscores feature
