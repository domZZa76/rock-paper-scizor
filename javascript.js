let computerChoice;
let humanChoice;

// SCORES

let humacScore = 0;
let computerScore = 0;


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

// PLAY ROUND

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'scizors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scizors' && computerChoice === 'paper'
    ) {
        humacScore++
        console.log('Computer chose ' + computerChoice);
        console.log('You Win!')
    } else if (humanChoice === 'rock' && computerChoice === 'paper' ||
        humanChoice === 'paper' && computerChoice === 'scizors' ||
        humanChoice === 'scizors' && computerChoice === 'rock') {
        computerScore++
        console.log('Computer chose ' + computerChoice);

        console.log('You Lose!')
    } else {
        console.log('Computer chose ' + computerChoice);
        console.log('DRAW!')
    }
}

//PLAY GAME

function playGame() {
    while(humacScore < 3 && computerScore < 3) {
    //for (let i = 0; i < 5; i++) {
        getHumanChoice();
        getComputorChoice();

        playRound(humanChoice, computerChoice)
        console.log('You = ' + humacScore);
        console.log('Computer = ' + computerScore)

        if (computerScore === 3) {
            console.log('YYYYOOOOUUUUUUUU SUUUUUCK!')
        } else if (humacScore === 3) {
            console.log('YYYYOOOOUUUUUUUU WWIIIIIN!')
        }
    }
}

playGame()

// getHumanChoice()
//console.log(humanChoice)

// getComputorChoice()
//console.log(computerChoice)




