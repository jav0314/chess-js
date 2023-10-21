/* eslint-disable no-unused-vars */
import { piecesTypes, piecesFaction } from "./const";

/**
 * @typedef {typeof piecesTypes[keyof typeof piecesTypes]} PieceTypeValues
 */

/**
 * @typedef {typeof piecesFaction[keyof typeof piecesFaction]} PieceFaction
 */

/**
 * @typedef {Object} CommonPieceProps
 * @property {PieceFaction} faction
 * @property {string} icon
 * @property {PieceTypeValues} type
 */
