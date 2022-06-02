const choices = ['Rock', 'Paper', 'Scissors'];

const computerPlay = Math.floor(Math.random() * choices.length);

console.log(choices[computerPlay]);

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
