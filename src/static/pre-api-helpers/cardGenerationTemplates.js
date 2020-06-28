const contactTemplate = {
    header: "name",

    cards: [
        {
            title: "Contact Information",
            content: ["email", "phone", "extension", "mobile", "fax"],
            columns: {
                xs: 4
            }
        },
        {
            title: "Additional Information",
            content: ["name", "middle_name", "last_name", "type", "job_title"],
            columns: {
                xs: 4
            }
        },
        {
            title: "Notes",
            content: ["notes"],
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
            content: ["start_time", "full_backup", "differential", "incremental", "retention_details"],
            columns: {
                xs: 4
            }
        },
        {
            title: "Additional Information",
            content: ["vendor", "type", "location"],
            columns: {
                xs: 4
            }
        },
        {
            title: "Retention Details", 
            content: ["retention_details"],
            columns: {
                xs: 4
            }
        },
        {
            title: "Notes",
            content: ["notes"],
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
            content: ["addr_1", "addr_2", "city", "postcode", "state","country"],
            columns: {
                xs: 4
            }
        },
        {
            title: "Additional Information",
            content: ["phone", "fax", "type"],
            columns: {
                xs: 4
            }
        },
        {
            title: "notes",
            content: ["notes"],
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
            content: ["name", "password", "url"],
            columns: {
                xs: 4
            }
        },
        {
            title: "Additional Information",
            content: ["description", "type", "client", "folder"],
            columns: {
                xs: 4
            }
        },
        {
            title: "Notes",
            content: ["notes"],
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
            content: ["internal_ip", "external_ip", "hostname", "domain"],
            columns: {
                xs: 4
            }
        },
        {
            title: "Usage",
            content: ["creation_date", "last_user", "last_audit"],
            columns: {
                xs: 4
            }
        },
        {
            title: "Technical",
            content: ["type", "model", "serial", "os"],
            columns: {
                xs: 4
            }
        },
        {
            title: "Notes",
            content: ["notes"],
            columns: {
                xs: 12
            }
        },
        {
            title: "UDF",
            content: [
                "udf1",
                "udf2",
                "udf3",
                "udf4",
                "udf5",
                "udf6",
                "udf7",
                "udf8",
                "udf9",
                "udf10",
                "udf11",
                "udf12"
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
