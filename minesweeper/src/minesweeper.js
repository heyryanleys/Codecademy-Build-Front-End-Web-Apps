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
    while (numberOfBombs < numberOfBombs){
      let randomRowIndex = Math.floor(Math.random() * numberOfRows;)
    }


    return board
}

console.log(generatePlayerBoards('3','3'));
console.log(generatebombBoard('3','3'));
