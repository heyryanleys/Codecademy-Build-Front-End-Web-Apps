class Board {
  constructor(numberOfRows,numberOfColumns,numberOfBombs){
    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows * numberOfColumns;
    this._playerBoard = Board.generatePlayerBoard(numberOfRows,numberOfColumns);
    this._bombBoard = Board.generateBombBoard(numberOfRows,numberOfColumns);
  }
  get playerBoard(){
    return this._playerBoard
  }
  flipTile(rowIndex, columnIndex){
    if(this._playerBoard[rowIndex][columnIndex] !== ' '){
      console.log('This tile has already been flipped!');
      return;
    } else if (this._bombBoard[rowIndex][columnIndex] === 'B'){
      this._playerBoard[rowIndex][columnIndex] = 'B'
    } else {
      this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
    }
    this._numberOfTiles--
  }
  getNumberOfNeighborBombs(rowIndex,columnIndex){
    const neighborOffSets = [
      [-1,-1],
      [-1,0],
      [-1,1],
      [0,-1],
      [0,1],
      [1,-1],
      [1,0],
      [1,1],
    ];
    const numberOfRows = this._bombBoard.length;
    const numberOfColumns = this._bombBoard[0].length;
    let numberOfBombs = 0;
    neighborOffSets.forEach(offset => {
      neighborRowIndex = rowIndex + _offset[0];
      neighborColumnIndex = columnIndex + offset[1];
      if(neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns){
        if(this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B'){
          numberOfBombs++;
        }
      }
    })
    return numberOfBombs
  }
  hasSafeTiles(){
    return this.numberOfTiles !== this._numberOfBombs;

    }
  print(){
    console.log(board.map(row => row.join(' | ')).join('\n'))
  }
  static generatePlayerBoard(numberOfRows, numberOfColumns){
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
}

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];
  for (i = 0; i < numberOfRows; i++){
    let row = [];
    for (j=0; j < numberOfColumns; j++){
      row.push(null);
    }
    board.push(row);
  }
  let numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced < numberOfBombs){
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    if (board[randomRowIndex][randomColumnIndex] !== 'B'){
      board[randomRowIndex][randomColumnIndex] = 'B';
    }
    numberOfBombsPlaced++
  }
  return board
}





const playerBoard = generatePlayerBoard(3,4);
const bombBoard = generateBombBoard(3,4,5);
console.log('Player Board:');
printBoard(playerBoard)
console.log('Bomb Board:');
printBoard(bombBoard)

flipTile(playerBoard,bombBoard,0,0);
console.log('Updated Player Board:');
printBoard(playerBoard);

//console.log(generatePlayerBoard(3,4));
//console.log(generateBombBoard(4,4,4));
