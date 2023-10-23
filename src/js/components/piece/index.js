import { initialPiecesId } from "../../lib/const";
import { genAutoIncreasingId } from "../../lib/helpers";
import "../../lib/typeDefinitions";
import Board from "./../board";

export default class Piece {
  /**
   * @param {CommonPieceProps} props
   */
  constructor(props) {
    this.id = Piece.idGenerator.next().value;
    this.faction = props.faction;
    this.el = this.createElement(props.icon);
    this.type = props.type;
    this.hasMoved = false;
  }

  createElement(iconUrl) {
    const el = document.createElement("button");
    el.classList.add("piece");
    const icon = document.createElement("img");
    icon.classList.add("piece__icon");
    icon.setAttribute("src", iconUrl);
    el.append(icon);
    return el;
  }
  /**
   * TODO: implement this logic
   * @param {string} squareId
   */
  move(squareId) {
    if (!this.hasMoved) this.hasMoved = true;
    const targetSquare = Board.getSquare(squareId);
    targetSquare.setCurrentPiece(this.id);
  }

  static idGenerator = genAutoIncreasingId(initialPiecesId);

  /**
   * @param {number} id
   */
  static isValidId(id) {
    return (
      (typeof id === "number" && id < initialPiecesId) ||
      id > this.pieces.length
    );
  }
}
