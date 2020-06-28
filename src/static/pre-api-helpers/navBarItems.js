import React from 'react';

import {
    DesktopWindowsSharp,
    VpnKeySharp,
    LocationOnSharp,
    ContactsSharp,
    BusinessSharp,
    AppsSharp,
    BackupSharp,
    DoneAllSharp,
    PrintSharp
} from "@material-ui/icons";

export default [
    {
        listIcon: <VpnKeySharp htmlColor="Black" />,
        listText: "Credentials",
        selected: true
    },
    {
        listIcon: <DesktopWindowsSharp htmlColor="Black" />,
        listText: "Assets"
    },
    {
        listIcon: <LocationOnSharp htmlColor="Black" />,
        listText: "Locations"
    },
    {
        listIcon: <ContactsSharp htmlColor="Black" />,
        listText: "Contacts"
    },
    {
        listIcon: <BackupSharp htmlColor="Black" />,
        listText: "Backups"
    },
    {
        listIcon: <BusinessSharp htmlColor="Black" />,
        listText: "Site Summaries"
    },
    {
        listIcon: <AppsSharp htmlColor="Black" />,
        listText: "Applications"
    },
    {
        listIcon: <DoneAllSharp htmlColor="Black" />,
        listText: "Checklists"
    },
    {
        listIcon: <PrintSharp htmlColor="Black" />,
        listText: "Printers"
    }
];
