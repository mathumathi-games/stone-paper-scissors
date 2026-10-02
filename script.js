let userScore = 0;
let computerScore = 0;

function startGame() {
    document.getElementById("homeScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "block";
}

function playGame(userChoice) {

    const choices = ["Stone", "Paper", "Scissors"];

    const computerChoice =
        choices[Math.floor(Math.random() * choices.length)];

    let result;

    if (userChoice === computerChoice) {
        result = "🤝 DRAW!";
    }
    else if (
        (userChoice === "Stone" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Stone") ||
        (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
        result = "🎉 YOU WIN!";
        userScore++;
    }
    else {
        result = "🤖 COMPUTER WINS!";
        computerScore++;
    }

    document.getElementById("result").innerHTML =
        "👤 You chose: " + userChoice +
        "<br>🤖 Computer chose: " + computerChoice +
        "<br><br><strong>" + result + "</strong>";

    document.getElementById("score").innerHTML =
        "You: " + userScore +
        " | Computer: " + computerScore;
}

function resetGame() {

    userScore = 0;
    computerScore = 0;

    document.getElementById("result").innerHTML =
        "Choose Stone, Paper or Scissors!";

    document.getElementById("score").innerHTML =
        "You: 0 | Computer: 0";
}

function goHome() {

    resetGame();

    document.getElementById("gameScreen").style.display = "none";
    document.getElementById("homeScreen").style.display = "block";
}