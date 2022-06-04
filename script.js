const choices = ['rock', 'paper', 'scissors'];

let computerPlay = Math.floor(Math.random() * choices.length);
let computerSelection = (choices[computerPlay]);


let userPlay = prompt('Rock, Paper, Scissors?', ''); 
let playerSelection = userPlay.toLowerCase();
let validOption = (choices.includes(playerSelection)) ? true : false; //checks to see whether userPlay contains something from choices Array, returns true or false and stores in validOption

/* playRound returns true if the player wins; else it returns false
    does not deal with "draws" - if both are the same
    need to add messages
*/
let win = 'false';
let draw = 'false';
game();

function game()
{
   function playRound()
    { 
        
        if (playerSelection === 'rock' && computerSelection === 'scissors') {
            win = 'true';
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            win = 'true';
        } else if (playerSelection === 'paper' && computerSelection === 'rock'){
            win = 'true';
        }   else if (playerSelection === computerSelection){
            draw = 'true';
        } else {
            win = 'false';
        };
    }
    playRound();

    if (win === 'true') {
        console.log(`You win! ${playerSelection} beats ${choices[computerPlay]}!`)
    } else if (draw === 'true') {
        console.log(`No one wins! You played ${playerSelection} and the computer played ${choices[computerPlay]}! It is a draw!`)
    } else if (win === 'false') {
        console.log(`You lose! ${choices[computerPlay]} beats ${playerSelection}!`)
    }
}

console.log(computerSelection); 
console.log(choices.includes(userPlay));
console.log(validOption);
console.log(playerSelection);
console.log('player win =' + win);
    /* if userPlay is null, call userPlay

        if validOption = false, call userPlay

        else playRound
    */



/*  computerPlay
        randomly select from rock, paper, scissors
        store in computerSelection

    console.log(computerSelection)

    userPlay prompts for input either rock, paper, scissors // should be case insensitive
        store in playerSelection 

    if playerSelection != rock, paper, scissors
        return error 

    else

    playRound
        flag player win if
            playerSelection = rock && computerSelection = scissors 
            OR
            playerSelection = paper && computerSelection = rock
            OR 
            playerSelection = scissors && computerSelection = paper
        
        if win 
            return "You win! " + playerSelection + " beats " + computerSelection + "!"
            
        else
            return "You lose! " + computerSelection + " beats " + playerSelection + "!"

*/
