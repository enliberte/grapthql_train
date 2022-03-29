import {FC} from "react";
import {Movie} from "../types/Movie";

type MoviesListProps = {
    movies: Movie[]
};

export const MoviesList: FC<MoviesListProps> = ({movies}) => {
    return (
        <div>
            <div>Movies List</div>
            {movies.map(({name, id, rating, year}) => (
                <div>
                    <div>Movie</div>
                    <div>Id: {id}</div>
                    <div>Name: {name}</div>
                    <div>Year: {year}</div>
                    <div>Rating: {rating}</div>
                </div>
            ))}
        </div>
    );
};