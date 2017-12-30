const generatePlayerBoards = (numberOfRows, numberOfColumns) => {
  let board = [];
  for (i = 0; i < numberOfRows; i++){
    let row = [];
    for (j = 0; j < numberOfColumns; j++){
      row.push(' ');
    }
      board.push(row);
  }
  return board
};

const generatebombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
    let board = [];
    for (i = 0; i < numberOfRows; i++){
      let row = [];
      for (j = 0; j < numberOfColumns; j++){
        row.push(null);
      }
        board.push(row);
    }
    let numberOfBombsPlaced = 0;
    while (numberOfBombsPlaced < numberOfBombs){
      // Currently the bomb can replace exsiting bombs which is not ideal
      let randomRowIndex = Math.floor(Math.random() * numberOfRows);
      let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
      board[randomRowIndex][randomColumnIndex] = 'B'
      numberOfBombsPlaced ++
    }
}

const PrintBoard = board => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
}

generatePlayerBoards(3,3);
generatebombBoard(3,3,3)
