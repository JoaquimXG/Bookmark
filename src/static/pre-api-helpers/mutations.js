import { gql } from "apollo-boost";

const credential = {
    delete: gql`
        mutation deleteCredential($id: ID!, $site_id: ID!) {
            deleteCredential(id: $id, site_id: $site_id)
        }
    `,
    mutation: gql`
    mutation updateCredential(
        $id: ID!
        $site_id: ID!
        $name: String
        $password: String
        $description: String
        $type: String
        $client: String
        $folder:String
        $url: String
        $notes:String
        $isnew: Boolean!
){
  credential(
    credentialinput: {
      id: $id
      site_id: $site_id
      name: $name
      password: $password
      description: $description
      type: $type
      client: $client
      folder: $folder
      url: $url
      notes: $notes
      isnew: $isnew
    }
  ) {
    updatedRow {
      id
      site_id
      name
      password
      description
      type
      client
      folder
      url
      notes
    }
    isnew
    error{
      field
      message
    }
  }
}
    `,
    data: "credentials"
};

const location = {
    delete: gql`
        mutation deleteLocation($id: ID!, $site_id: ID!) {
            deleteLocation(id: $id, site_id: $site_id)
        }
    `,
    mutation: gql`
        mutation updateLocation(
            $id: ID!
            $site_id: ID!
            $isnew: Boolean!
            $name: String!
            $phone: String
            $fax: String
            $addr_1: String
            $addr_2: String
            $postcode: String
            $city: String
            $state: String
            $country: String
            $notes: String
            $type: String
        ) {
            location(
                locationinput: {
                    id: $id
                    site_id: $site_id
                    isnew: $isnew
                    name: $name
                    phone: $phone
                    fax: $fax
                    addr_1: $addr_1
                    addr_2: $addr_2
                    postcode: $postcode
                    city: $city
                    state: $state
                    country: $country
                    notes: $notes
                    type: $type
                }
            ) {
                updatedRow {
                    id
                    site_id
                    name
                    phone
                    fax
                    addr_1
                    addr_2
                    postcode
                    city
                    state
                    country
                    notes
                    type
                }
                error {
                    field
                    message
                }
                isnew
            }
        }
    `,
    data: "locations"
};

export default {
    location,
    credential
};
