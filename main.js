// Get the computers choice for Rock Paper Scissors
function getComputerChoice(){
    // have options
    let options = ['rock', 'paper','scissor'];
    
    // randomize the choice based on options list
    let choice = Math.random() * (4 - 1) + 1;
    // return that option
    return options[(Math.floor(choice)) - 1];
}

function playRound(ComputerSelection, playerSelection){
    if (playerSelection === ComputerSelection) {
        console.log(`You both picked ${playerSelection}! it's a tie!`);
        return -1;
    }
    if (playerSelection == 'rock' && ComputerSelection ==  'scissor') {
        console.log("You Won! Rock beats Scissor.");        
    } else if (playerSelection == 'paper' && ComputerSelection ==  'rock'){
        console.log("You Won! Paper beats Rock.");
        // playerWins++;
    }  else if (playerSelection == 'scissor' && ComputerSelection ==  'paper'){
        console.log("You Won! Scissor beats Rock.");
        // playerWins++;
    } else {
        let beats = playerSelection.concat(" beats ", ComputerSelection);
        let lostMessage = "You Lost! "
        // computerWins++;
        console.log(lostMessage.concat(beats));
        return 1;
    }
    return 0;
}

function playGame(){
    // Count number of wins
    let computerWins = 0;
    let playerWins = 0;
    console.log("Let's play Rock Paper Scissors!")
    // loop to keep playing game until one openet has 5 wins
    while ((playerWins != 6) && (computerWins != 6)) {
        result = playRound(getComputerChoice(),prompt("Please enter choice:").toLowerCase()); 
        
        if (result ==  0) {
            playerWins ++;
        } else if (result == 1){
            computerWins ++;
        }
        
    }
    if (playerWins > computerWins) {
        console.log(`You Won Congrats! Computer had ${computerWins} wins.`)
    
    }
    else {
        console.log(`You lost wit a total of ${playerWins} wins`)
    }
}
let result;
do {
    playGame();
    do {
        result = prompt("Play again? Y for yes, N for no").toUpperCase();     
    } while (result !=="Y" && result !== "N")
    
} while (result === "Y")

console.log("Goodbye!")