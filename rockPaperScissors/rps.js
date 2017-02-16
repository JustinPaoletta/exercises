var computerThrow = function(playerChoice) {
    var rand = Math.floor((Math.random() * 3) + 1);
    if(playerChoice.toUpperCase() === 'ROCK') {
        if(rand == 1) {
            return "tie"
        } else if( rand == 2) {
            return "paper. You lose"
        } else {
            return "Scissors. You Win!"
        }
    }

    if(playerChoice.toUpperCase() === "PAPER") {
        if(rand == 1) {
            return "Rock. You Win!"
        } else if( rand == 2) {
            return "tie"
        } else {
            return "Scissors. You lose"
        }
    }

    if(playerChoice.toUpperCase() === "SCISSORS") {
        if(rand == 1) {
            return "Rock. You lose."
        } else if( rand == 2) {
            return "paper. You win!"
        } else {
            return "tie"
        }
    }
}
