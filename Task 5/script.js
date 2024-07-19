/* ------------------------------ TASK 5 -----------------------------------
Parašykite TS funkciją, kuri atlieka žirklės/popierius/akmuo žaidimo patikrinimą ir grąžina atsakymą.
Funkcija priima du tekstus ir grąžina tekstą.

Pvz.:
  "scissors", "paper" --> "Player 1 won!"
  "scissors", "rock" --> "Player 2 won!"
  "paper", "paper" --> "Draw!"
-------------------------------------------------------------------------- */
function rockPaperScissors(player1, player2) {
  var validChoices = ["rock", "paper", "scissors"];
  if (!validChoices.includes(player1) || !validChoices.includes(player2)) {
    return "Invalid input!";
  }
  if (player1 === player2) {
    return "Draw!";
  }
  if (
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "scissors" && player2 === "paper") ||
    (player1 === "paper" && player2 === "rock")
  ) {
    return "Player 1 won!";
  }
  return "Player 2 won!";
}
console.log(rockPaperScissors("scissors", "paper"));
console.log(rockPaperScissors("scissors", "rock"));
console.log(rockPaperScissors("paper", "paper"));
console.log(rockPaperScissors("rock", "scissors"));
console.log(rockPaperScissors("rock", "paper"));
