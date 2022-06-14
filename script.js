let playerWin = 0;
let computerWin = 0;

const results = document.querySelector('#results');
function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let computerPlay = Math.floor(Math.random() * choices.length);
    return (choices[computerPlay]);
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(button.id);
  });
});

function playRound(playerSelection)
{ 
    const computerSelection = computerPlay();

    if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
            (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
            (playerSelection === 'Paper' && computerSelection === 'Rock')
        )   { results.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
                playerWin++;
    } else if (playerSelection === computerSelection){
        results.textContent = `No one wins! ${playerSelection} against ${computerSelection} is a draw! Play again.`;
    } else {
        results.textContent = `You lose! ${computerSelection} beats ${playerSelection}!`;
        computerWin++;
    };

    game();
}

function game()
{   
    const scoreBoard = document.querySelector('#score');
    scoreBoard.textContent = `Score: Player ${playerWin} Computer ${computerWin}`;
    const gameOver = document.querySelector('#gameOver');

    if (computerWin >= 5 || playerWin >= 5){
        gameOver.textContent = "Game Over!"
        scoreBoard.textContent = `Final Score: Player ${playerWin} Computer ${computerWin}`;
    }
}

