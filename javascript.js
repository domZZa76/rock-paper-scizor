let computerChoice = ''
let humanChoice = ''

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

//HUMAN CHOICE

function getHumanChoice() {
    humanChoice = prompt('Rock, Paper or Scizors').toLowerCase()
}

// SCORES

let humacScore = 0;
let computerScore = 0

// SINGLE ROUND

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'scizors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scizors' && computerChoice === 'paper'
    ) {
        humacScore++
        console.log('You Win!')
    } else if (humanChoice === 'rock' && computerChoice === 'paper' ||
        humanChoice === 'paper' && computerChoice === 'scizors' ||
        humanChoice === 'scizors' && computerChoice === 'rock') {
        computerScore++
        console.log('You Lose!')
    } else {
        console.log('DRAW!')
    }
}

getHumanChoice()
console.log(humanChoice)

getComputorChoice()
console.log(computerChoice)

playRound(humanChoice, computerChoice)
