//External Imports
import {
    CreateSharp,
    AddSharp,
    GetAppSharp,
    PublishSharp,
    DeleteOutlineSharp
} from "@material-ui/icons";

//Data and templates
import { themeColors } from "../../static/css/style";

const credential = [
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

const asset = [
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

const location = [
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

const contact = [
    {
        id: "name",
        label: "Contact Name"
    },
    {
        id: "type",
        label: "Contact Type"
    },
    {
        id: "mobile",
        label: "Contact Mobile"
    },
    {
        id: "email",
        label: "Email"
    }
];

const sitesummary = [
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

const application = [
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

const backup = [
    {
        id: "name",
        label: "Backup Subject"
    },
    {
        id: "type",
        label: "Backup Type"
    },
    {
        id: "start_time",
        label: "Start Time"
    },
    {
        id: "vendor",
        label: "Vendor"
    }
];

const checklist = [
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
const printer = [
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

export const buttons = [
    {
        icon: CreateSharp,
        get color() {
            return themeColors.secondary5;
        },
        text: "Edit"
    },
    {
        icon: DeleteOutlineSharp,
        get color() {
            return themeColors.error
        },
        text: "Delete",
        textColor: "black"
    },
    {
        icon: PublishSharp,
        get color() {
            return themeColors.primary5;
        },
        text: "Export"
    },
    {
        icon: GetAppSharp,
        get color() {
            return themeColors.primary5;
        },
        text: "Import"
    },

    {
        icon: AddSharp,
        get color() {
            return themeColors.success;
        },
        text: "New"
    }
];

export const columnHeaders = {
    credential,
    asset,
    location,
    contact,
    backup,
    sitesummary,
    application,
    checklist,
    printer
};
