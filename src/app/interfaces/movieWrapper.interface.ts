import { IMovie } from "./movie.interface";

export interface IMovieWrapper{
    searchType: string;
    expression: string;
    results: IMovie[];
    errorMessage: string;
}