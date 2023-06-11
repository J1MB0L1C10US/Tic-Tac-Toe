import * as util from './util.mjs';
// console.log(util);
import inquirer from 'inquirer';
let gameBoard = {
  state: util.createArray(9),
  isPlayerOneTurn: true,
};

// console.log(gameBoard);

let init = () => {
  return inquirer
  .prompt([
    /* Pass your questions in here */
    'what is your name?'
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
  return gameBoard;
};
// export default init();
module.exports = {
  init
}