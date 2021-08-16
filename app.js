const computerPlay = function(){
    const options = ['Rock', 'Paper', 'Scissors'];
    return options[Math.floor(Math.random()*3)]
}

const mainContainer = document.querySelector('.container')
const winnerText = document.querySelector('p')
const messageContainer = document.querySelector('.winner')

const playRound = function(e){
    const playerSelection = e.target.closest('button');
    if(!playerSelection) return;
    if(messageContainer.classList.contains('hidden')) messageContainer.classList.remove('hidden')
    computerSelection = computerPlay();
    switch(playerSelection.getAttribute('id')){
        case computerSelection:
           winnerText.innerText = "It's a tie!";
           break;
        case 'Rock':
            if (computerSelection === 'Scissors'){
                winnerText.innerText = "Rock beats Scissors, point human";
                break;
            };
            if (computerSelection === 'Paper'){
                winnerText.innerText = "Paper beats Rock, point computer";
                break;
            };
        case 'Paper':
            if (computerSelection === 'Scissors'){
                winnerText.innerText = "Scissors beats Paper, point computer";
                break;
            };
            if (computerSelection === 'Rock'){
                winnerText.innerText = "Paper beats Rock, point human";
                break;
            };
        case 'Scissors':
            if (computerSelection === 'Paper'){
                winnerText.innerText = "Scissors beats Paper, point human";
                break;
            };
            if (computerSelection === 'Rock'){
                winnerText.innerText = "Rock beats Scissors, point computer";
                break;
            };
        default:
            break;
   }

}

const game = function(){
    let score = 0;
    for(let i = 0; i < 5; i++){
        score += playRound(prompt('Pick your weapon: Rock, Paper, or Scissors'));
    }
    return score === 0 ? "It's a tie...": score > 0 ? "Human Winner!" : "Computer Winner!"
}

const btnContainer = document.querySelector('.play-area');

btnContainer.addEventListener('click', playRound);

