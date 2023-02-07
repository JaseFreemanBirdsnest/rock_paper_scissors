const choiceButtons = document.querySelectorAll('[data-choice]')
const playerScore = document.querySelector('[data-playerScore]')
const computerScore =  document.querySelector('[data-computerScore]')
const resetScores = document.querySelector('[data-reset]')
let numberOfClicks = 0

const CHOICEBEATS = [
    {
        throw: 'rock',
        beats: 'scissors'
    },
    {
        throw: 'paper',
        beats: 'rock'
    },
    {
        throw: 'scissors',
        beats: 'paper'
    }
]


choiceButtons.forEach(choiceButton => {
    choiceButton.addEventListener('click', e => {
        const playerSelection = choiceButton.dataset.choice
        const playerChoice = CHOICEBEATS.find(choice => choice.throw === playerSelection)
        numberOfClicks = numberOfClicks +1
        getSelection(playerChoice)
    })
})

resetScores.addEventListener('click', e => {
    resetScoresToZero() 
})

function getSelection(playerChoice) {
    const computerChoice = randomChoice()
    const playerWinsRound = isroundWinner(playerChoice, computerChoice)
    const compWinsRound = isroundWinner(computerChoice, playerChoice)

    if (playerWinsRound) showScores(playerScore)
    if (compWinsRound) showScores(computerScore)

    

    console.log(playerChoice)
    console.log(computerChoice)
    console.log(playerWinsRound)
    console.log(compWinsRound)
    console.log(numberOfClicks)
    console.log(playerScore.innerText)
    console.log(computerScore.innerText)

    if (numberOfClicks === 5) whoWins()
}

function isroundWinner(playerChoice, computerThrow) {
    return playerChoice.beats === computerThrow.throw
}

function randomChoice() {
    const randIndex = Math.floor(Math.random() * CHOICEBEATS.length)
    return CHOICEBEATS[randIndex]
}

function showScores(score){
    score.innerText = parseInt(score.innerText) + 1

}

function whoWins(){
    if (parseInt(playerScore.innerText) === parseInt(computerScore.innerText)){
        alert("It's a Tie")
    }
    
    if (parseInt(playerScore.innerText) > parseInt(computerScore.innerText)){
            alert("You Win!, Congratulations")
    }
    else {
        alert("Computer Wins, Try Again")
    }

    resetScoresToZero()
}

function resetScoresToZero(){
    playerScore.innerText = 0
    computerScore.innerText = 0
}


//reference https://www.youtube.com/watch?v=1yS-JV4fWqY