
let humanChoice = window.prompt("Please select either:\nRock,\nPaper,\nScissors", "Enter your Choice Here!");

function computerPlayerChoice () {
    computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice == 1) {
        computerChoice = "rock";
        return computerChoice;
    }
    else if (computerChoice == 2) {
        computerChoice = "paper";
        return computerChoice;
    }
    else if (computerChoice == 3) {
        computerChoice = "scissors";
        return computerChoice;
    }   
}

let computerChoice;
computerChoice = computerPlayerChoice();

function humanPlayerChoice() {
    humanChoice = humanChoice.toLowerCase();
    if ((humanChoice != "rock") && (humanChoice != "paper") && (humanChoice != "scissors")) {
        window.alert("Your choice is invalid, please try again.");
        humanPlayerChoice();
    }
    else {
        return humanChoice;
    } 
}

function gamePlay (humanChoice, computerChoice) {
    humanPlayerChoice();
    console.log("The Computer Chose:");
    console.log(computerChoice)
    console.log("You Chose:");
    console.log(humanChoice);
    if (humanChoice == computerChoice) {
        window.alert("The game ended in a Draw!");
    }
    else if (humanChoice != computerChoice){
        if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "rock")){
            window.alert("You win!");
        }
        else {
        window.alert("You lose!");
        }
    }
}