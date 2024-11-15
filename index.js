const buttons = document.querySelectorAll("input");
const result = document.querySelector(".result");

const score = document.createElement("div");
const winner = document.createElement("h1");

// Create the "getComputerChoice" function
function getComputerChoice() {
  // Use the random function to generate the random number: 1, 2 or 3
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  // Use if statements to correspond randomly generated number to either "rock", "paper", or "scissors"
  let choice = "";
  if (randomNumber === 1) {
    choice = "rock";
  } else if (randomNumber === 2) {
    choice = "paper";
  } else {
    choice = "scissors";
  }

  // Return the randomly selected choice
  return choice;
}

// Create a getHumanChoice function
function getHumanChoice() {
  // Ask the user "Rock, Paper or Scissors? " and return the choice to "humanChoice"
  let userChoice = prompt("Rock, Paper or Scissors? ");
  userChoice = userChoice.toLowerCase();
  if (
    userChoice === "rock" ||
    userChoice === "paper" ||
    userChoice === "scissors"
  ) {
    console.log(userChoice);
    return userChoice;
  } else {
    console.log("Invalid Choice... Please try again");
    getHumanChoice();
  }
}

// Create variable "humanScore" and "computerScore" and initialize them to 0
let humanScore = 0;
let computerScore = 0;

score.textContent = `Computer Score = ${computerScore}
Human Score = ${humanScore}`;

result.insertAdjacentElement("beforebegin", score);

// Create the function "playRound" that takes "humanChoice" and "computerChoice" as arguments
function playRound(humanChoice, computerChoice) {
  winner.textContent = "";
  if (humanChoice === computerChoice) {
    result.textContent = "It's a draw!";
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    result.textContent = "You lose! Paper beats Rock";
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    result.textContent = "You win! Rock beats Scissors";
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    result.textContent = "You win! Paper beats Rock";
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    result.textContent = "You lose! Scissors beats Paper";
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    result.textContent = "You lose! Rock beats Scissors";
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    result.textContent = "You win! Scissors beats Paper";
    humanScore++;
  }
  score.textContent = `Computer Score = ${computerScore} Human Score = ${humanScore}`;
  result.insertAdjacentElement("beforebegin", score);

  if (humanScore === 5 || computerScore === 5) {
    if (humanScore === 5) {
      winner.textContent = "You are the ultimate winner...";
    }

    if (computerScore === 5) {
      winner.textContent = "Computer is the ultimate winner...";
    }
    document.body.appendChild(winner);
    computerScore = 0;
    humanScore = 0;
  }

  document.appendChild(result);
}

// Create the function "playGame" which calls "playRound" five times
//function playGame() {
//computerScore = 0;
//humanScore = 0;
//for (let i = 0; i < 5; i++) {
//	// Create a variable "computerChoice" and initialize it to the result of "getComputerChoice" function
//	let computerChoice = getComputerChoice();
//
//	// Create a variable "humanChoice" and intialize it to the result of "getHumanChoice" function
//	let humanChoice = getHumanChoice();
//
//	playRound(humanChoice, computerChoice);
//}
//if (humanScore > computerScore) {
//	console.log("Congratulations! You are the ultimate winner...");
//} else {
//	console.log("Alas! Computer was the ultimate winner...");
//}
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    let computerChoice = getComputerChoice();
    playRound(button.value, computerChoice);
  });
});

//}
