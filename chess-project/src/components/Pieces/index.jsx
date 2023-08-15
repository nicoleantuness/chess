// pieces/Pawns.js
import Piece from './Piece';

class Pawns extends Piece {
  constructor(color) {
    super(color, 'pawn');
  }

  getAvailableMoves(position) {
    const [x, y] = position.split('-').map(Number);

    const moves = [];

    if (this.color === 'white') {
      const nextY = y + 1;
      if (nextY <= 7) {
        moves.push(`${x}-${nextY}`);
      }
    } else if (this.color === 'black') {
      const nextY = y - 1;
      if (nextY >= 0) {
        moves.push(`${x}-${nextY}`);
      }
    }

    return moves;
  }
}

export default Pawns;
