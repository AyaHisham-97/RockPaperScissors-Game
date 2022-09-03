//define scores
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

//define win, lose or tie
const win = "You Win This Round!"; //define win
const lose ="You Lose This Round!"; //define lose
const tie = "This Round Is A Tie!"; //define tie

// program to convert first letter of a string to uppercase
function capitalizeFirstLetter(str) {
    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
  }
function computerPlay() {
    choices = ["rock", "paper", "scissors"];
    const option = choices[Math.floor(Math.random() * choices.length)];
    return option;
}
function playerPlay() {
  let play = prompt('Lets Play Rock, Paper or Scissors');
  while (
    play.trim().toLowerCase() !== 'paper' &&
    play.trim().toLowerCase() !== 'rock' &&
    play.trim().toLowerCase() !== 'scissors'
  ) {
    play = prompt('Invalid Input! You Must Enter (rock, paper or scissors)');
  }
  return play;
}
function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();
  if (
    (playerChoice == "rock" && computerSelection == "scissors") ||
    (playerChoice == "paper" && computerSelection == "rock") ||
    (playerChoice == "scissors" && computerSelection == "paper")
  ) {
   playerScore++;
    return `${win} ${capitalizeFirstLetter(playerSelection)} Beats ${capitalizeFirstLetter(computerSelection)}.`;
  } else if (
    (playerChoice == "rock" && computerSelection == "paper")|| 
    (playerChoice== "scissors" && computerSelection == "rock") || 
      (playerChoice == "paper" && computerSelection == "scissors")
  ) {
   computerScore++;
    return `${lose} ${capitalizeFirstLetter(computerSelection)} Beats ${capitalizeFirstLetter(playerSelection)}.`;
  } else if (playerChoice == computerSelection) {
   tieScore++;
    return `${tie}`;
  } 
}
function game() {
  for (let i = 0; i < 5; i++) {
    alert(playRound(playerPlay(), computerPlay()));
  }
  if (playerScore > computerScore) {
    alert(`You Were Born To Win.`) ;
  }
 else if (playerScore == computerScore) {
   alert(`Keep Calm It's A Tie Game.`);
  } else {
 alert(`If You've A Good Time Playing The Game, You're A Winner Even If You Lose.`) ;
  }
}
game();
alert(`Your Final Score is ${playerScore} Wins ${computerScore} Loses and ${tieScore} Draws.`);
