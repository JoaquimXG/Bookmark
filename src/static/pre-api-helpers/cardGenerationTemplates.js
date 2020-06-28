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
}
