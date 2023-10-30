import Board from "./../board";

export class Rook {
  constructor(color, currentPosition) {
    this.color = color;
    this.currentPosition = currentPosition;
  }

  isValidMove(newPosition) {
    let currentSquare = this.squares.filter(
      (id) => id === this.currentPosition,
    );
    let newSquare = this.squares.filter((id) => id === newPosition);

    if (currentPosition.id === newPosition.id) {
      return false;
    }

    if (
      currentPosition.row !== newPosition.row &&
      currentPosition.column !== newPosition.column
    )
      return false;
  }
}

function pathClear(currentSquare, newSquare, squareIds) {
  let currentSquareClear = squareIds.indexOf(currentSquare.id);
  let newSquareClear = squareIds.indexOf(newSquare.id);

  if (currentSquareClear >= 0 && newSquareClear >= 0) {
    let startClear = Math.min(currentSquareClear, newSquareClear);
    let endClear = Math.max(currentSquareClear, newSquareClear);

    for (let i = startClear + 1; i < endClear; i++) {
      let squareId = squareIds[i];
      if (squareOccupied(squareId)) return false;
    }
  }
  return true;
}
