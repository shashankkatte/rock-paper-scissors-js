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
    return DEFAULT_USER_CHOICE;
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

const getWinner = (cChoice, pChoice)=> {
  if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSIORS) ||
    (cChoice === SCISSIORS && pChoice === ROCK)
  ) {
      return RESULT_PLAYER_WINS;
  }
  else {
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
  const winner = getWinner(playerSelection,computerchoice);
  console.log(winner);
  gameIsRunning = false;
});
