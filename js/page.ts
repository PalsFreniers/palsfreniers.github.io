type PageMake = () => string;

export class Page {
        dom: PageMake;
        constructor(maker: PageMake) {
                this.dom = maker;
        }

        public make(): string {
                return this.dom();
        }
}
