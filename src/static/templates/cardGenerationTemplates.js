const contact = {
    header: { title: "name" },

    cards: [
        {
            minorTitle: "Contact Information",
            fields: [
                { title: "Email", ref: "email" },
                { title: "Landline", ref: "phone" },
                { title: "Extension", ref: "extension" },
                { title: "Mobile Number", ref: "mobile" },
                { title: "Fax", ref: "fax" }
            ],
            columns: { xs: 4 }
        },
        {
            minorTitle: "Additional Information",
            fields: [
                { title: "First Name", ref: "name" },
                { title: "Middle Name", ref: "middle_name" },
                { title: "Last Name", ref: "last_name" },
                { title: "Contact Type", ref: "type" },
                { title: "Job Title", ref: "job_title" }
            ],
            columns: { xs: 4 }
        },
        {
            minorTitle: "Notes",
            fields: [{ title: "Notes", ref: "notes" }],
            columns: { xs: 12 }
        }
    ]
};
const backup = {
    header: { title: "name" },
    cards: [
        {
            minorTitle: "Schedule",
            fields: [
                { title: "Start Time", ref: "start_time" },
                { title: "Full Backup", ref: "full_backup" },
                { title: "Differential Backup", ref: "differential" },
                { title: "Incremental Backup", ref: "incremental" }
            ],
            columns: { xs: 4 }
        },
        {
            minorTitle: "Additional Information",
            fields: [
                { title: "Backup Vendor", ref: "vendor" },
                { title: "Backup Type", ref: "type" },
                { title: "Storage Location", ref: "location" }
            ],
            columns: { xs: 4 }
        },
        {
            minorTitle: "Retention Details",
            fields: [{ title: "Retention Details", ref: "retention_details" }],
            columns: { xs: 4 }
        },
        {
            minorTitle: "Notes",
            fields: [{ title: "Notes", ref: "notes" }],
            columns: { xs: 12 }
        }
    ]
};
const location = {
    header: { title: "name" },
    cards: [
        {
            minorTitle: "Address",
            fields: [
                { title: "Address Line 1", ref: "addr_1" },
                { title: "Address Line 2", ref: "addr_2" },
                { title: "City", ref: "city" },
                { title: "Postcode", ref: "postcode" },
                { title: "State", ref: "state" },
                { title: "Country", ref: "country" }
            ],
            columns: { xs: 4 }
        },
        {
            minorTitle: "Additional Information",
            fields: [
                { title: "Landline", ref: "phone" },
                { title: "Fax", ref: "fax" },
                { title: "Location Type", ref: "type" }
            ],
            columns: { xs: 4 }
        },
        {
            minorTitle: "notes",
            fields: [{ title: "Notes", ref: "notes" }],
            columns: { xs: 12 }
        }
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
            minorTitle: "Networking",
            fields: [
                { title: "Internal IP", ref: "internal_ip", disabled: true },
                { title: "External IP", ref: "external_ip", disabled: true },
                { title: "Hostname", ref: "hostname", disabled: true },
                { title: "Domain", ref: "domain", disabled: true }
            ],
            columns: {
                xs: 4
            }
        },
        {
            minorTitle: "Usage",
            fields: [
                { title: "Creation Date", ref: "creation_date", disabled: true },
                { title: "Last Logged in User", ref: "last_user", disabled: true },
                { title: "Last Audit", ref: "last_audit", disabled: true }
            ],
            columns: {
                xs: 4
            }
        },
        {
            minorTitle: "Technical",
            fields: [
                { title: "Asset Type", ref: "type", disabled: true },
                { title: "Model Number", ref: "model", disabled: true },
                { title: "Serial Number", ref: "serial", disabled: true },
                { title: "Operating System", ref: "os", disabled: true }
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
        },
        {
            minorTitle: "UDF",
            fields: [
                { title: "UDF1", ref: "udf1" },
                { title: "UDF2", ref: "udf2" },
                { title: "UDF3", ref: "udf3" },
                { title: "UDF4", ref: "udf4" },
                { title: "UDF5", ref: "udf5" },
                { title: "UDF6", ref: "udf6" },
                { title: "UDF7", ref: "udf7" },
                { title: "UDF8", ref: "udf8" },
                { title: "UDF9", ref: "udf9" },
                { title: "UDF10", ref: "udf10" },
                { title: "UDF11", ref: "udf11" },
                { title: "UDF12", ref: "udf12" }
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
