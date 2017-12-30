const generatePlayerBoards = (numberOfRows, numberOfColumns) => {
  let board = [];
  for (i = 0; i < numberOfRows.length; i++){
    let row = [];
    for (j=0; j < numberOfColumns.length; j++){
      row.push(' ');
    }
    board.push(row);
  }
}

generatePlayerBoards(10,20)
