const board = document.getElementById("board");

let currentPlayer = "X";
let cells = Array(9).fill(null);

function renderBoard() {
    board.innerHTML = "";
    cells.forEach((value, index) => {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.textContent = value;
        cell.addEventListener("click", () => makeMove(index));
        board.appendChild(cell);
    });
}

function makeMove(index) {
    if (!cells[index]) {
        cells[index] = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        renderBoard();
    }
}

renderBoard();
