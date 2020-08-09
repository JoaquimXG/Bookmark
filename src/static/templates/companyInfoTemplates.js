//External Imports
import React from "react";
import {
    NotificationImportantSharp,
    AttachFileSharp,
    VpnKeySharp
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

export const buttons = {
    primary: [
        {
            icon: PictureAsPdfSharp,
            color: "grey",
            text: "Runbook"
        },
        {
            icon: CreateSharp,
            color: "blue",
            text: "Edit"
        }
    ],

    secondary: [
        {
            icon: CreateSharp,
            color: "blue",
            text: "Edit"
        },
        {
            icon: FileCopySharp,
            color: "grey",
            text: "Merge"
        },
        {
            icon: AddSharp,
            color: "green",
            text: "New"
        }
    ]
};

export const proxyGqlQueryResponseData = {
    notes:
        "This is where some notes can be kept about the item. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",

    asset: "An Asset",
    contact1: "Another Another Contact",
    contact2: "Another Another Contact",
    contact3: "Another Another Contact",
    credential: "A Credential",
    name: "Company Info"
};

export const primaryCardTemplate = {
    header: { title: "name" },

    cards: [
        {
            title: "Company Notes",
            content: [{ title: "notes" }],
            columns: { xs: 12 }
        },
        {
            title: "Recently Viewed",
            content: [{ title: "credential" }, { title: "asset" }],
            columns: { xs: 4 }
        },
        {
            title: "Recently Edited",
            content: [{ title: "credential" }, { title: "asset" }],
            columns: { xs: 4 }
        },
        {
            title: "Important Contacts",
            content: [
                { title: "contact1" },
                { title: "contact2" },
                { title: "contact3" },
            ],
            columns: { xs: 4 }
        }
    ]
};

export const secondaryCardData = [
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
        title: "Top Attachments",
        caption: time => `Last Viewed: ${time}`,
        body: (author, item) => `${author}: ${item}`,
        icon: <AttachFileSharp style={{ marginRight: theme.spacing(1) }} />,
        data: null
    },
    {
        title: "Top Credentials",
        caption: time => `Last Viewed: ${time}`,
        body: (author, item) => `${author}: ${item}`,
        icon: <VpnKeySharp style={{ marginRight: theme.spacing(1) }} />,
        data: null
    }
];

