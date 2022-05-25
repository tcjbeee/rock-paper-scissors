let humanChoice;
let computerChoice;
let computerRounds = 0;
let humanRounds = 0;
let roundNumber = 1;

roundNumberHeader = document.getElementById("roundheader");
roundNumberHeader.textContent = "Round " + roundNumber;

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

computerPlayerChoice();

/*function humanPlayerChoice() {
    humanChoice = window.prompt("Please select either:\nRock,\nPaper,\nScissors", "Enter your Choice Here!");
    humanChoice = humanChoice.toLowerCase();
    if ((humanChoice != "rock") && (humanChoice != "paper") && (humanChoice != "scissors")) {
        window.alert("Your choice is invalid, please try again.");
        humanPlayerChoice();
    }
    else {
        return humanChoice;
    } 
} */


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

// PLAYER AND HUMAN SCORE

let humanScore = document.getElementById("humanScore");
let computerScore = document.getElementById("computerScore");
let winner = document.getElementById("winner");

function scoreCheck() {
    if (humanRounds == 5) {
        winner.textContent = "You are the winner!";
    }
    else if (computerRounds == 5) {
        winner.textContent = "The computer is the winner!";
    }
    else {
        return;
    }
}

function updateScore() {

    scoreCheck();
    roundNumber ++;
    roundNumberHeader.textContent = "Round " + roundNumber;

    if (humanRounds == 0) {
        humanScore.textContent = "You haven't won any rounds!";
    }

    else {
        humanScore.textContent = "You have won: " + humanRounds + " rounds!";
    }
    
    if (computerRounds == 0) {
        computerScore.textContent = "The computer hasn't won any rounds!";
    }
    
    else {
        computerScore.textContent = "The computer has won: " + computerRounds + " rounds!";
    }

}

// BUTTONS HUMAN CHOICE



const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");

function rockFunction() {
    humanChoice = "rock";
    gamePlay(humanChoice, computerChoice);
    updateScore();
}

function paperFunction() {
    humanChoice = "paper";
    gamePlay(humanChoice, computerChoice);
    updateScore();
}

function scissorsFunction() {
    humanChoice = "scissors";
    gamePlay(humanChoice, computerChoice);
    updateScore();
}

rockButton.addEventListener('click', rockFunction);
paperButton.addEventListener("click", paperFunction);
scissorsButton.addEventListener("click", scissorsFunction);

// FIRST TO 5 ROUNDS LOGIC (OLD);

/* function game() {
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

} */

