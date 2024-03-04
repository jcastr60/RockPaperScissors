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
    if (playerSelection == 'rock' && ComputerSelection ==  "scissor") {
        return "You Won! Rock beats Scissor";
        // playerWins++;
        
    } else if (playerSelection == 'paper' && ComputerSelection ==  "rock"){
        return "You Won! Paper beats Rock";
        // playerWins++;
    }  else if (playerSelection == 'scissor' && ComputerSelection ==  "paper"){
        return "You Won! Scissor beats Rock";
        // playerWins++;
    } else {
        let beats = playerSelection.concat(" beats ", ComputerSelection);
        let lostMessage = "You Lost! "
        // computerWins++;
        return lostMessage.concat(beats);
    }
}

function playGame(){
    // // Count number of wins
    // let computerWins = 0;
    // let playerWins = 0;
    // // loop to keep playing game until one openet has 5 wins
    // while ((playerWins < 5) || (computerWins < 5)) {
    //     if (name != "rock" || name != "paper" || name != "scissor"){
    //         name = prompt("Rock, Paper, or Scissor?");
    //     } else {
    //         playerWins = name;
    //         playRound(getComputerChoice(), playerSelection, computerWins, playerWins);
    //     }
    // }
    let name = prompt("Rock, Paper, or Scissor?");
    console.log(playRound(getComputerChoice(), name));
    name = prompt("Rock, Paper, or Scissor?");
    console.log(playRound(getComputerChoice(),name));
    name = prompt("Rock, Paper, or Scissor?");
    console.log(playRound(getComputerChoice(), name));
    name = prompt("Rock, Paper, or Scissor?");
    console.log(playRound(getComputerChoice(),name));
    name = prompt("Rock, Paper, or Scissor?");
    console.log(playRound(getComputerChoice(), name));
}

// console.log(getComputerChoice());
// console.log(playRound("rock", "paper"));
console.log(playGame());