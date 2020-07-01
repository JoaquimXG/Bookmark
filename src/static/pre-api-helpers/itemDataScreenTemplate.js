import activityFeedData from "./activityFeed";
import React from "react";
import {
    NotificationImportantSharp,
    AttachFileSharp,
    DeleteOutlineSharp,
    LinkSharp
} from "@material-ui/icons";
import { themeColors } from "../../App";
import { createMuiTheme } from "@material-ui/core";
import {
    CreateSharp,
    PictureAsPdfSharp,
    AddSharp,
    FileCopySharp
} from "@material-ui/icons";

const theme = createMuiTheme();

const buttons = {
    primary: [
        {
            icon: DeleteOutlineSharp,
            get color() {
                return themeColors.error;
            },
            text: "Delete",
            textColor: "black"
        },
        {
            icon: CreateSharp,
            get color() {
                return themeColors.secondary5;
            },
            text: "Edit"
        },
        {
            icon: AddSharp,
            get color() {
                return themeColors.success;
            },
            text: "New"
        }
    ],

    secondary: [
        {
            icon: CreateSharp,
            get color() {
                return themeColors.secondary5;
            },
            text: "Edit"
        },
        {
            icon: PictureAsPdfSharp,
            get color() {
                return themeColors.primary5;
            },
            text: "PDF"
        },
        {
            icon: FileCopySharp,
            get color() {
                return themeColors.primary5;
            },
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
