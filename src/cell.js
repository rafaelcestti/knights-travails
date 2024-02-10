export default class cell {
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
