<script>
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

            function playRound(playerSelection, computerSelection) {
                let result = (playerSelection === computerSelection) ? "It's a Draw!" : 
                    (playerSelection === "rock" && computerSelection === "paper") ? "You Lose! Paper beats Rock." :
                    (playerSelection === "rock" && computerSelection === "scissors") ? "You Win! Rock beats Scissors." :

                    (playerSelection === "paper" && computerSelection === "scissors") ? "You Lose! Scissors beats Paper." :
                    (playerSelection === "paper" && computerSelection === "rock") ? "You Win! Paper beats Rock." :

                    (playerSelection === "scissors" && computerSelection === "rock") ? "You Lose! Rock beats Scissors." :
                    (playerSelection === "scissors" && computerSelection === "paper") ? "You Win! Scissors beats Paper.":

                    "Input not recognized!";
                return result;
            }
        
            function game() {
                let myPick;
                let win = 0;
                let lose = 0;
                let draw = 0;

                for (i = 1; i <=5; i++) {
                    while (true) {
                        myPick = prompt("Rock, Paper or Scissors?").toLowerCase();
                        if (myPick === "rock" || myPick === "paper" || myPick ==="scissors") {
                            break;
                        } else {
                            console.log("Input not recognized!");
                        }
                    }

                    let result = playRound(myPick, computerPlay());
                    if (result.includes("Win") ) {
                        win = win + 1;
                    } else if (result.includes("Lose")) {
                        lose = lose + 1;
                    } else {
                        draw = draw + 1;
                    }

                    console.log(result);
                    console.log("Win: " + win + " Lose: " + lose + " Draw: " + draw);
                    console.log("");
                }    
            }            
            
        </script>