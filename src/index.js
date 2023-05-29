let gameBoard = {
  state: new Array(9).fill(''),
  isPlayerOneTurn: true,
};

// console.log(gameBoard);

let init = () => {
  return gameBoard;
};
console.log(init());