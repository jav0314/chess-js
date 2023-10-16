import "./../../lib/typeDefinitions"

/**
 * Base class for all pieces
 */
export default class Piece {
    /**
     * @param {CommonPieceProps} props
     */
    constructor(props) {
        this.teamSide = props.teamSide;
        this.el = this.createElement(props.icon);
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
}
