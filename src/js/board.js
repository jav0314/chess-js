const lettersId = "ABCDEJGH";

export default class Board {
  init() {
    const app = document.getElementById("app");
    if (!app){
      console.error("App wasn't found");
      return;
    }
    const fragment = document.createDocumentFragment();
    let isWhite = true;

    for (let row = 8; row >= 1; row--) {
      for (let column = 0; column < 8; column++) {
        const square = document.createElement("div");
        square.setAttribute("id", lettersId[column] + row);
        square.setAttribute("class", "square");

        if (!isWhite){
          square.classList.add("black-Square");
        }
        fragment.append(square);
        isWhite = !isWhite;
      }
      isWhite = !isWhite;
    }

    app.append(fragment);
    
  }
}