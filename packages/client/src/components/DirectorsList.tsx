import {FC} from "react";
import {Director} from "../types/Director";
import {MoviesList} from "./MoviesList";

type DirectorsListProps = {
    directors: Director[];
};

export const DirectorsList: FC<DirectorsListProps> = ({directors}) => {
    return (
        <div>
            <div>Directors List</div>
            {directors.map(({id, name, movies, birthday}) => (
                <div>
                    <div>Director</div>
                    <div>Id: {id}</div>
                    <div>Name: {name}</div>
                    <div>Birthday: {birthday}</div>
                    <MoviesList movies={movies}/>
                </div>
            ))}
        </div>
    )
};