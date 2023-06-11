import inquirer from 'inquirer';
import {
  createArray
} from './util.mjs';

let gameBoard = {
  state: createArray(9),
  isPlayerOneTurn: true,
};

export const init = () => {
  return inquirer.prompt({
    name: 'variableName',
    message: 'here is my message'
  });
};

init().then(data => {
  console.log(data);
});
