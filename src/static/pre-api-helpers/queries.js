import { gql } from "apollo-boost";

const credentialsList = {
    query: gql`
    {
        credentials(site_id: 12345) {
            id
            name
            type
            description
            folder
        }
    } `,
    data: "credentials",
};

const assetsList = {
    query: gql`
    {
        assets(site_id: 235549) {
            id
            name
            type
            external_ip
            model
        }
    } `,
    data: "assets",
};

const locationsList = {

    query: gql`
    {
        locations(site_id: 12345) {
            id
            name
            type
            postcode
            city
        }
    }`,
    data: "locations",
};

const contactsList = {
    query: gql`
    {
        contacts(site_id: 12345) {
            id
            name
            type
            mobile
            email
        }
    }`,
    data: "contacts"
};

const backupsList = {
    query: gql`
    {
        backups(site_id: 12345) {
            id
            name
            type
            start_time
            vendor
        }
    }`,
    data: "backups"
};

export default {
    assetsList,
    credentialsList,
    locationsList,
    contactsList,
    backupsList
}
