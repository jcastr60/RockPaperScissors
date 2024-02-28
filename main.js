// Get the computers choice for Rock Paper Scissors
function getComputerChoice(){
    // have options
    let options = ['rock', 'paper','scissor'];
    
    // randomize the choice based on options list
    let choice = Math.random() * (4 - 1) + 1;
    // return that option
    return options[(Math.floor(choice)) - 1];
}

console.log(getComputerChoice());