import React from "react";
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
    Box
} from "@material-ui/core";
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons";

export const NavBar = () => {
    return (
        <Box component="nav">
            <AppBar>
                <Toolbar>
                    <ArrowBack />
                </Toolbar>
            </AppBar>
        </Box>
    );
};
