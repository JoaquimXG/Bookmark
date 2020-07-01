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
        id: 1,
        listIcon: <VpnKeySharp htmlColor="Black" />,
        listText: "Credentials",
        selected: true
    },
    {
        id: 2,
        listIcon: <DesktopWindowsSharp htmlColor="Black" />,
        listText: "Assets"
    },
    {
        id: 3,
        listIcon: <LocationOnSharp htmlColor="Black" />,
        listText: "Locations"
    },
    {
        id: 4,
        listIcon: <ContactsSharp htmlColor="Black" />,
        listText: "Contacts"
    },
    {
        id: 5,
        listIcon: <BackupSharp htmlColor="Black" />,
        listText: "Backups"
    },
    {
        id: 6,
        listIcon: <BusinessSharp htmlColor="Black" />,
        listText: "Site Summaries"
    },
    {
        id: 7,
        listIcon: <AppsSharp htmlColor="Black" />,
        listText: "Applications"
    },
    {
        id: 8,
        listIcon: <DoneAllSharp htmlColor="Black" />,
        listText: "Checklists"
    },
    {
        id: 9,
        listIcon: <PrintSharp htmlColor="Black" />,
        listText: "Printers"
    }
];
