import inquirer from 'inquirer';
export const createArray = (length) => {
    return new Array(length).fill(' ');
};

export const displayPrompt = (gameBoard) => {
  // const { state } = gameBoard;
  const state = gameBoard.state;

  return inquirer.prompt({
    name: 'target',
    message: `What is your move?
             |   |
       ${state[0]} | ${state[1]} | ${state[2]}
      ___|___|___
         |   |
       ${state[3]} | ${state[4]} | ${state[5]}
      ___|___|___
         |   |
       ${state[6]} | ${state[7]} | ${state[8]}
         |   |
      `.replace(/\n\s{4}/,'\n').trim() + '\n'
  });
};