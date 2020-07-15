import { gql } from "apollo-boost";

const backup = {
    delete: gql`
        mutation deleteBackup($id: ID!, $site_id: ID!) {
            deleteBackup(id: $id, site_id: $site_id)
        }
    `,
    mutation: gql`
        mutation updateBackup(
            $id: ID!
            $site_id: ID!
            $name: String!
            $vendor: String
            $type: String
            $location: String
            $full_backup: String
            $differential: String
            $incremental: String
            $start_time: String
            $retention_details: String
            $notes: String
            $isnew: Boolean!
        ) {
            backup(
                backupinput: {
                    id: $id
                    site_id: $site_id
                    name: $name
                    vendor: $vendor
                    type: $type
                    location: $location
                    full_backup: $full_backup
                    differential: $differential
                    incremental: $incremental
                    start_time: $start_time
                    retention_details: $retention_details
                    notes: $notes
                    isnew: $isnew
                }
            ) {
                updatedRow {
                    id
                    site_id
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
                error {
                    field
                    message
                }
                isnew
            }
        }
    `,
    data: "backups"
};

const contact = {
    delete: gql`
        mutation deleteContact($id: ID!, $site_id: ID!) {
            deleteContact(id: $id, site_id: $site_id)
        }
    `,
    mutation: gql`
        mutation updateContact(
            $id: ID!
            $site_id: ID!
            $name: String!
            $type: String
            $primary_contact: String
            $job_title: String
            $middle_name: String
            $last_name: String
            $email: String
            $phone: String
            $extension: String
            $mobile: String
            $fax: String
            $notes: String
            $isnew: Boolean!
        ) {
            contact(
                contactinput: {
                    id: $id
                    site_id: $site_id
                    name: $name
                    type: $type
                    primary_contact: $primary_contact
                    job_title: $job_title
                    middle_name: $middle_name
                    last_name: $last_name
                    email: $email
                    phone: $phone
                    extension: $extension
                    mobile: $mobile
                    fax: $fax
                    notes: $notes
                    isnew: $isnew
                }
            ) {
                updatedRow {
                    id
                    site_id
                    name
                    type
                    primary_contact
                    job_title
                    middle_name
                    last_name
                    email
                    phone
                    extension
                    mobile
                    fax
                    notes
                }
                error {
                    field
                    message
                }
                isnew
            }
        }
    `,
    data: "contacts"
};

const asset = {
    delete: gql`
        mutation deleteAsset($id: ID!, $site_id: ID!) {
            deleteAsset(id: $id, site_id: $site_id)
        }
    `,
    mutation: gql`
        mutation updateAsset(
            $id: ID!
            $site_id: ID!
            $name: String
            $last_user: String
            $type: String
            $hostname: String
            $domain: String
            $internal_ip: String
            $external_ip: String
            $model: String
            $serial: String
            $os: String
            $notes: String
            $udf1: String
            $udf2: String
            $udf3: String
            $udf4: String
            $udf5: String
            $udf6: String
            $udf7: String
            $udf8: String
            $udf9: String
            $udf10: String
            $udf11: String
            $udf12: String
            $isnew: Boolean!
        ) {
            asset(
                assetinput: {
                    id: $id
                    site_id: $site_id
                    name: $name
                    last_user: $last_user
                    type: $type
                    hostname: $hostname
                    domain: $domain
                    internal_ip: $internal_ip
                    external_ip: $external_ip
                    model: $model
                    serial: $serial
                    os: $os
                    notes: $notes
                    udf1: $udf1
                    udf2: $udf2
                    udf3: $udf3
                    udf4: $udf4
                    udf5: $udf5
                    udf6: $udf6
                    udf7: $udf7
                    udf8: $udf8
                    udf9: $udf9
                    udf10: $udf10
                    udf11: $udf11
                    udf12: $udf12
                    isnew: $isnew
                }
            ) {
                updatedRow {
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
                error {
                    field
                    message
                }
                isnew
            }
        }
    `,
    data: "assets"
};

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
            $name: String!
            $password: String!
            $description: String
            $type: String
            $client: String
            $folder: String
            $url: String
            $notes: String
            $isnew: Boolean!
        ) {
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
                error {
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
    credential,
    asset,
    contact,
    backup
};
