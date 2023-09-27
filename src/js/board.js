const lettersId = "abcdefgh";

export default class Board{
    init(){
        const app = document.getElementById("app")
        const frangment = document.createDocumentFragment();
        for (let index = 1; index <= 8; index++) {
            for (let i = 1; i <= 8; i++) {
                const square = document.createElement("div");
                square.setAttribute("id", lettersId[index -1] + i);
                square.setAttribute("class", "square");
                frangment.append(square);                
            }
        }
        app.append(frangment);
    }
}
