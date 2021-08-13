const computerPlay = function(){
    const options = ['Rock', 'Paper', 'Scissors'];
    return options[Math.floor(Math.random()*3)]
}

const playRound = function(playerSelection, computerSelection){
    const playerFormatted = playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1).toLowerCase();
    computerSelection = computerPlay();
    switch(playerFormatted){
        case computerSelection:
           return "It's a tie!";
        case 'Rock':
            if (computerSelection === 'Scissors'){
                return "Rock beats Scissors, point human";
            };
            if (computerSelection === 'Paper'){
                return "Paper beats Rock, point computer";
            };
        case 'Paper':
            if (computerSelection === 'Scissors'){
                return "Scissors beats Paper, point computer";
            };
            if (computerSelection === 'Rock'){
                return "Paper beats Rock, point human";
            };
        case 'Scissors':
            if (computerSelection === 'Paper'){
                return "Scissors beats Paper, point human";
            };
            if (computerSelection === 'Rock'){
                return "Rock beats Scissors, point computer";
            };
        default:
            return 'Something went wrong'
   }
}