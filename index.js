// Create a variable "computerChoice" and initialize it to the result of "getComputerChoice" function
let computerChoice = getComputerChoice();

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

// Create a variable "humanChoice" and intialize it to the result of "getHumanChoice" function
let humanChoice = getHumanChoice();

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
