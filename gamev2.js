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
        const choice = CHOICEBEATS.find(choice => choice.throw === playerSelection)
        getPlayerSelection(choice)
    })
})

function getPlayerSelection(choice) {
    console.log(choice)
}