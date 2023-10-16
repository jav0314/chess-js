import { piecesFaction, piecesTypes, lettersId } from "../../lib/const";
import Piece from "../piece";
import PieceFactory from "../pieceFactory";
import Square from "../square";

class Board {
  /**
   * @type {null | Board}
   */
  static instance = null;

  static getInstance() {
    if (!Board.instance) {
      Board.instance = new Board();
    }
    return Board.instance;
  }

  constructor() {
    if (Board.instance) {
      return Board.instance;
    }
    this.el = document.getElementById("app");
    Board.instance = this;

    /**
     * @type {Square[]} 
     */
    this.squares = []

    /**
     * @type {Piece[]} 
     */
    this.pieces = []
  }

  init() {
    if (!this.el) throw new Error("App wasn't found");
    const fragment = document.createDocumentFragment();
    let isWhite = true;

    for (let row = 8; row >= 1; row--) {
      for (let column = 0; column < 8; column++) {
        const square = new Square(lettersId[column] + row, isWhite)
        this.squares.push(square)
        fragment.append(square.el);
        isWhite = !isWhite;
      }
      isWhite = !isWhite;
    }
    const piece = PieceFactory.createPiece({ icon: "/piece-placeholder.svg", faction: piecesFaction.white, type: piecesTypes.king })
    this.pieces.push(piece)

    this.el.append(fragment);
    this.el.append(piece.el)
    console.log(this.pieces, this.squares)
    return this
  }
  /**
   * @param {Square["id"]} id 
   */
  getSquare(id) {
    if (!Square.isValidId(id)) throw new Error("Invalid id")
    /**
     * @type {Square}
     */
    const square = this.squares.find((square) => square.id === id)
    return square
  }

  /**
 * @param {number} id 
 */
  getPiece(id) {
    if (!Piece.isValidId(id)) throw new Error("Invalid id")
    /**
     * @type {Piece}
     */
    const piece = this.pieces.find((piece) => piece.id === id)
    return piece
  }
}

const board = Board.getInstance()

export default board