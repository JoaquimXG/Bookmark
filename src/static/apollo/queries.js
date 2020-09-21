//External Imports
import { gql } from "@apollo/client";

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
        }
    `,
    data: "credentials"
};

const assetsList = {
    query: gql`
        {
            assets(site_id: 12345) {
                id
                name
                type
                external_ip
                model
            }
        }
    `,
    data: "assets"
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
        }
    `,
    data: "locations"
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
        }
    `,
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
        }
    `,
    data: "backups"
};

export const itemListQueries = {
    asset: assetsList,
    credential: credentialsList,
    location: locationsList,
    contact: contactsList,
    backup: backupsList
};

const credential = {
    query: gql`
        query credential($id: Int!) {
            credential(id: $id) {
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
        }
    `
};

const asset = {
    query: gql`
        query asset($id: ID!) {
            asset(asset_id: $id) {
                id
                site_id
                name
                last_user
                type
                last_audit
                creation_date
                hostname
                domain
                internal_ip
                external_ip
                model
                serial
                os
                notes
                udf1
                udf2
                udf3
                udf4
                udf5
                udf6
                udf7
                udf8
                udf9
                udf10
                udf11
                udf12
            }
        }
    `
};

const location = {
    query: gql`
        query location($id: Int!) {
            location(id: $id) {
                id
                name
                type
                phone
                addr_1
                addr_2
                postcode
                city
                state
                country
                notes
                fax
            }
        }
    `
};

const contact = {
    query: gql`
        query contact($id: Int!) {
            contact(id: $id) {
                id
                name
                type
                primary_contact
                job_title
                middle_name
                last_name
                email
                phone
                fax
                extension
                mobile
                notes
            }
        }
    `
};

const backup = {
    query: gql`
        query backup($id: Int!) {
            backup(id: $id) {
                id
                name
                vendor
                type
                location
                full_backup
                differential
                incremental
                start_time
                retention_details
                notes
            }
        }
    `
};

const companyInfo = {
    query: gql`
        query site($id: ID!) {
            site(id: $id) {
                id
                name
                address
            }
        }
    `
};

export const individualQueries = {
    credential,
    asset,
    location,
    contact,
    backup,
    companyInfo
};

export const generatePdfQuery = gql`
    query generatePdf($id: [ID], $site_id: ID!, $template: String){
        generatePdf(id:$id, site_id:$site_id, template:$template)
    }
`;

