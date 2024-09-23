
export class Movie {
    constructor(
        public id: string,
        public title: string,
        public director: string,
        public price: number,
        public year: number 
    ) {}

    getDetails(): string {
        return `${this.title} directed by ${this.director}`;
    }
}
