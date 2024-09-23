// test/Movie.test.ts
import { Movie } from '../src/Movie';

describe('Movie', () => {
    let movie: Movie;

    beforeEach(() => {
        movie = new Movie('1', 'Inception', 'Christopher Nolan', 10, 2010);
    });

    it('should create a movie instance', () => {
        expect(movie).toBeInstanceOf(Movie);
        expect(movie.title).toBe('Inception');
    });

    it('should return movie details', () => {
        expect(movie.getDetails()).toBe('Inception directed by Christopher Nolan');
    });
});
