import { lettersId } from "../../lib/const";
import Board from "../board";
export default class Square {
    /**
     * @param {string} id 
     * @param {boolean} isWhite 
     */
    constructor(id, isWhite) {
        this.el = this.createElement(id, isWhite)
        this.id = id
        this.currentPiece = null
    }

    /**
     * @param {string} id 
     * @param {boolean} isWhite 
     */
    createElement(id, isWhite) {
        if (!Square.isValidId(id)) throw new Error("Invalid id")
        const el = document.createElement("div");
        el.id = id
        el.classList.add("square");
        if (!isWhite) el.classList.add("square--black");
        return el
    }

    /**
     * @param {string} id 
     */
    static isValidId(id) {
        if (typeof id !== "string") return false
        const [letter, number] = id.split("")
        const isValidLetter = lettersId.split("").includes(letter)
        const parsedNumber = Number(number)
        const isValidNumber = !Number.isNaN(parsedNumber) && parsedNumber > 0 && parsedNumber < 9
        return id.length === 2 && isValidLetter && isValidNumber
    }

    getCurrentPiece() {
        return this.currentPiece
    }

    setCurrentPiece(id) {
        this.currentPiece = Board.getPiece(id)
        return this
    }
}