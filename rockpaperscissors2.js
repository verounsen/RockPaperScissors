console.log("Hello Veeeri");

const choices = ["rock", "paper", "scissors"];
let userChoice;
let computerChoice;


getUserChoice();
generateComputerChoice();
chooseWinner();


function getUserChoice(){
userChoice = prompt("Enter your choice (Rock, Paper, or Scissors):").toLowerCase();
console.log("You chose:", userChoice);
}

function generateComputerChoice() {
  const computerChoiceIndex = Math.floor(Math.random() * choices.length);
  computerChoice = choices[computerChoiceIndex];
  console.log("Computer chose:", computerChoice);
}

function chooseWinner(){
    if (userChoice==computerChoice){
        console.log("tie!");
    } else if (userChoice == "rock" && computerChoice == "paper"){
        console.log("you lose!");
    }    else if (userChoice == "rock" && computerChoice == "scissors"){
        console.log("you win");
    } else if (userChoice == "scissors" && computerChoice == "rock"){
        console.log("you lose");
    } else if (userChoice =="scissors" && computerChoice == "paper"){
        console.log("you win");
    } else if (userChoice =="paper" && computerChoice == "scissors"){
        console.log("you lose");
    } else if (userChoice =="paper" && computerChoice == "rock"){
        console.log("you win");
    } else {
        console.log("User Input unclear")
    }
}