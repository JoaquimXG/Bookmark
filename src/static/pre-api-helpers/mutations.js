import { gql } from "apollo-boost";

const locationsMutation = {
    mutation: gql`
        mutation location($id: ID!, $site_id: ID!, $name: String!, $type: String!) {
            location(name: $name, type: $type, id: $id, site_id: $site_id, isnew: Boolean!) {
                id
                site_id
                name
                type
                isnew
            }
        }
    `,
    data: "locations"
};
export default {
    locationsMutation
};
