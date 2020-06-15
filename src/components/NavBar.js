import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from '@material-ui/core/Drawer'
import logo from "../static/images/Logo.svg";
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    ListitemIcon,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
    ListItemIcon
} from "@material-ui/core";
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons";

// CSS Styles
const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        height: "30rem",
        background: "#1511"
    },

    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },

    listItem: {
        color: "tan"
    }
}));

const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume"
    },
    {
        listIcon: <Apps />,
        listText: "Portfolio"
    },
    {
        listIcon: <ContactMail />,
        listText: "Contacts"
    }
];

export const NavBar = () => {
    const classes = useStyles();

    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleSlider = () => {
        setDrawerOpen(!drawerOpen);
        console.log(drawerOpen)
    };

    const sideList = () => (
        <Box className={classes.menuSliderContainer} component="div">
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
                <AppBar position="static" style={{ background: "#222" }}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider}>
                            <ArrowBack style={{ color: "tomato" }} />
                        </IconButton>
                        <Typography variant="h5">Portfolio</Typography>
                        <Drawer open={drawerOpen}>
                            {sideList()}
                        </Drawer>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};
