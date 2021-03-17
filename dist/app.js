// Create variables for number of win/lose, for the picks of player/computer and for displaying text result
/////////////////////////
let winCount = 0;
let loseCount = 0;
let playerPick;
let computerPick;
let resultText;

// Target UI Elements for displaying the number of win/lose, the picks of player/computer, the result of the game, the restart button, the rock-paper-scissors items
/////////////////////////
const winCountUI = document.querySelector('.winCount');
const loseCountUI = document.querySelector('.loseCount');
const playerItemUI = document.querySelector('.player-item');
const computerItemUI = document.querySelector('.computer-item');
const resultTextUI = document.querySelector('.result-text');
const restartBtnUI = document.querySelector('.restart-btn');
const rockBtnUI = document.querySelector('.rock');
const paperBtnUI = document.querySelector('.paper');
const scissorsBtnUI = document.querySelector('.scissors');


// Create restart button
/////////////////////
restartBtnUI.addEventListener('click', e => {
   window.location.reload();
   e.preventDefault();
});


// Once player picks item, change its bg-color
//////////////////
rockBtnUI.addEventListener('click', (e) => {
   playerPick = 'rock';
   changeBackgroundColor(playerPick);
});
paperBtnUI.addEventListener('click', (e) => {
   playerPick = 'paper';
   changeBackgroundColor(playerPick);
});
scissorsBtnUI.addEventListener('click', (e) => {
   playerPick = 'scissors';
   changeBackgroundColor(playerPick);
});


// Change the bg-color of selected item, then generate item for computer
////////////////////
function changeBackgroundColor(item) {
   // Remove existing background color to previously selected item
   const lastPick = document.querySelector('#last-picked');
   if (lastPick !== null) {
      lastPick.removeAttribute('id');
   }
   // Add background-color to selected item
   if (item === 'rock') {
      rockBtnUI.id = 'last-picked';
   } else if (item === 'paper') {
      paperBtnUI.id = 'last-picked';
   } else {
      scissorsBtnUI.id = 'last-picked';
   }

   generateComputerPick();
}


// Generate Random item for computer, then compare the items
//////////////////
function generateComputerPick() {
   let num = Math.ceil(Math.random() * 3);
   if (num === 1) {
      computerPick = "rock";
   } else if (num === 2) {
      computerPick = "paper";
   } else {
      computerPick = "scissors";
   }

   playRound(playerPick, computerPick);
}


// Compare the items, then display the result
////////////////////
function playRound(playerItem, computerItem) {
   // Updates the text-result which will be displayed
   resultText = (playerItem === computerItem) ? "Draw!" :
      (playerItem === "rock" && computerItem === "paper") ? "You Lose!" :
         (playerItem === "rock" && computerItem === "scissors") ? "You Win!" :
            (playerItem === "paper" && computerItem === "scissors") ? "You Lose!" :
               (playerItem === "paper" && computerItem === "rock") ? "You Win!" :
                  (playerItem === "scissors" && computerItem === "rock") ? "You Lose!" :
                     "You Win!";

   // Updates win/lose score
   if (resultText.includes("Win")) {
      winCount++;
   } else if (resultText.includes("Lose")) {
      loseCount++;
   }

   displayResult();
}


// Display result message in UI, then stop game if win/lose is 5
/////////////////////
function displayResult() {
   winCountUI.textContent = winCount;
   loseCountUI.textContent = loseCount;
   resultTextUI.textContent = resultText;

   if (playerPick === 'rock') {
      playerItemUI.innerHTML = '<i class="fas fa-hand-rock fa-8x"></i>';
   } else if (playerPick === 'paper') {
      playerItemUI.innerHTML = '<i class="fas fa-hand-paper fa-8x"></i>';
   } else {
      playerItemUI.innerHTML = '<i class="fas fa-hand-scissors fa-8x"></i>';
   }

   if (computerPick === 'rock') {
      computerItemUI.innerHTML = '<i class="fas fa-hand-rock fa-8x"></i>';
   } else if (computerPick === 'paper') {
      computerItemUI.innerHTML = '<i class="fas fa-hand-paper fa-8x"></i>';
   } else {
      computerItemUI.innerHTML = '<i class="fas fa-hand-scissors fa-8x"></i>';
   }


   if (winCount === 5 || loseCount === 5) {
      gameOver();
   }
}

// Once win or lose get to 5, disable inputs
function gameOver() {
   if (winCount === 5) {
      resultText = 'Game Over! You Won!';
      resultTextUI.style.color = 'green';
   } else {
      resultText = 'Game Over! You Lost!';
      resultTextUI.style.color = 'red';
   }

   resultTextUI.style.fontWeight = 'bold';
   resultTextUI.textContent = resultText;

   rockBtnUI.disabled = true;
   paperBtnUI.disabled = true;
   scissorsBtnUI.disabled = true;
}