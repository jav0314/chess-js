/* eslint-disable no-undef */
import PieceFactory from ".";
import { piecesFaction, piecesTypes } from "../../lib/const";
import { InvalidIdentifierError } from "../../lib/errors";
import Piece from "../piece";

describe("PieceFactory", () => {

    it("should throw an error if the provided type is not a valid piece", () => {
        const cb = () => PieceFactory.createPiece({ type: "some value", faction: piecesFaction.white, icon: "/piece-placeholder.svg" })
        expect(cb).toThrow(InvalidIdentifierError)
    })

    /**
     * TODO: implement real classes instead of base ones
     */
    it("should create the appropriate object for the given type", () => {
        const cb = (type) => PieceFactory.createPiece({ faction: piecesFaction.white, icon: "/piece-placeholder.svg", type })
        expect(cb(piecesTypes.king)).toBeInstanceOf(Piece)
        expect(cb(piecesTypes.queen)).toBeInstanceOf(Piece)
        expect(cb(piecesTypes.bishop)).toBeInstanceOf(Piece)
        expect(cb(piecesTypes.rook)).toBeInstanceOf(Piece)
        expect(cb(piecesTypes.knight)).toBeInstanceOf(Piece)
        expect(cb(piecesTypes.pawn)).toBeInstanceOf(Piece)
    })
})