game();

function throwHand(choices) {
    let userPlay = prompt('Rock, Paper, Scissors?', '');
        if (userPlay === null) {
            return throwHand(choices);
        }
    let playerSelection = userPlay.toLowerCase(); 
    //checks to see whether playerSelection contains something from choices Array, returns true or false and stores in validOption
    let validOption = (choices.includes(playerSelection)) ? true : false;
        //if not validOption, throwHand again
        if (validOption === false) {
            return throwHand(choices);
        } else {
            return playerSelection;
        }
}

function playRound(playerSelection,computerSelection)
{ 
    
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
        return 1;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
        return 1;
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
        return 1;
    }   else if (playerSelection === computerSelection){
        console.log(`No one wins! You played ${playerSelection} and the computer played ${computerSelection}! It is a draw!`);
        return 0;
    } else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
        return -1;
    };
}

function game()
{   
    const choices = ['rock', 'paper', 'scissors'];
    let playerWin = 0;
    let computerWin = 0;
    for (let i = 0; i < 5; i++){

    let computerPlay = Math.floor(Math.random() * choices.length);
    let computerSelection = (choices[computerPlay]);

    let playerSelection = throwHand(choices);

    let result = playRound(playerSelection,computerSelection);
        if (result > 0) {
            playerWin++;
        } else if (result <0) {
            computerWin++;
        }
    }
    console.log(`Score: Player ${playerWin} Computer ${computerWin}`);
}