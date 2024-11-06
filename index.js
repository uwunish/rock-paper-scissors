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
	console.log(userChoice);
	if (
		userChoice === "rock" ||
		userChoice === "paper" ||
		userChoice === "scissors"
	) {
		return userChoice;
	} else {
		console.log("Invalid Choice... Please try again");
		getHumanChoice();
	}
}

// Create variable "humanScore" and "computerScore" and initialize them to 0
let humanScore = 0;
let computerScore = 0;

// Create the function "playRound" that takes "humanChoice" and "computerChoice" as arguments
function playRound(humanChoice, computerChoice) {
	if (humanChoice === computerChoice) {
		console.log("It's a draw!");
	} else if (humanChoice === "rock" && computerChoice === "paper") {
		console.log("You lose! Paper beats Rock");
		computerScore++;
	} else if (humanChoice === "rock" && computerChoice === "scissors") {
		console.log("You win! Rock beats Scissors");
		humanScore++;
	} else if (humanChoice === "paper" && computerChoice === "rock") {
		console.log("You win! Paper beats Rock");
		humanScore++;
	} else if (humanChoice === "paper" && computerChoice === "scissors") {
		console.log("You lose! Scissors beats Paper");
		computerScore++;
	} else if (humanChoice === "scissors" && computerChoice === "rock") {
		console.log("You lose! Rock beats Scissors");
		computerScore++;
	} else if (humanChoice === "scissors" && computerChoice === "paper") {
		console.log("You win! Scissors beats Paper");
		humanScore++;
	}
}

// Create the function "playGame" which calls "playRound" five times
function playGame() {
	computerScore = 0;
	humanScore = 0;
	for (let i = 0; i < 5; i++) {
		// Create a variable "computerChoice" and initialize it to the result of "getComputerChoice" function
		let computerChoice = getComputerChoice();

		// Create a variable "humanChoice" and intialize it to the result of "getHumanChoice" function
		let humanChoice = getHumanChoice();

		playRound(humanChoice, computerChoice);
	}
	if (humanScore > computerScore) {
		console.log("Congratulations! You are the ultimate winner...");
	} else {
		console.log("Alas! Computer was the ultimate winner...");
	}
}

playGame();
