const choices = ["rock", "paper", "scissors"];
let computerChoice;
let userChoice;
let userWins = 0;
let rounds = 5;

game();

function game(){
    for (i = 1; i<=rounds; i++){
    getUserChoice();
    getComputerChoice();
    compareChoices();
    } 
    console.log("You won " + userWins + " of " + rounds)    
    if (userWins>=rounds/2){
        console.log("You are the ultimate Winner!")
    } else console.log("You STINK!");
    return;
}

function getUserChoice(){
    let userInput = (prompt("Rock, Paper, Scissors?"));
    userChoice = userInput.toLowerCase();
    //console.log(userChoice);
    return userChoice;
}

function getComputerChoice(){
   let randomChoice = Math.floor(Math.random()*choices.length)
   computerChoice = choices[randomChoice];
   //console.log(computerChoice);
}

function compareChoices(){
    if (userChoice === computerChoice){
       console.log("it's a tie!");
       return;
    } 
    let computerIndex = choices.indexOf(computerChoice);
    let userIndex = choices.indexOf(userChoice);

    if (userChoice === "rock" && computerChoice == "scissors" || userChoice == "paper" && computerChoice == "rock" || userChoice == "scissors" && computerChoice == "paper"){
        console.log("You win! " + userChoice + " beats " + computerChoice);
        userWins++;
    } else {
        console.log("I win! " + computerChoice + " beats " + userChoice);
    }


}