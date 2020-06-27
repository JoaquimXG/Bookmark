import assets from "./assetDump";

const parseAssets = assets => {
    const assetRows = assets.map(asset => ({ data: [asset.name, asset.type, asset.external_ip, asset.model], id: asset.id }));
    return assetRows
};

const templateArr = [
    "A Primary Column",
    "A Secondary Column",
    "Some Extra Information",
    "An Author"
];

function createData(firstRow, templateArr, x = 20) {
    var returnArr = [];
    returnArr.push(firstRow);

    for (let i = 0; i < x; i++) {
        returnArr.push({ data: templateArr, id: i });
    }
    return returnArr;
}

export const credentialColumns = [
    {
        id: "name",
        label: "Username"
    },
    {
        id: "type",
        label: "Credential Type"
    },
    {
        id: "location",
        label: "Item location"
    },
    {
        id: "author",
        label: "Created By"
    }
];

const firstCredentialRow = {
    data: ["WORKSPACE/admin", "Some Type", "Aberdeen", "Joaquim Gomez"],
    id: "-1"
};

export const credentialRows = createData(firstCredentialRow, templateArr, 20);

export const assetColumns = [
    {
        id: "name",
        label: "Asset Name"
    },
    {
        id: "type",
        label: "Asset Type"
    },
    {
        id: "ext_ip",
        label: "External IP"
    },
    {
        id: "model",
        label: "Model"
    }
];

export const assetRows = parseAssets(assets);

export const locationColumns = [
    {
        id: "name",
        label: "Location Name"
    },
    {
        id: "type",
        label: "Location Type"
    },
    {
        id: "location",
        label: "Location Address"
    },
    {
        id: "author",
        label: "Created By"
    }
];

const firstLocationRow = {
    data: [
        "High Street Office",
        "Head Office",
        "1 Some Road, Aberdeen",
        "Joaquim Gomez"
    ],
    id: "id"
};

export const locationRows = createData(firstLocationRow, templateArr, 20);

export const contactColumns = [
    {
        id: "name",
        label: "Contact Name"
    },
    {
        id: "type",
        label: "Contact Type"
    },
    {
        id: "location",
        label: "Contact Address"
    },
    {
        id: "author",
        label: "Created By"
    }
];

const firstContactRow = {
    data: [
        "High Street Office",
        "Head Office",
        "1 Some Road, Aberdeen",
        "Joaquim Gomez"
    ],
    id: "id"
};

export const contactRows = createData(firstContactRow, templateArr, 20);

export const SiteSummaryColumns = [
    {
        id: "name",
        label: "Site Name"
    },
    {
        id: "type",
        label: "Site Function"
    },
    {
        id: "location",
        label: "Site Address"
    },
    {
        id: "author",
        label: "Created By"
    }
];

const firstSiteSummaryRow = {
    data: [
        "High Street Office",
        "Head Office",
        "1 Some Road, Aberdeen",
        "Joaquim Gomez"
    ],
    id: "id"
};

export const siteSummaryRows = createData(firstSiteSummaryRow, templateArr, 20);

export const applicationColumns = [
    {
        id: "name",
        label: "Application Name"
    },
    {
        id: "function",
        label: "Application Function"
    },
    {
        id: "vendor",
        label: "Application Vendor"
    },
    {
        id: "author",
        label: "Created By"
    }
];

const firstApplicationRow = {
    data: ["Main Server", "Alto", "Daily", "Joaquim Gomez"],
    id: "id"
};

export const applicationRows = createData(firstApplicationRow, templateArr, 20);

export const backupColumns = [
    {
        id: "name",
        label: "Backup Subject"
    },
    {
        id: "type",
        label: "Backup Type"
    },
    {
        id: "schedule",
        label: "Backup Schedule"
    },
    {
        id: "author",
        label: "Created By"
    }
];

const firstBackupRow = {
    data: ["Cloud Backup", "Backup", "Veeam", "Joaquim Gomez"],
    id: "id"
};

export const backupRows = createData(firstBackupRow, templateArr, 20);

export const checklistColumns = [
    {
        id: "name",
        label: "Checklist Name"
    },
    {
        id: "subject",
        label: "Assigned To"
    },
    {
        id: "due",
        label: "Due By"
    },
    {
        id: "author",
        label: "Created By"
    }
];

const firstChecklistRow = {
    data: ["Finish UX Design", "Joaquim Gomez", "Today", "Joaquim Gomez"],
    id: "id"
};

export const checklistRows = createData(firstChecklistRow, templateArr, 20);

export const printerColumns = [
    {
        id: "name",
        label: "Printer Name"
    },
    {
        id: "vendor",
        label: "Printer Vendor"
    },
    {
        id: "location",
        label: "Printer Location"
    },
    {
        id: "author",
        label: "Created By"
    }
];

const firstPrinterRow = {
    data: ["Generic-0f24r", "Olivetti", "Reception", "Joaquim Gomez"],
    id: "id"
};

export const printerRows = createData(firstPrinterRow, templateArr, 20);
