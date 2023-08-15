export const chessPieces = [];

// Função para gerar as informações das peças
function generatePiece(id, type, color) {
  return { id, type, color };
}

const columnLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

// Loop para gerar as peças brancas e pretas
for (let row = 1; row <= 8; row++) {
  const color = row <= 2 ? 'black' : 'white';

  if (row === 1 || row === 8) {
    const backRowPieces = ['tower', 'horse', 'bishop', 'king', 'queen', 'bishop', 'horse', 'tower'];

    backRowPieces.forEach((type, col) => {
      const id = `${columnLetters[col]}-${row}`;
      chessPieces.push(generatePiece(id, type, color));
    });
  } else if (row === 2 || row === 7) {
    for (let col = 0; col < 8; col++) {
      const id = `${columnLetters[col]}-${row}`;
      chessPieces.push(generatePiece(id, 'pawn', color));
    }
  }
}
