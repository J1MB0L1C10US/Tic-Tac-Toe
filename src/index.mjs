import inquirer from 'inquirer';
import {
  createArray,
  displayPrompt
} from './util.mjs';

let gameBoard = {
  state: createArray(9),
  isPlayerOneTurn: true,
};

export const init = () => {
  return inquirer.prompt({
    name: 'variableName',
    message: displayPrompt(gameBoard)
  });
};

init().then(data => {
  console.log(data);
});
