let playerScore = 0;
let computerScore = 0;
let round = 1;
const RPS = ['Rock', 'Paper', 'Scissors'];


function getComputerChoice(rps) {
    const randomRPS = Math.floor(Math.random() * rps.length);
    const item = rps[randomRPS];
    return item;
}
// trying to upload

function playRound(playerSelection) {
 const computerSelection = getComputerChoice(RPS);
    let result;
    if (playerSelection === computerSelection) {
        result = 'Tie!';
    } else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')
    ) {
        result = 'Player wins the round!';
        playerScore++;
    } else {
        result = 'Computer wins the round!';
        computerScore++;
    }


    console.log(`Results: ${result} (Player: ${playerScore} | Computer: ${computerScore})`);
  
    round++;

 
    if (playerScore === 3 || computerScore === 3) {
        endGame();
    }
}


function endGame() {
    let winner;
    if (playerScore > computerScore) {
        winner = 'Player';
    } else {
        winner = 'Computer';
    }
    

    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
}


window.onload = function() {
    document.getElementById('rock').addEventListener('click', function() {
        playRound('Rock');
    });

    document.getElementById('paper').addEventListener('click', function() {
        playRound('Paper');
    });

    document.getElementById('scissors').addEventListener('click', function() {
        playRound('Scissors');
    });
}
