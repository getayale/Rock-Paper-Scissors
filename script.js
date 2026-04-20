function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
        let random = Math.random();

        if (random < 0.33) return "rock";
        else if (random < 0.66) return "paper";
        else return "scissors";
    }

    function getHumanChoice() {
        return prompt("Choose one: Rock, Paper or Scissors").toLowerCase();
    }

    function playRound(humanChoice, computerChoice) {

        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } 
        else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        } 
        else {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        }
    }

    // Play 5 rounds
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

   
    if (humanScore > computerScore) {
        console.log("🏆 You win the game!");
    } 
    else if (humanScore < computerScore) {
        console.log("💻 Computer wins the game!");
    } 
    else {
        console.log("🤝 It's a tie game!");
    }
}

playGame();