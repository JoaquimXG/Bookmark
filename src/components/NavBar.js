//External Imports
import React from "react";
import { Box } from "@material-ui/core";

//Custom Components
import AppBarDecoration from "./AppBarDecoration";
import NavBarAvatar from "./NavBarAvatar";
import NavBarList from "./NavBarList";

//Style
import { myStyles } from "../static/css/style";

export default props => {
    const classes = myStyles();

    return (
        <Box className={classes.navMenuSliderContainer}>
            <AppBarDecoration color="#C4C4C4" />
            <NavBarAvatar setId={props.setId} />
            <NavBarList setId={props.setId} id={props.id} />
        </Box>
    );
};
