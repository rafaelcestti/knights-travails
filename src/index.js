import "./static/reset.css";
import "./static/style.css";

// function knightMoves(start, end) {

// }

class chessBoard {
    // constructor
    constructor() {
        this.cells = [];
        this.buildBoard();
    }

    buildBoard() {
        // Build our initial cells that only hold their position
        for (let x = 0; x < 8; x += 1) {
            const res = [];
            for (let y = 0; y < 8; y += 1) {
                res.push(new cell([x, y]));
            }
            this.cells.push(res);
        }

        // Link the respective linked cells to each cell
        this.cells.forEach((x) => {
            x.forEach((y) => {
                this.linkCell(y.position);
            });
        });
    }

    // function that builds a cell
    linkCell(position) {
        const coords = new Map();

        const lb = [position[0] - 2, position[1] - 1];
        coords.set("lb", lb);

        const lt = [position[0] - 2, position[1] + 1];
        coords.set("lt", lt);

        const tl = [position[0] - 1, position[1] + 2];
        coords.set("tl", tl);

        const tr = [position[0] + 1, position[1] + 2];
        coords.set("tr", tr);

        const rt = [position[0] + 2, position[1] + 1];
        coords.set("rt", rt);

        const rb = [position[0] + 2, position[1] - 1];
        coords.set("rb", rb);

        const br = [position[0] + 1, position[1] - 2];
        coords.set("br", br);

        const bl = [position[0] - 1, position[1] - 2];
        coords.set("bl", bl);

        coords.forEach((value, key) => {
            if (value[0] > -1 && value[1] > -1) {
                this.cells[position[0]][position[1]][key] = value;
            } else {
                this.cells[position[0]][position[1]][key] = null;
            }
        });
    }
}

class cell {
    constructor(position) {
        this.position = position; // stores current location
        this.lb = [0, 0];
        this.lt = [0, 0];
        this.tl = [0, 0];
        this.tr = [0, 0];
        this.rt = [0, 0];
        this.rb = [0, 0];
        this.br = [0, 0];
        this.bl = [0, 0];
    }
}

let testBoard = new chessBoard();
console.log(testBoard);
