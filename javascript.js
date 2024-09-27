const body = document.querySelector('body')

let computerChoice;
let humanChoice;

// SCORES

let humanScore = document.querySelector('#human-score');
let computerScore = document.querySelector('#computer-score');

//COMPUTER CHOICE

function getComputorChoice() {
    let randomNumber = Math.ceil(Math.random() * 3)
    if (randomNumber === 1) {
        computerChoice = 'rock'
    } else if (randomNumber === 2) {
        computerChoice = 'paper'
    } else[
        computerChoice = 'scizors'
    ]
}

// PLAY ROUND

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'scizors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scizors' && computerChoice === 'paper'
    ) {
        humanScore.textContent++
        console.log('Computer chose ' + computerChoice);
        console.log('You Win!')
    } else if (humanChoice === 'rock' && computerChoice === 'paper' ||
        humanChoice === 'paper' && computerChoice === 'scizors' ||
        humanChoice === 'scizors' && computerChoice === 'rock') {
        computerScore.textContent++
        console.log('Computer chose ' + computerChoice);
        console.log('You Lose!')
    } else {
        console.log('Computer chose ' + computerChoice);
        console.log('DRAW!')
    }
}

//HUMAN CHOICE AND PLAYING THE GAME

let winner
let btns = document.querySelectorAll('button');
btns.forEach((button) => {
    button.addEventListener(('click'), () => {
        if (humanScore.textContent < 3 && computerScore.textContent < 3) {
            getComputorChoice()
            humanChoice = button.value;
            playRound(humanChoice, computerChoice)
            body.appendChild(humanScore)
            body.appendChild(computerScore)
        }
        if (humanScore.textContent == 3) {
            winner = document.createElement('h1');
            winner.textContent = 'YOU WIN';
            body.appendChild(winner)
        } else if (computerScore.textContent == 3) {
            winner = document.createElement('h1');
            winner.textContent = 'YOU LOSE';
            body.appendChild(winner)
        }
        if (humanScore.textContent == 3 || computerScore.textContent == 3) {
            humanScore.textContent = 0;
            computerScore.textContent = 0;
        }
    
    })
})


