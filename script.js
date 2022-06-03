const choices = ['Rock', 'Paper', 'Scissors'];

const computerPlay = Math.floor(Math.random() * choices.length);
let computerSelection = computerPlay;
console.log(choices[computerPlay]); 

let userPlay = prompt('Rock, Paper, Scissors?', ''); // need to add capitalization to standardize input or make playRound case insensitive
let playerSelection = userPlay;
let validOption = (choices.includes(userPlay)) ? true : false; //checks to see whether userPlay contains something from choices Array, returns true or false and stores in validOption

console.log(choices.includes(userPlay));
console.log(validOption);
console.log(userPlay);

/* playRound returns true if the player wins; else it returns false
    does not deal with "draws" - if both are the same
    need to add messages
*/

function game(){
    function playRound(playerSelection, computerSelection){ 
        if ('Rock','Scissors') {
            return true;
        } else if ('Scissors', 'Paper') {
            return true;
        } else if ('Paper', 'Rock'){
            return true;
        }   else {
            return false;
        }
    }
}
console.log(playRound(playerSelection, computerSelection))

    /* if userPlay is null, call userPlay

        if validOption = falsse, call userPlay

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
