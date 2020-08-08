//External Imports
import React from "react";
import { Box, Link, Avatar, Divider } from "@material-ui/core";

//Style
import { myStyles } from "../static/css/style";
import logo from "../static/images/Logo.svg";
import {NavLink} from "react-router-dom";

export default props => {
    const classes = myStyles();

    return (
        <NavLink to="/">
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                className={classes.appBarToolbar}
            >
                <Avatar
                    className={classes.appBarAvatar}
                    variant="square"
                    src={logo}
                    alt="logo"
                    onClick={() => props.setId(0)}
                />
                <Divider />
            </Box>
        </NavLink>
    );
};
