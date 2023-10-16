import { piecesColors } from "../lib/const";
import Piece from "./piece";

const lettersId = "ABCDEJGH";

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
  }

  init() {
    if (!this.el) throw new Error("App wasn't found");
    const fragment = document.createDocumentFragment();
    let isWhite = true;

    for (let row = 8; row >= 1; row--) {
      for (let column = 0; column < 8; column++) {
        const square = document.createElement("div");
        square.setAttribute("id", lettersId[column] + row);
        square.setAttribute("class", "square");

        if (!isWhite) {
          square.classList.add("black-Square");
        }
        fragment.append(square);
        isWhite = !isWhite;
      }
      isWhite = !isWhite;
    }
    const piece = new Piece({ icon: "/piece-placeholder.svg", teamSide: piecesColors.white })

    this.el.append(fragment);
    this.el.append(piece.el)
    return this
  }
}

const board = Board.getInstance()

export default board