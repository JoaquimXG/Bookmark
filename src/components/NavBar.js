import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import logo from "../static/images/Logo.svg";
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
    ListItemIcon
} from "@material-ui/core";

import {
    Home,
    Menu,
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

//Colors
const themeColors = {
    primary6: "#546e7a",
    primary5: "#263238"
};

// CSS Styles
const useStyles = makeStyles(theme => ({
    appBarPadding: {
        height: theme.spacing(10)
    },

    appBarTitle: {
        color: "white",
        flex: 1
    },

    appBarIcon: {
        color: "white"
    },

    appBar: {
        height: theme.spacing(10)
    },

    menuSliderContainer: {
        width: 250,
        height: "30rem",
        background: "#ffffff"
    },

    avatar: {
        display: "block",
        margin: "0rem auto",
        width: theme.spacing(20),
        height: theme.spacing(10)
    },

    listItem: {
        color: "Black"
    }
}));

const menuItems = [
    {
        listIcon: <VpnKeySharp htmlColor="Black" />,
        listText: "Credentials"
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
        listIcon: <BusinessSharp htmlColor="Black" />,
        listText: "Site Summaries"
    },
    {
        listIcon: <AppsSharp htmlColor="Black" />,
        listText: "Applications"
    },
    {
        listIcon: <BackupSharp htmlColor="Black" />,
        listText: "Backups"
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

export const NavBar = () => {
    const classes = useStyles();

    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleSlider = () => {
        setDrawerOpen(!drawerOpen);
        console.log(drawerOpen);
    };

    const sideList = () => (
        <Box
            className={classes.menuSliderContainer}
            component="div"
            onClick={toggleSlider}
        >
            <Box style={{ background: "#c4c4c4", height: "1.5em" }}></Box>
            <Avatar
                className={classes.avatar}
                variant="square"
                src={logo}
                alt="logo"
            />
            <Divider />
            <List>
                {menuItems.map((listItem, key) => (
                    <ListItem className={classes.listItem} button key={key}>
                        <ListItemIcon>{listItem.listIcon}</ListItemIcon>
                        <ListItemText primary={listItem.listText} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <Box component="nav">
                <Box
                    style={{
                        background: themeColors.primary6,
                        height: "1.5em"
                    }}
                ></Box>
                <AppBar
                    className={classes.appBar}
                    position="static"
                    style={{ background: themeColors.primary5 }}
                >
                    <Toolbar>
                        <Box className={classes.appBarPadding}></Box>
                        <Box ml={-1} mr={1}>
                            <IconButton
                                style={{ margin: "0rem" }}
                                onClick={toggleSlider}
                            >
                                <Menu className={classes.appBarIcon} />
                            </IconButton>
                        </Box>
                        <Box style={{flex: 1}} mb={0.1}>
                        <Typography
                            className={classes.appBarTitle}
                            variant="h5"
                        >
                            Some Company
                        </Typography>
                        </Box>
                        <Box mr={-1}>
                            <IconButton>
                                <Home className={classes.appBarIcon} />
                            </IconButton>
                        </Box>
                        <Drawer open={drawerOpen} onClose={toggleSlider}>
                            {sideList()}
                        </Drawer>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};
