export const piecesFaction = Object.freeze({
    white: "white",
    black: "black"
})

export const piecesTypes = Object.freeze({
    king: 0,
    queen: 1,
    bishop: 2,
    knight: 3,
    rook: 4,
    pawn: 5
})

export const lettersId = "ABCDEFGH";

export const initialPiecesId = 1

export const piecesInitialPosition = [
    { squareId: "A1", pieceType: piecesTypes.rook, faction: piecesFaction.white },
    { squareId: "B1", pieceType: piecesTypes.knight, faction: piecesFaction.white },
    { squareId: "C1", pieceType: piecesTypes.bishop, faction: piecesFaction.white },
    { squareId: "D1", pieceType: piecesTypes.queen, faction: piecesFaction.white },
    { squareId: "E1", pieceType: piecesTypes.king, faction: piecesFaction.white },
    { squareId: "F1", pieceType: piecesTypes.bishop, faction: piecesFaction.white },
    { squareId: "G1", pieceType: piecesTypes.knight, faction: piecesFaction.white },
    { squareId: "H1", pieceType: piecesTypes.rook, faction: piecesFaction.white },
    { squareId: "A2", pieceType: piecesTypes.pawn, faction: piecesFaction.white },
    { squareId: "B2", pieceType: piecesTypes.pawn, faction: piecesFaction.white },
    { squareId: "C2", pieceType: piecesTypes.pawn, faction: piecesFaction.white },
    { squareId: "D2", pieceType: piecesTypes.pawn, faction: piecesFaction.white },
    { squareId: "E2", pieceType: piecesTypes.pawn, faction: piecesFaction.white },
    { squareId: "F2", pieceType: piecesTypes.pawn, faction: piecesFaction.white },
    { squareId: "G2", pieceType: piecesTypes.pawn, faction: piecesFaction.white },
    { squareId: "H2", pieceType: piecesTypes.pawn, faction: piecesFaction.white },
    { squareId: "A7", pieceType: piecesTypes.pawn, faction: piecesFaction.black },
    { squareId: "B7", pieceType: piecesTypes.pawn, faction: piecesFaction.black },
    { squareId: "C7", pieceType: piecesTypes.pawn, faction: piecesFaction.black },
    { squareId: "D7", pieceType: piecesTypes.pawn, faction: piecesFaction.black },
    { squareId: "E7", pieceType: piecesTypes.pawn, faction: piecesFaction.black },
    { squareId: "F7", pieceType: piecesTypes.pawn, faction: piecesFaction.black },
    { squareId: "G7", pieceType: piecesTypes.pawn, faction: piecesFaction.black },
    { squareId: "H7", pieceType: piecesTypes.pawn, faction: piecesFaction.black },
    { squareId: "A8", pieceType: piecesTypes.rook, faction: piecesFaction.black },
    { squareId: "B8", pieceType: piecesTypes.knight, faction: piecesFaction.black },
    { squareId: "C8", pieceType: piecesTypes.bishop, faction: piecesFaction.black },
    { squareId: "D8", pieceType: piecesTypes.queen, faction: piecesFaction.black },
    { squareId: "E8", pieceType: piecesTypes.king, faction: piecesFaction.black },
    { squareId: "F8", pieceType: piecesTypes.bishop, faction: piecesFaction.black },
    { squareId: "G8", pieceType: piecesTypes.knight, faction: piecesFaction.black },
    { squareId: "H8", pieceType: piecesTypes.rook, faction: piecesFaction.black },
];
