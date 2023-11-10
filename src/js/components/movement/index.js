import Square from "../square";
import { InvalidIdentifierError } from "../../lib/errors";
import Board from "../board";

export default class Movement {
  static horizontal(squareId) {
    if (!Square.isValidId(squareId))
      throw new InvalidIdentifierError(
        `${squareId} is not a valid id for the horizontal movement`,
      );
    const horizontalIdentifier = squareId[1];
    const availableSquare = Board.squares.filter((square) => {
      return square.id.includes(horizontalIdentifier) && squareId !== square.id;
    });
  }
}
