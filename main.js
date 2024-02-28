// Get the computers choice for Rock Paper Scissors
function getComputerChoice(){
    // have options
    let options = ["rock", "paper","scissor"];
    
    // randomize the choice based on options list
    let choice = Math.random() * (4 - 1) + 1;
    // return that option
    return options[(Math.floor(choice)) - 1];
}

function playRound(ComputerSelection, playerSelection){
    if (playerSelection == "rock" && ComputerSelection ==  "scissor") {
        return "You Won! Rock beats Scissor";
        
    } else if (playerSelection == "paper" && ComputerSelection ==  "rock"){
        return "You Won! Paper beats Rock";
    }  else if (playerSelection == "scissor" && ComputerSelection ==  "paper"){
        return "You Won! Scissor beats Rock";
    } else {
        let beats = playerSelection.concat(" beats ", ComputerSelection);
        let lostMessage = "You Lost! "
        return lostMessage.concat(beats);
    }
}

// function playGame(){
//     // Count number of wins
//     let computerWins = 0;
//     let player


//     // loop to keep playing game until one openet has 5 wins



// }

console.log(getComputerChoice());
console.log(playRound("rock", "paper"));