import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { menuItems } from "../static/pre-api-helpers/menu-items";
import Drawer from "@material-ui/core/Drawer";
import logo from "../static/images/Logo.svg";
import { flexbox } from "@material-ui/system";

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
import { Home, Menu } from "@material-ui/icons";

//Colors
const themeColors = {
    primary6: "#546e7a",
    primary5: "#263238"
};

// CSS Styles
const useStyles = makeStyles(theme => ({
    appBar: {
        height: theme.spacing(9)
    },

    menuSliderContainer: {
        width: 250,
        height: "30rem",
        background: "#ffffff"
    },

    avatar: {
        margin: "auto",
        width: theme.spacing(28),
        height: theme.spacing(8)
    },

    avatarBox: {
        height: theme.spacing(9)
    },

    listItem: {
        color: "Black"
    }
}));

export const NavBar = () => {
    const classes = useStyles();

    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleSlider = () => {
        setDrawerOpen(!drawerOpen);
        console.log(drawerOpen);
    };

    const NavBar = () => (
        <Box className={classes.menuSliderContainer} onClick={toggleSlider}>
            <Box style={{ background: "#c4c4c4", height: "1rem" }}></Box>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                className={classes.avatarBox}
            >
                <Avatar
                    className={classes.avatar}
                    variant="square"
                    src={logo}
                    alt="logo"
                />
                <Divider />
            </Box>
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
            <Box>
                <Box
                    style={{
                        background: themeColors.primary6,
                        height: "1rem"
                    }}
                ></Box>
                <AppBar
                    position="static"
                    style={{ background: themeColors.primary5 }}
                >
                    <Toolbar className={classes.appBar}>
                        <IconButton edge="start" onClick={toggleSlider}>
                            <Menu style={{ color: "white" }} />
                        </IconButton>
                        <Box pl={1} flexGrow={1}>
                            <Typography
                                className={classes.appBarTitle}
                                variant="h5"
                            >
                                Some Company
                            </Typography>
                        </Box>
                        <IconButton edge="end">
                            <Home style={{ color: "white" }} />
                        </IconButton>
                        <Drawer open={drawerOpen} onClose={toggleSlider}>
                            {NavBar()}
                        </Drawer>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};
