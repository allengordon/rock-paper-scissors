let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 4);
    let computerChoice;

    if (randomNum === 1) {
        computerChoice = "rock";
    } else if (randomNum === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    const playerLower = playerSelection.toLowerCase();
    if (playerLower === computerSelection) {
        return "It's a tie.";
    } else if (playerLower === "rock" && computerSelection === "paper" || playerLower === "scissors" && computerSelection === "rock" ||
        playerLower === "paper" && computerSelection === "scissors") {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerLower}!`;
    } else if (playerLower === "scissors" && computerSelection === "paper" || playerLower === "rock" && computerSelection === "scissors" ||
        playerLower === "paper" && computerSelection === "rock") {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    }
}

function game() {
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();

    for (let i = 0; i <= 5; i++) {
        if (playerScore < 6 || computerScore < 6)
            playRound(playerSelection, computerSelection);
    }

    if (playerScore > computerScore) {
        return "Congrats! You won!";
    } else if (computerScore > playerScore) {
        return "Sorry! you lost!";
    }
}

console.log(game());

