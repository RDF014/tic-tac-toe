

const prompt = require('prompt');

class TicTacToe {
  constructor() {
    this.matrix = [['-','-','-'], ['-','-','-'], ['-','-','-']];
    this.onDeck = 'X'
  }

  checkIfWon() {
    this.matrix.forEach(row => {
      console.log(row);
    });
    this.placePiece();
    // recursively check if there is any winning solutions
      // if true, then announce winner and reset board and onDeck
      // if false, then change onDeck to be next player
        // invoke place piece
  }

  placePiece() {
    console.log(`${this.onDeck} Player's turn to place piece`);
    prompt.start();
    prompt.get(['X_Position', 'Y_Position'], (err, results) => {
      let xCorrdinates = results.X_Position;
      let yCorrdinates = results.Y_Position;

      this.matrix[yCorrdinates][xCorrdinates] = this.onDeck;
      this.onDeck = (this.onDeck === 'X' ? 'O' : 'X');
      this.checkIfWon();
    })

    /* 
    prompt who player who is onDeck to place a piece based of the matrix coordinates
    the grid layout will look like
         0    1    2    X
    0 [ '-', '-', '-' ]
    1 [ 'x', 'o', '-' ]
    2 [ '-', '-', '-' ]
    Y
    
    after placing piece, invoke check if won
    */
  }

  resetGame() {
    // reset board to be blank
    this.matrix = [['-','-','-'], ['-','-','-'], ['-','-','-']];
    // reset onDeck back to 'x' player
    this.onDeck = 'X';
    this.placePiece();
  }
}

let newGame = new TicTacToe();
newGame.checkIfWon();