let humanChoice;
let computerChoice;
let computerRounds = 0;
let humanRounds = 0;

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

function humanPlayerChoice() {
    humanChoice = window.prompt("Please select either:\nRock,\nPaper,\nScissors", "Enter your Choice Here!");
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
            humanRounds ++;
        }
        else {
        window.alert("You lose!");
        computerRounds ++;
        }
    }
}

function game() {
    for (let rounds = 0; rounds < 5; rounds ++) {
        console.log("Round:");
        console.log(rounds + 1);
        humanChoice = humanPlayerChoice();
        computerChoice = computerPlayerChoice();
        gamePlay(humanChoice, computerChoice);
    }

    if (humanRounds > computerRounds) {
        console.log("You win the game!");
    }

    else if (humanRounds == computerRounds) {
        console.log("The game ended in a draw!");
    }

    else {
        console.log("The Computer wins the game!");
    }

}