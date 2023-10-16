export default class Square {
    /**
     * @param {string} id 
     * @param {boolean} isWhite 
     */
    constructor(id, isWhite) {
        this.el = this.createElement(id, isWhite)
        this.id = id
    }
    /**
     * @param {string} id 
     * @param {boolean} isWhite 
     */
    createElement(id, isWhite) {
        const el = document.createElement("div");
        el.id = id
        el.classList.add("square");
        if (!isWhite) el.classList.add("black-Square");
        return el
    }
}