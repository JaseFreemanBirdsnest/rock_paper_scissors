const choiceButtons = document.querySelectorAll('[data-choice]')

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
    console.log(playerChoice)
    console.log(computerChoice)
    console.log(playerWinsRound)
    console.log(compWinsRound)
}

function isroundWinner(playerChoice, computerThrow) {
    return playerChoice.beats === computerThrow.name
}

function randomChoice() {
    const randIndex = Math.floor(Math.random() * CHOICEBEATS.length)
    return CHOICEBEATS[randIndex]
}

function playMatch(){

}


//reference https://www.youtube.com/watch?v=1yS-JV4fWqY