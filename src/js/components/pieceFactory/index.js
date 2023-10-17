import "./../../lib/typeDefinitions"
import { piecesTypes } from "./../../lib/const"
import Piece from "../piece";

export default class PieceFactory {
    /**
     * @param {CommonPieceProps} props
     * @param {PieceTypeValues} type
     */
    static createPiece(props) {
        switch (props.type) {
            case piecesTypes.king:
                return new Piece(props);
            default:
                return new Piece(props);
            // TODO: implement real pieces classes, not base one
        }
    }
}

