// return "Rock", "Paper", or "Scissor"
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    return choice == 0 ? 'Rock' : choice == 1 ? 'Paper' : 'Scissor'
}

// return the result string -> ex: "You Lose! Paper beats Rock"
function playRound(round, playSelection, computerSelection) {
    let player = playSelection.toLowerCase(),
        computer = computerSelection.toLowerCase()
    let result = 'result is not defined'
    const winSets = new Set(['scissor paper', 'rock scissor', 'paper rock'])
    if (player === computer) {
        result = `Tie for round ${round}! Both you and the computer chose ${player}`
    } else if (winSets.has(player + ' ' + computer)) {
        result = `You win round ${round}! ${player} beats ${computer}`
    } else {
        result = `You lose round ${round}! ${computer} beats ${player}`
    }
    return result
}

// simulate the game, either player or computer score 5 points
function game() {
    // play 5 rounds of game
    const validChoices = new Set(['rock', 'scissor', 'paper'])
    let scoreYou = 0,
        scoreComputer = 0
    let round = 1
    let progress = ''
    while (scoreYou < 5 && scoreComputer < 5) {
        let you
        while (true) {
            you = prompt('Please enter your choice: ').toLowerCase()
            if (validChoices.has(you)) break
            alert('Please provide a valid input!')
        }
        // record score
        let roundResult = '\n' + playRound(round, you, getComputerChoice())
        if (roundResult.includes('win')) {
            scoreYou++
        } else if (roundResult.includes('lose')) {
            scoreComputer++
        }
        // report game progress
        progress += `\nRound ${round} -> Your score: ${scoreYou}, Computer score: ${scoreComputer}`
        console.log(roundResult)
        round++
        // update html text (does not work)!
        document.getElementById('result').innerHTML = progress
    }
    // report game result
    scoreYou == 5
        ? console.log('You the won!')
        : console.log('You lost the game!')
}

// play the game
game()
