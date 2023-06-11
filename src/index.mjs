import {
  createArray,
  displayPrompt
} from './util.mjs';

let gameBoard = {
  state: createArray(9),
  isPlayerOneTurn: true,
};

const nextTurn = () => {
  gameBoard.isXTurn = !gameBoard.isXTurn;
  return displayPrompt(gameBoard)
    .then(parseAnswer);
};

const parseAnswer = ({target}) => {

  if (isNaN(target))
    return displayPrompt(gameBoard)
      .then(parseAnswer);

  gameBoard.state[target] = gameBoard.isXTurn ? 'X' : 'O';

  return nextTurn();
};

export const init = () => {
  return nextTurn();
};

await init();