import { initialPiecesId } from "../../lib/const";
import "./../../lib/typeDefinitions"
import Board from "./../board"

export default class Piece {
    /**
     * @param {CommonPieceProps} props
     */
    constructor(props) {
        this.id = Piece.idGenerator.next().value;
        this.faction = props.faction;
        this.el = this.createElement(props.icon);
        this.type = props.type
        this.hasMoved = false
    }

    createElement(iconUrl) {
        const el = document.createElement("button");
        const icon = document.createElement("img");
        icon.setAttribute("src", iconUrl);
        icon.style.width = "50px"
        icon.style.height = "50px"
        el.append(icon);
        el.style.position = "absolute";
        el.style.zIndex = "50";
        el.style.width = "50px"
        el.style.height = "50px"
        el.style.padding = "0"
        return el;
    }
    /**
     * @param {string} squareId 
     */
    move(squareId) {
        if (!this.hasMoved) this.hasMoved = true
        const targetSquare = Board.getSquare(squareId)
        targetSquare.setCurrentPiece(this.id)
    }

    // TODO: check generators compatibility
    // TODO: maybe move this to its own helper???
    static idGenerator = (function* () {
        let id = initialPiecesId;
        while (true) yield id++;
    })();

    /**
     * @param {number} id 
     */
    static isValidId(id) {
        return typeof id === "number" && id < initialPiecesId || id > this.pieces.length
    }
}
