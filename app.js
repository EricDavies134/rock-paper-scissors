const computerPlay = function(){
    const options = ['Rock', 'Paper', 'Scissors'];
    return options[Math.floor(Math.random()*3)]
}

const playRound = function(playerSelection, computerSelection){
    const playerFormatted = playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1).toLowerCase();
    computerSelection = computerPlay();
    switch(playerFormatted){
        case computerSelection:
           console.log("It's a tie!");
           return 0;
        case 'Rock':
            if (computerSelection === 'Scissors'){
                console.log("Rock beats Scissors, point human");
                return 1;
            };
            if (computerSelection === 'Paper'){
                console.log("Paper beats Rock, point computer");
                return -1;
            };
        case 'Paper':
            if (computerSelection === 'Scissors'){
                console.log("Scissors beats Paper, point computer");
                return -1;
            };
            if (computerSelection === 'Rock'){
                console.log("Paper beats Rock, point human");
                return 1;
            };
        case 'Scissors':
            if (computerSelection === 'Paper'){
                console.log("Scissors beats Paper, point human");
                return 1;
            };
            if (computerSelection === 'Rock'){
                console.log("Rock beats Scissors, point computer");
                return -1;
            };
        default:
            console.log('Something went wrong')
   }
}

const game = function(){
    let score = 0;
    for(let i = 0; i < 5; i++){
        score += playRound(prompt('Pick your weapon: Rock, Paper, or Scissors'));
    }
    return score === 0 ? "It's a tie...": score > 0 ? "Human Winner!" : "Computer Winner!"
}

console.log(game())