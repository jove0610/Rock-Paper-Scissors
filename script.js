console.log('hello');

//Create variables that changes over the course of the game
let numWin = 0;
let numLoss = 0;
let playerPick = "";
let computerPick = "";
let result = "Win 5 games against computer!";

//Create the variables that will be used for DOM Manipulation
const winCountDiv = document.querySelector('#winCount');
let winCount = document.createElement('p');

const loseCountDiv = document.querySelector('#loseCount');
let loseCount = document.createElement('p');

const showResultDiv = document.querySelector("body");
let showResult = document.createElement('p');

const playerPickBox = document.querySelector('.playerPick');
let displayPlayerPick = document.createElement('img');

const compPickBox = document.querySelector('.compPick');
let displayCompPick = document.createElement('img');

const rockBtn = document.querySelector('#rockButton');
const paperBtn = document.querySelector('#paperButton');
const scissorsBtn = document.querySelector('#scissorsButton');
const resetBtn = document.querySelector('#resetButton');

//Creates DOM for the 5 variables above, if there is existing DOM, it updates it to new value
function showAllDom() {
    winCount.textContent = numWin;
    try {
        winCountDiv.removeChild(winCount);
        winCountDiv.appendChild(winCount);
    } catch {
        winCountDiv.appendChild(winCount);
    }                               

    loseCount.textContent = numLoss;
    try {
        loseCountDiv.removeChild(loseCount);
        loseCountDiv.appendChild(loseCount);
    } catch {
        loseCountDiv.appendChild(loseCount);
    }               

    showResult.setAttribute("class", "showResultBox")
    showResult.textContent = result;
    try {
        showResultDiv.removeChild(showResult);
        showResultDiv.appendChild(showResult);
    } catch {
        showResultDiv.appendChild(showResult);
    }

    if (playerPick) {
        displayPlayerPick.setAttribute("class", "showPick");
        if (playerPick == "rock") {
            displayPlayerPick.setAttribute("src", "media/rock.jpg");
        } else if (playerPick == "paper") {
            displayPlayerPick.setAttribute("src", "media/paper.jpg");
        } else {
            displayPlayerPick.setAttribute("src", "media/scissors.jpg");
        }
        try {
            playerPickBox.removeChild(displayPlayerPick);
            playerPickBox.appendChild(displayPlayerPick);
        } catch {
            playerPickBox.appendChild(displayPlayerPick);
        }                    
    }

    if (computerPick) {
        displayCompPick.setAttribute("class", "showPick");
        if (computerPick == "rock") {
            displayCompPick.setAttribute("src", "media/rock.jpg");
        } else if (computerPick == "paper") {
            displayCompPick.setAttribute("src", "media/paper.jpg");
        } else {
            displayCompPick.setAttribute("src", "media/scissors.jpg");
        }
        try {
            compPickBox.removeChild(displayCompPick);
            compPickBox.appendChild(displayCompPick);
        } catch {
            compPickBox.appendChild(displayCompPick);
        }                   
    }
}

//returns "rock", "paper" or "scissors" for the computer
function computerPlay() {
    let num1 = Math.random() * 3;
    let num2 = Math.floor(num1 + 1);
    if (num2 == 1) {
        return "rock";
    } else if (num2 == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

//returns the result of the round (win, loss, draw)
function playRound(playerSelection, computerSelection) {
    let resultRound = (playerSelection === computerSelection) ? "It's a Draw!" : 
        (playerSelection === "rock" && computerSelection === "paper") ? "You Lose! Paper beats Rock." :
        (playerSelection === "rock" && computerSelection === "scissors") ? "You Win! Rock beats Scissors." :

        (playerSelection === "paper" && computerSelection === "scissors") ? "You Lose! Scissors beats Paper." :
        (playerSelection === "paper" && computerSelection === "rock") ? "You Win! Paper beats Rock." :

        (playerSelection === "scissors" && computerSelection === "rock") ? "You Lose! Rock beats Scissors." :
        
        "You Win! Scissors beats Paper.";

    return resultRound;
}

//Updates the numWin and numLoss variable           
function updateWinLoss() {
    if (result.includes("Win")) {
        numWin++;
    } else if (result.includes("Lose")) {
        numLoss++;
    } 
}

//Picks rock, paper or scissors for computer, starts the game, updates the win/loss and the DOM
function playUpdateShow() {
    computerPick = computerPlay();
    result = playRound(playerPick, computerPick);
    updateWinLoss();
    showAllDom();
}

//Function to end the game once win/loss reaches 5
function gameOver() {
    result = 'Game Over! Click Reset to play again!';
    showResult.setAttribute("class", "showResultBox")
    showResult.textContent = result;
    showResultDiv.removeChild(showResult);
    showResultDiv.appendChild(showResult);
}

//Initialize all the DOM (including empty values)
showAllDom();

//When button is pressed, start playUpdateShow() if win/loss is not 5, else gameover()
rockBtn.onclick = () => {
    playerPick = "rock";
    if (numWin < 5 && numLoss < 5) {
        playUpdateShow();
    } else {
        gameOver();
    }               
}

paperBtn.onclick = () => {
    playerPick = "paper";           
    if (numWin < 5 && numLoss < 5) {
        playUpdateShow();
    } else {
        gameOver();
    }
}

scissorsBtn.onclick = () => {
    playerPick = "scissors";        
    if (numWin < 5 && numLoss < 5) {
        playUpdateShow();
    } else {
        gameOver();
    }
}

resetButton.onclick = () => {
    numWin = 0;
    numLoss = 0;
    playerPick = "";
    computerPick = "";
    result = "Win 5 games against computer!";
    showAllDom();
    playerPickBox.removeChild(displayPlayerPick);
    compPickBox.removeChild(displayCompPick);
}
