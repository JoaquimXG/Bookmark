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

const credentialColumns = [
    {
        id: "name",
        label: "Username"
    },
    {
        id: "type",
        label: "Credential Type"
    },
    {
        id: "description",
        label: "Description"
    },
    {
        id: "folder",
        label: "Folder"
    }
];

const assetColumns = [
    {
        id: "name",
        label: "Asset Name"
    },
    {
        id: "type",
        label: "Asset Type"
    },
    {
        id: "external_ip",
        label: "External IP"
    },
    {
        id: "model",
        label: "Model"
    }
];

const locationColumns = [
    {
        id: "name",
        label: "Location Name"
    },
    {
        id: "type",
        label: "Location Type"
    },
    {
        id: "postcode",
        label: "Postcode"
    },
    {
        id: "city",
        label: "City"
    }
];

const contactColumns = [
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

const siteSummaryColumns = [
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

const siteSummarys = createData(firstSiteSummaryRow, templateArr, 20);

const applicationColumns = [
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

const applications = createData(firstApplicationRow, templateArr, 20);

const backupColumns = [
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

const checklistColumns = [
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

const checklists = createData(firstChecklistRow, templateArr, 20);

const printerColumns = [
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

const printers = createData(firstPrinterRow, templateArr, 20);

export const rows = {
    siteSummarys,
    applications,
    checklists,
    printers
};

export const columns = {
    credentialColumns,
    assetColumns,
    locationColumns,
    contactColumns,
    backupColumns,
    siteSummaryColumns,
    applicationColumns,
    checklistColumns,
    printerColumns

}
