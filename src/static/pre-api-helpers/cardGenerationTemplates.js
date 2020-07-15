const contactTemplate = {
    header: "name",

    cards: [
        {
            title: "Contact Information",
            content: [{title: "email"}, {title: "phone"}, {title: "extension"}, {title: "mobile"}, {title: "fax"}],
            columns: {
                xs: 4
            }
        },
        {
            title: "Additional Information",
            content: [{title: "name"}, {title: "middle_name"}, {title: "last_name"}, {title: "type"}, {title: "job_title"}],
            columns: {
                xs: 4
            }
        },
        {
            title: "Notes",
            content: [{title: "notes"}],
            columns: {
                xs: 12
            }
        }
    ]
}

const backupTemplate = {
    header: "name",

    cards: [
        {
            title: "Schedule",
    content: [{title: "start_time"}, {title: "full_backup"}, {title: "differential"}, {title: "incremental"}],
            columns: {
                xs: 4
            }
        },
        {
            title: "Additional Information",
            content: [{title: "vendor"}, {title: "type"}, {title: "location"}],
            columns: {
                xs: 4
            }
        },
        {
            title: "Retention Details", 
            content: [{title: "retention_details"}],
            columns: {
                xs: 4
            }
        },
        {
            title: "Notes",
            content: [{title: "notes"}],
            columns: {
                xs: 12
            }
        }
    ]
}

const locationTemplate = {
    header: "name",

    cards: [
        {
            title: "Address",
            content: [{title: "addr_1"}, {title: "addr_2"}, {title: "city"}, {title: "postcode"}, {title: "state"},{title: "country"}],
            columns: {
                xs: 4
            }
        },
        {
            title: "Additional Information",
            content: [{title: "phone"}, {title: "fax"}, {title: "type"}],
            columns: {
                xs: 4
            }
        },
        {
            title: "notes",
            content: [{title: "notes"}],
            columns: {
                xs: 12
            }
        }
    ]
}

const credentialTemplate = {
    header: "name",

    cards: [
        {
            title: "Credentials",
            content: [{title: "name", required: true}, {title: "password", required: true}, {title: "url"}],
            columns: {
                xs: 4
            }
        },
        {
            title: "Additional Information",
            content: [{title: "description"}, {title: "type"}, {title: "client"}, {title: "folder"}],
            columns: {
                xs: 4
            }
        },
        {
            title: "Notes",
            content: [{title: "notes"}],
            columns: {
                xs: 12
            }
        }

    ]
}
const assetTemplate = {
    header: "name",

    cards: [
        {
            title: "Networking",
            content: [{title: "internal_ip"}, {title: "external_ip"}, {title: "hostname"}, {title: "domain"}],
            columns: {
                xs: 4
            }
        },
        {
            title: "Usage",
            content: [{title: "creation_date"}, {title: "last_user"}, {title: "last_audit"}],
            columns: {
                xs: 4
            }
        },
        {
            title: "Technical",
            content: [{title: "type"}, {title: "model"}, {title: "serial"}, {title: "os"}],
            columns: {
                xs: 4
            }
        },
        {
            title: "Notes",
            content: [{title: "notes"}],
            columns: {
                xs: 12
            }
        },
        {
            title: "UDF",
            content: [
                {title: "udf1"},
                {title: "udf2"},
                {title: "udf3"},
                {title: "udf4"},
                {title: "udf5"},
                {title: "udf6"},
                {title: "udf7"},
                {title: "udf8"},
                {title: "udf9"},
                {title: "udf10"},
                {title: "udf11"},
                {title: "udf12"}
            ],
            columns: {
                xs: 4
            }
        }
    ]
};

export default {
    assetTemplate,
    credentialTemplate,
    locationTemplate,
    backupTemplate,
    contactTemplate
}
