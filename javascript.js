// get user name
const params = new URL(location.href).searchParams;
const playerName = params.get('player-name')
console.log(playerName);

const gameTitle = document.querySelector(".welcome-message")
gameTitle.textContent = `${playerName}, welcome to the game!`

// return "Rock", "Paper", or "Scissor"
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    return choice == 0 ? 'Rock' : choice == 1 ? 'Paper' : 'Scissor'
}

// return the result string -> ex: "You Lose! Paper beats Rock"
function playRound(playSelection, computerSelection) {
    if (playerScore < 5 && computerScore < 5) {
        let player = playSelection.toLowerCase(),
            computer = computerSelection.toLowerCase()
        let result = 'result is not defined'
        const winSets = new Set(['scissor paper', 'rock scissor', 'paper rock'])
        if (player === computer) {
            result = `Tie! Both you and the computer chose ${player}`
        } else if (winSets.has(player + ' ' + computer)) {
            result = `You win! ${player} beats ${computer}`
            playerScore += 1
        } else {
            result = `You lose! ${computer} beats ${player}`
            computerScore += 1
        }
        // showMatchResult
        showMatchResult(result)
        updateScore()
        if (playerScore === 5 || computerScore === 5) {
            let finalResultString = '';
            if (playerScore === 5) {
                finalResultString = 'won'
                playWinSound()
            } else {
                finalResultString = 'lost'
                playLoseSound()
            }
            showFinalResult(`You ${finalResultString} the game!`)
            showRestart()
        }
    }
}

function showMatchResult(resultString) {
    const result = document.querySelector('.match-result')
    result.textContent = resultString;
}

let playerScore = 0
let computerScore = 0
const btns = document.querySelectorAll('body button');

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const playerChoice = btn.textContent
        const computerChoice = getComputerChoice()
        playRound(playerChoice, computerChoice);
        playClickSound()
    });
})

function updateScore() {
    const scoreBoard = document.querySelector(".score-board");
    scoreBoard.textContent = `Your score: ${playerScore}| Computer score: ${computerScore}`
}

function showFinalResult(finalResultString) {
    const finalResult = document.querySelector('.final-result')
    finalResult.textContent = finalResultString
}

function showRestart() {
    const restartConatiner = document.querySelector('.restartContainer')
    restartConatiner.style.display = "block";
}

function playClickSound() {
    const clickSound = document.querySelector("#clickSound")
    clickSound.play()
}


function playWinSound() {
    const winSound = document.querySelector("#winSound")
    winSound.play()
}

function playLoseSound() {
    const loseSound = document.querySelector("#loseSound")
    loseSound.play()
}
