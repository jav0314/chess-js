const lettersId = "ABCDEJGH";

export default class Board {
  init() {
    const app = document.getElementById("app");
    const frangment = document.createDocumentFragment();
    for (let row = 8; row >= 1; row--) {
      for (let column = 0; column < 8; column++) {
        const square = document.createElement("div");
        square.setAttribute("id", lettersId[column] + row);
        square.setAttribute("class", "square");
        frangment.append(square);
      }
    }
    app.append(frangment);
  }
}
