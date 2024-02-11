document.addEventListener("DOMContentLoaded", function() {

var rockButton = document.getElementById("rock");
var paperButton = document.getElementById("paper");
var scissorsButton = document.getElementById("scissors");
var scoreDiv = document.querySelector('[score]');
var scorePlayer = 0;
var scoreComputer = 0;

var resultDiv = document.querySelector('[result]');
var winnerDiv = document.querySelector('[winner]');
var resultMessage;

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


    if (userChoice == computerChoice){
        resultMessage = "It's a tie!";
    } else if (userChoice == "rock" && computerChoice == "paper"){
        resultMessage = "You lose!";
        scoreComputer++;
    } else if (userChoice == "rock" && computerChoice == "scissors"){
        resultMessage = "You win!";
        scorePlayer++;
    } else if (userChoice == "scissors" && computerChoice == "rock"){
        resultMessage = "You lose!";
        scoreComputer++;
    } else if (userChoice == "scissors" && computerChoice == "paper"){
        resultMessage = "You win!";
        scorePlayer++;
    } else if (userChoice == "paper" && computerChoice == "scissors"){
        resultMessage = "You lose!";
        scoreComputer++;
    } else if (userChoice == "paper" && computerChoice == "rock"){
        resultMessage = "You win!";
        scorePlayer++;
    } else {
        resultMessage = "User input unclear";
    }

    resultDiv.textContent = "You chose: " + userChoice + ", Computer chose: " + computerChoice  
    winnerDiv.textContent = resultMessage;
    scoreDiv.textContent = scorePlayer + " : " +scoreComputer;
    isThereAWinner();
}

function isThereAWinner(){
    if (scorePlayer >=5 || scoreComputer >=5){
        if (scoreComputer<scorePlayer){
            alert("You won 5 Rounds! Congrats!");
            
        } else {
            alert("Computer won 5 Rounds, you lose.")
        }
        scoreComputer = 0;
        scorePlayer = 0;
        resultMessage = "";
        scoreDiv.textContent = "";
        winnerDiv.textContent = resultMessage;
        resultDiv.textContent = "";
    }
    
}
});