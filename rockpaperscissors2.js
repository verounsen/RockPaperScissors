document.addEventListener("DOMContentLoaded", function() {

var rockButton = document.getElementById("rock");
var paperButton = document.getElementById("paper");
var scissorsButton = document.getElementById("scissors");

const choices = ["rock", "paper", "scissors"];
let userChoice;
let computerChoice;


rockButton.addEventListener("click", getUserChoice);
paperButton.addEventListener("click", getUserChoice);
scissorsButton.addEventListener("click", getUserChoice);


function getUserChoice(){
var clickedButton = event.target;
var buttonText = clickedButton.textContent;
userChoice = buttonText; 
//console.log("You chose:", userChoice);
generateComputerChoice();
}

function generateComputerChoice() {
  const computerChoiceIndex = Math.floor(Math.random() * choices.length);
  computerChoice = choices[computerChoiceIndex];
  //console.log("Computer chose:", computerChoice);
  chooseWinner();
}

function chooseWinner(){
    var resultDiv = document.querySelector('[result]');
    var winnerDiv = document.querySelector('[winner]');
    var resultMessage;

    if (userChoice == computerChoice){
        resultMessage = "It's a tie!";
    } else if (userChoice == "rock" && computerChoice == "paper"){
        resultMessage = "You lose!";
    } else if (userChoice == "rock" && computerChoice == "scissors"){
        resultMessage = "You win!";
    } else if (userChoice == "scissors" && computerChoice == "rock"){
        resultMessage = "You lose!";
    } else if (userChoice == "scissors" && computerChoice == "paper"){
        resultMessage = "You win!";
    } else if (userChoice == "paper" && computerChoice == "scissors"){
        resultMessage = "You lose!";
    } else if (userChoice == "paper" && computerChoice == "rock"){
        resultMessage = "You win!";
    } else {
        resultMessage = "User input unclear";
    }

    resultDiv.textContent = "You chose: " + userChoice + ", Computer chose: " + computerChoice  
    winnerDiv.textContent = resultMessage;
}
});