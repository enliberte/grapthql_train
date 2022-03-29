import {gql} from "@apollo/client";

export const directors = gql`
    query {
        directors {
            id
            name
            birthday
            movies {
                id
                name
                year
                rating
            }
        }
    }
`;