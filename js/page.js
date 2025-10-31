export class Page {
    constructor(maker) {
        this.dom = maker;
    }
    make() {
        return this.dom();
    }
}
