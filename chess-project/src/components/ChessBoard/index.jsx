import { Board } from "./style";
import { chessPieces } from "../../data";
import Queen  from "../Queen";

export const ChessBoard = () => {
  const row = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const column = ['1', '2', '3', '4', '5', '6', '7', '8'];

  const board = [];
  console.log(chessPieces)
  for (let c = column.length - 1; c >= 0; c--) {
  for (let r = 0; r < row.length; r++) {
    const isWhite = (c + r) % 2 === 0;
    const squareColorClass = isWhite ? 'white-square' : 'black-square';
    const key = `${row[r]}-${column[c]}`;

    const piece = chessPieces.find(p => p.id === key);
    const pieceComponent = piece ? <Queen color={piece.color} type={piece.type} /> : null;

    board.push(
      <li key={key} className={`grid ${squareColorClass}`}>
        {pieceComponent}
      </li>
    );
  }
}

  return (
    <Board>
      {board}
    </Board>
  );
};
