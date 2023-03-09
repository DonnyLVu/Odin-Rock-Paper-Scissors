// Computer Choice

function computerChoice() {
  const randomNumber = randomNumber.Math.ceil(Math.random() * 3);
  let computerOutcome;
  if (randomNumber === 1) computerOutcome = "Rock";
  if (randomNumber === 2) computerOutcome = "Paper";
  if (randomNumber === 3) computerOutcome = "Scissor";

  return console.log(randomNumber, computerOutcome);
}
