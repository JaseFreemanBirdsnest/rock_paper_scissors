
let choices = ["Rock", "Paper", "Scissors"]; 
const btn = document.querySelectorAll('button')

const results = [];

btn.addEventListener("click", game());

function getComputerChoice(choices){

    return choices.at(Math.floor(Math.random() * choices.length)).toLowerCase();
}


function getPlayerChoice(choices){
    
    btn.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.id !== "Rock" || button.id !== "Paper" || button.id !== "Scissors"){
                return
            } 
            else {
                console.log(button.id);           
                return button.id;
            };
        });
    });

    // return prompt("What will you throw " + choices.at(0)+ ", " + choices.at(1) + ", or " +choices.at(2) + "?").toLowerCase(); //prompts the user for a selection from the choices array, and returns their choice as lower case.

}

function playRound(playerThrow, computerThrow){

    var computerThrow = getComputerChoice(choices);

    var playerThrow = getPlayerChoice(choices);

        let winAlert = ("You Win! You threw " +  playerThrow + " which beats the computers throw of " + computerThrow);
        let loseAlert = ("You Lose! The computer threw " + computerThrow + " which beats your throw of " + playerThrow);

        if (computerThrow == playerThrow){
            results.push("Tie"); 
            return alert("Its a Tie"); 
        }


        else if(computerThrow == "rock" && playerThrow == "scissors"){
            
            results.push("Computer");
            return alert(loseAlert);
        }
            
        else if( playerThrow == "rock" && computerThrow == "scissors"){
            
            results.push("Player");
            return alert(winAlert);
        }
                
        else if(computerThrow == "scissors" && playerThrow == "paper"){
            
            results.push("Computer");
            return alert(loseAlert);
        }
                
        else if( playerThrow == "scissors" && computerThrow == "paper"){
            
            results.push("Player");
            return alert(winAlert);
        }
                
        else if(computerThrow == "paper" && playerThrow == "rock"){
            
            results.push("Computer");
            return alert(loseAlert);
        }
                
        else if( playerThrow == "paper" && computerThrow == "rock"){
            
            results.push("Player");
            return alert(winAlert);
        }
}

function game(playerThrow,computerThrow){    

    var computerThrow;
    var playerThrow; 

        for(let rounds = 0; rounds < 5; rounds++){
            playRound(playerThrow,computerThrow);
            actRounds = rounds + 1; 
            console.log("round # " + actRounds);
            console.log(results);               
        }
        
        //Still not 100% sure I follow how the below ternary function work, I found the basis for this on StackOverflow, and adapted it to suit my needs.
        //The combination of the array.reduce method, with the ternary statement is quite confusing. 
        //regardless
        let scores = results.reduce(function (count, currentValue){
            return (count[currentValue] ? ++count[currentValue] : (count[currentValue]=1),count);
        },
        );
        
        let finalPlayerScore = scores["Player"];
        let finalComputerScore = scores["Computer"];

        if (finalPlayerScore > finalComputerScore){
            return alert("Congratulations you won the match!");
        }
        else {
            return alert("I'm sorry you lost");
        }

        console.log(scores);
        console.log(finalPlayerScore);
        console.log(finalComputerScore);
}


console.log(choices);
console.log(getComputerChoice(choices));
console.log(getPlayerChoice(choices));


