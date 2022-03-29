import {FC} from "react";
import {useQuery} from "@apollo/client";
import {directors} from "../graphql/queries/directors";
import {Director} from "../types/Director";
import {DirectorsList} from "./DirectorsList";

export const Directors: FC = () => {
    const {loading, error, data} = useQuery<{ directors: Director[] }>(directors);

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    return data ? (
        <DirectorsList directors={data.directors}/>
    ) : null;
};