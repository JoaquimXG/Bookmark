const contact = {
    header: { title: "name" },

    cards: [
        {
            title: "Contact Information",
            content: [
                { title: "email" },
                { title: "phone" },
                { title: "extension" },
                { title: "mobile" },
                { title: "fax" }
            ],
            columns: { xs: 4 }
        },
        {
            title: "Additional Information",
            content: [
                { title: "name" },
                { title: "middle_name" },
                { title: "last_name" },
                { title: "type" },
                { title: "job_title" }
            ],
            columns: { xs: 4 }
        },
        { title: "Notes", content: [{ title: "notes" }], columns: { xs: 12 } }
    ]
};
const backup = {
    header: { title: "name" },
    cards: [
        {
            title: "Schedule",
            content: [
                { title: "start_time" },
                { title: "full_backup" },
                { title: "differential" },
                { title: "incremental" }
            ],
            columns: { xs: 4 }
        },
        {
            title: "Additional Information",
            content: [
                { title: "vendor" },
                { title: "type" },
                { title: "location" }
            ],
            columns: { xs: 4 }
        },
        {
            title: "Retention Details",
            content: [{ title: "retention_details" }],
            columns: { xs: 4 }
        },
        { title: "Notes", content: [{ title: "notes" }], columns: { xs: 12 } }
    ]
};
const location = {
    header: { title: "name" },
    cards: [
        {
            title: "Address",
            content: [
                { title: "addr_1" },
                { title: "addr_2" },
                { title: "city" },
                { title: "postcode" },
                { title: "state" },
                { title: "country" }
            ],
            columns: { xs: 4 }
        },
        {
            title: "Additional Information",
            content: [{ title: "phone" }, { title: "fax" }, { title: "type" }],
            columns: { xs: 4 }
        },
        { title: "notes", content: [{ title: "notes" }], columns: { xs: 12 } }
    ]
};
const credential = {
    header: { title: "name" },

    cards: [
        {
            minorTitle: "Credentials",
            fields: [
                { title: "Username", ref: "name", required: true },
                { title: "Password", ref: "password", required: true },
                { title: "URL", ref: "url" }
            ],
            columns: {
                xs: 4
            }
        },
        {
            minorTitle: "Additional Information",
            fields: [
                { title: "Description", ref: "description" },
                { title: "Credential Type", ref: "type" },
                { title: "Client", ref: "client" },
                { title: "Folder", ref: "folder" }
            ],
            columns: {
                xs: 4
            }
        },
        {
            minorTitle: "Notes",
            fields: [{ title: "Notes", ref: "notes" }],
            columns: {
                xs: 12
            }
        }
    ]
};
const asset = {
    header: { title: "name", disabled: true },

    cards: [
        {
            title: "Networking",
            content: [
                { title: "internal_ip", disabled: true },
                { title: "external_ip", disabled: true },
                { title: "hostname", disabled: true },
                { title: "domain", disabled: true }
            ],
            columns: {
                xs: 4
            }
        },
        {
            title: "Usage",
            content: [
                { title: "creation_date", disabled: true },
                { title: "last_user", disabled: true },
                { title: "last_audit", disabled: true }
            ],
            columns: {
                xs: 4
            }
        },
        {
            title: "Technical",
            content: [
                { title: "type", disabled: true },
                { title: "model", disabled: true },
                { title: "serial", disabled: true },
                { title: "os", disabled: true }
            ],
            columns: {
                xs: 4
            }
        },
        {
            title: "Notes",
            content: [{ title: "notes" }],
            columns: {
                xs: 12
            }
        },
        {
            title: "UDF",
            content: [
                { title: "udf1" },
                { title: "udf2" },
                { title: "udf3" },
                { title: "udf4" },
                { title: "udf5" },
                { title: "udf6" },
                { title: "udf7" },
                { title: "udf8" },
                { title: "udf9" },
                { title: "udf10" },
                { title: "udf11" },
                { title: "udf12" }
            ],
            columns: {
                xs: 4
            }
        }
    ]
};

export default {
    asset,
    credential,
    location,
    backup,
    contact
};
