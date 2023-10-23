import "./../../lib/typeDefinitions";
import { InvalidIdentifierError } from "../../lib/errors";
import { piecesTypes } from "./../../lib/const";
import Piece from "../piece";

/**
 * TODO: implement real classes instead of base ones
 */
export const classes = {
  [piecesTypes.king]: Piece,
  [piecesTypes.queen]: Piece,
  [piecesTypes.bishop]: Piece,
  [piecesTypes.knight]: Piece,
  [piecesTypes.rook]: Piece,
  [piecesTypes.pawn]: Piece,
};

export default class PieceFactory {
  /**
   * @param {CommonPieceProps} props
   * @param {PieceTypeValues} type
   */
  static createPiece(props) {
    if (!(props.type in classes))
      throw new InvalidIdentifierError(
        `${props.type} is not a valid piece type`,
      );
    const PieceClass = classes[props.type];
    return new PieceClass(props);
  }
}
