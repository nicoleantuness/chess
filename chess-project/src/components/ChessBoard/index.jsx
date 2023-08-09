import { MainBoard } from "./style"


export const ChessBoard = () => {
const row = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const column = ['1', '2', '3', '4', '5', '6', '7', '8'];

let board = [];

for (let c = column.length -1; c >= 0; c--){
    for(let r = 0; r < row.length; r++){
        const isWhite = (c + r) % 2 === 0;
        const squareColorClass = isWhite ? 'white-square' : 'black-square';
        board.push(<span className={`grid ${squareColorClass}`}>
                        {row[r]} {column[c]} 
                   </span>)
    }
}
    return(
            < MainBoard>
                {board}
            </MainBoard>
    )
}