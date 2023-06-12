// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  type TMovieRatings = {
    Source: string;
    Value: string;
  };

  interface IMovie {
    Title: string;
    Year: string;
    Released: string;
    Genre: string;
    Director: string;
    Plot: string;
    Poster: string;
    Ratings: TMovieRatings[];
    imdbRating: string;
  }
}

export {};
