import "./static/reset.css";
import "./static/style.css";

import Cell from "./cell";

class ChessBoard {
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
                res.push(new Cell([x, y]));
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
            if (value[0] > -1 && value[1] > -1 && value[0] < 8 && value[1] < 8) {
                this.cells[position[0]][position[1]][key] = this.cells[value[0]][value[1]];
            } else {
                this.cells[position[0]][position[1]][key] = null;
            }
        });
    }

    knightMoves(start, end) {
        const startCell = this.cells[start[0]][start[1]];
        const mq = [[startCell.position]];
        const queue = [startCell];

        while (queue.length !== 0) {
            const current = queue[0];

            if (current.position[0] === end[0] && current.position[1] === end[1]) {
                console.log(`You made it in ${mq[0].length - 1} moves! Here's your path:`);
                mq[0].forEach((move) => {
                    console.log(move);
                });
                return true;
            }

            if (current.lb != null) {
                queue.push(current.lb);
                const mh = mq[0].slice();
                mh.push(current.lb.position);
                mq.push(mh);
            }
            if (current.lt != null) {
                queue.push(current.lt);
                const mh = mq[0].slice();
                mh.push(current.lt.position);
                mq.push(mh);
            }
            if (current.tl != null) {
                queue.push(current.tl);
                const mh = mq[0].slice();
                mh.push(current.tl.position);
                mq.push(mh);
            }
            if (current.tr != null) {
                queue.push(current.tr);
                const mh = mq[0].slice();
                mh.push(current.tr.position);
                mq.push(mh);
            }
            if (current.rt != null) {
                queue.push(current.rt);
                const mh = mq[0].slice();
                mh.push(current.rt.position);
                mq.push(mh);
            }
            if (current.rb != null) {
                queue.push(current.rb);
                const mh = mq[0].slice();
                mh.push(current.rb.position);
                mq.push(mh);
            }
            if (current.br != null) {
                queue.push(current.br);
                const mh = mq[0].slice();
                mh.push(current.br.position);
                mq.push(mh);
            }
            if (current.bl != null) {
                queue.push(current.bl);
                const mh = mq[0].slice();
                mh.push(current.bl.position);
                mq.push(mh);
            }
            mq.shift();
            queue.shift(); // Remove element at the front
        }

        return false;
    }
}

const testBoard = new ChessBoard();
testBoard.knightMoves([3, 3], [4, 3]);
