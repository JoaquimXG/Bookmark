import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Box,
} from "@material-ui/core";
import { Home, Menu } from "@material-ui/icons";

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

export const MyAppBar = () => {
    const classes = useStyles();

    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleSlider = () => {
        setDrawerOpen(!drawerOpen);
        console.log(drawerOpen);
    };

    return (
        <>
            <Box>
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
                        <Box style={{ flex: 1 }} mb={0.1}>
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
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}
