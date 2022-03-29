import {Movie} from "./Movie";

export type Director = {
    id: string;
    name: string;
    birthday: number;
    movies: Movie[];
}