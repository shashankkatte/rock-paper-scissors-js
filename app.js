const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSIORS = 'SCISSIORS';
const DEFAULT_USER_CHOICE = 'ROCK';
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER WINS';

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSIORS}?`,
    ''
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSIORS) {
    alert(`Invalid choice so we chose ${ROCK} for you!`);
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.37) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSIORS;
  }
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => {
  if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSIORS) ||
    (cChoice === SCISSIORS && pChoice === ROCK)
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }
};

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting!');
  const playerSelection = getPlayerChoice();
  const computerchoice = getComputerChoice();
  let winner;
  if(playerSelection){
     winner = getWinner(playerSelection, computerchoice);
  }
  else {
    winner = getWinner(computerchoice);
  }
  let message = `You picked ${playerSelection || DEFAULT_USER_CHOICE},computer picked ${computerchoice} therefore `;
  if (winner === RESULT_DRAW) {
    message += `its a DRAW!`;
  } else if (winner === RESULT_PLAYER_WINS) {
    message += `You WIN!`;
  } else {
    message += `Computer Wins`;
  }
  alert(message);
  gameIsRunning = false;
});
