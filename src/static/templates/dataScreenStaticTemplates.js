//External Imports
import React from "react";
import {
    NotificationImportantSharp,
    AttachFileSharp,
    DeleteOutlineSharp,
    LinkSharp,
    SaveSharp
} from "@material-ui/icons";
import { createMuiTheme } from "@material-ui/core";
import {
    CreateSharp,
    PictureAsPdfSharp,
    AddSharp,
    FileCopySharp
} from "@material-ui/icons";

//Data and templates
import { themeColors } from "../../static/css/style";
import activityFeedData from "./activityFeedTemporaryData";

const theme = createMuiTheme();

const buttons = {
    primary: [
        {
            icon: DeleteOutlineSharp,
            color: "red",
            text: "Delete",
            textColor: "black",
        },
        {
            icon: CreateSharp,
            color: "blue",
            text: "Edit",
            save: {
                icon: SaveSharp,
                color: "blue",
                text: "Save",
            }
        },
        {
            icon: AddSharp,
            color: "green",
            text: "New"
        }
    ],

    secondary: [
        {
            icon: CreateSharp,
            color: "blue",
            text: "Edit",
            save: {
                icon: SaveSharp,
                color: "blue",
                text: "Save",
            }
        },
        {
            icon: PictureAsPdfSharp,
            color: "grey",
            text: "PDF"
        },
        {
            icon: FileCopySharp,
            color: "grey",
            text: "Copy"
        },
    ]
};

const secondaryCardData = [
    {
        title: "Attachments",
        caption: time => `Last Viewed: ${time}`,
        body: (author, item) => `${author}: ${item}`,
        icon: <AttachFileSharp style={{ marginRight: theme.spacing(1) }} />,
        data: activityFeedData,
        addFile: true
    },
    {
        title: "Activity Feed",
        caption: (type, time) => `${type} - ${time}`,
        body: (author, item) => `${author} updated: ${item}`,
        icon: (
            <NotificationImportantSharp
                style={{
                    get color() {
                        return themeColors.error;
                    },
                    marginRight: theme.spacing(1)
                }}
            />
        ),
        data: activityFeedData
    },
    {
        title: "Linked Items",
        caption: (type, time) => `${type} - ${time}`,
        body: (author, item) => `${item}`,
        icon: <LinkSharp style={{ marginRight: theme.spacing(1) }} />,
        data: activityFeedData
    }
];

export default {
    secondaryCardData,
    buttons,
}
