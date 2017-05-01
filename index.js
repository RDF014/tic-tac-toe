console.log(['-','-','-']);
console.log(['x','o', '-']);
console.log(['-','-','-']);

class TicTacToe {
  constructor() {
    this.matrix = [['-','-','-'], ['-','-','-'], ['-','-','-']];
    this.onDeck = 'X'
  }

  checkIfWon() {
    // recursively check if there is any winning solutions
      // if true, then announce winner and reset board and onDeck
      // if false, then change onDeck to be next player
        // invoke place piece
  }

  placePiece() {
    /* 
    prompt who player who is onDeck to place a piece based of the matrix coordinates
    the grid layout will look like
    Y
    2 [ '-', '-', '-' ]
    1 [ 'x', 'o', '-' ]
    0 [ '-', '-', '-' ]
         0    1    2    X
    
    after placing piece, invoke check if won
    */
  }

  resetGame() {
    // reset board to be blank
    // reset onDeck back to 'x' player
  }
}