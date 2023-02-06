const choiceButtons = document.querySelectorAll('[data-choice]')
const playerScore = document.querySelector('[data-playerScore')
const computerScore =  document.querySelector('[data-computerScore')


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
        getSelection(playerChoice)
    })
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

function playMatch(){

}


//reference https://www.youtube.com/watch?v=1yS-JV4fWqY