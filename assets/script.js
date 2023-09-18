// connect opening screen and button to start quiz
var mainScreen = document.querySelector(".main");
var highScores = document.querySelector(".scores");
var optionButtons = document.querySelector(".options");

var answerPosibilities = document.getElementById("answers");
var startButton = document.getElementById("start");
var timerE1 = document.getElementById("countdown");
var questions = document.getElementById("questionOne");

var currentQuestionIndex = 0;
var question;
var timer;
var timerCount;
var score;
var correct;
var initials = "";

// when start is clicked timer is activated

function startGame() {
    currentQuestionIndex = 0;
    timerCount = 40;
    score = 0;

    displayQuestions();
    startTimer();
}

function startTimer() {
    timer = setInterval(function() {
       if (timerCount > 0) {
        timerCount--;
        timerE1.textContent = timerCount;
    }
        
        if (timerCount === 0) {
        clearInterval(timer);
        
    }
    }, 1000);
}


startButton.addEventListener("click", startGame);

// can keep quesetions and answers in array
var questionPossability = [
    { question: "What does the NaN value represent?",
      answers: ["Not a number", "Null value", "Undefined value", "Boolean value"],
      correct: "Not a number"
    },
    {
        question: "What is the difference between == and === operators?",
        answers: ["They are interchangable", "== performs a strict comparison, while === performs a loose comparison", "=== performs a strict comparison, while == performs a loose comparison", "They both perfom the same type of comparison"],
        correct: "=== performs a strict comparison, while == performs a loose comparison"
    },
    {
        question: "What is the correct syntax for a for loop?",
        answers: ["for (var i = 0; i < 5; i++)", "for (i = 0; i < 5; i++)", "for (var i = 5; i > 0; i--)", "for (i = 5; i > 0; i--)"],
        correct: "for (var i = 0; i < 5; i++)"
    },
    {
        question: "What does the this keyword refer to?",
        answers: ["The current function", "The global object", "The object that the function belongs to", "The parent object that the function belongs to"],
        correct: "The object that the function belongs to"
    },
]

// as soon as timer is activated first question pops up
function displayQuestions() {
  
if (currentQuestionIndex < questionPossability.length && timerCount > 0) {
   document.querySelector(".main").style.display = 'none';

 // after question is answered, next question pops up
   document.getElementById('questions').innerHTML =
   `
                <div class="questions">
                    <h2 id="questionOne">${questionPossability[currentQuestionIndex].question}</h2>
                    <div id="answers">
                        <button class="options">${questionPossability[currentQuestionIndex].answers[0]}</button>
                        <button class="options">${questionPossability[currentQuestionIndex].answers[1]}</button>
                        <button class="options">${questionPossability[currentQuestionIndex].answers[2]}</button>
                        <button class="options">${questionPossability[currentQuestionIndex].answers[3]}</button>
                    </div>
                </div>
    `
     // when game is over, score can be saved under initals
     // have pop up box to input initials            
     } else {
        clearInterval(timer)
        score = timerCount;
        document.querySelector("#score").textContent = score;
        document.querySelector("#mainDiv").style.display = 'none';
     }
}

document.getElementById('questions').onclick = function(e) {
    document.querySelector('.footer').style.display = 'block';
    var answer = e.target.innerText;
    console.log(answer);
    // when question answered correctly, store points and recieve correct answer notification
    if (answer === questionPossability[currentQuestionIndex].correct) {
        document.querySelector('footer').innerHTML = 
        `<div id="correct"><h4>CORRECT ANSWER!</h4></div>`; 
    // when question is answered incorrectly, time is subtracted from timer
    // note at bottom of screen that answer is wrong
        } else {
            document.querySelector('.footer').innerHTML = 
            `<div id="wrong"><h4>WRONG ANSWER!</h4></div>`;
            timerCount = timerCount - 10;
        }

        currentQuestionIndex++

        setTimeout(function() {
            document.querySelector('.footer').style.display = 'none';
            displayQuestions()
        }, 1000)

    }
    // when all question is answered or time runs out, GAME OVER
     function gameOver() {
        
        if (timerCount = 0) {
            document.getElementById('gameOver').style.display = 'none';
            `<div>
            <h1 id="youLose">Game Over<br>You Lose</h1>
            <button id="restart">Restart</button>
            </div>`
        } else {

            document.getElementById('finlPage').submit();
         // can save scores in local storage
         var highScore = localStorage.getItem("score")
        // when game is over, score can be saved under initals

         // have pop up box to input initials     
        }
     }
     // has go back button to return to main quiz
     restartButton = document.getElementById('restart');
     restartButton.addEventListener("click", gameOver);
    
    // can access scores through highscore section
    // can clear highscores feature



  

