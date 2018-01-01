const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
  for (i = 0; i < numberOfRows; i++){
    let row = [];
    for (j=0; j < numberOfColumns; j++){
      row.push(' ');
    }
    board.push(row);
  }
  return board
}

console.log(generatePlayerBoard(3,4))
