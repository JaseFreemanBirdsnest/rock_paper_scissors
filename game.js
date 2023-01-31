
let choices = ["Rock", "Paper", "Scissors"]; // The array of choices.
const btn = document.querySelectorAll('button')

const results = [];

//let getComputerChoice = Math.floor(Math.random() * choices.length); // Selects a random array position

function getComputerChoice(choices){

    return choices.at(Math.floor(Math.random() * choices.length)).toLowerCase(); // Gets the string associated with the index position selected above
}

//2. Get the players throw by prompting for either Rock, Paper, Scissors.
    // This will need to remove case


function getPlayerChoice(choices){
    
    btn.forEach((button) => {
        button.addEventListener('click', () => {
            return button.id.toLowerCase();
        });
    });

    // return prompt("What will you throw " + choices.at(0)+ ", " + choices.at(1) + ", or " +choices.at(2) + "?").toLowerCase(); //prompts the user for a selection from the choices array, and returns their choice as lower case.

}




//3. Play a round using computer choice and player choice
function playRound(playerThrow, computerThrow){



//get computer choice and set for this round
var computerThrow = getComputerChoice(choices);
//get players choice and set for this round
var playerThrow = getPlayerChoice(choices);




    //  win / lose condition alerts that only needs to be written once
    let winAlert = ("You Win! You threw " +  playerThrow + " which beats the computers throw of " + computerThrow);
    let loseAlert = ("You Lose! The computer threw " + computerThrow + " which beats your throw of " + playerThrow);

    //Tie Condition i.e Computer and Player both choose the same
    if (computerThrow == playerThrow){
        results.push("Tie"); //add result to results array.
        return alert("Its a Tie"); //alert the player of the results of this round.
    }
    //Rock breaks Scissors
    //if getComputerChoice == "rock" && getPlayerChoice == "scissors"

    else if(computerThrow == "rock" && playerThrow == "scissors"){
        
        results.push("Computer");
        return alert(loseAlert);
    }
    //if getPlayerChoice == "rock"&& getComputerChoice == "scissors"
        
    else if( playerThrow == "rock" && computerThrow == "scissors"){
        
        results.push("Player");
        return alert(winAlert);
    }
    //Scissors cut Paper
        //if getComputerChoice == "scissors" && getPlayerChoice == "paper"
            
    else if(computerThrow == "scissors" && playerThrow == "paper"){
        
        results.push("Computer");
        return alert(loseAlert);
    }
        //if getPlayerChoice == "scissors"&& getComputerChoice == "paper"
            
    else if( playerThrow == "scissors" && computerThrow == "paper"){
        
        results.push("Player");
        return alert(winAlert);
    }
    //Paper wraps Rock
        //if getComputerChoice == "paper" && getPlayerChoice == "rock"
            
    else if(computerThrow == "paper" && playerThrow == "rock"){
        
        results.push("Computer");
        return alert(loseAlert);
    }
        //if getPlayerChoice == "paper"&& getComputerChoice == "rock"
            
    else if( playerThrow == "paper" && computerThrow == "rock"){
        
        results.push("Player");
        return alert(winAlert);
    }
}

function game(playerThrow,computerThrow){      
//create computer choice variable
var computerThrow;
//create players choice variable
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


game();