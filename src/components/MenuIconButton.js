//External Import
import React from "react";
import { IconButton, Menu } from "@material-ui/core";

//Style
import { myStyles } from "../static/css/style";

export default props => {
    const classes = myStyles();

    return (
        <IconButton
            className={classes.appBarMenuButton}
            edge="start"
            onClick={props.toggleSlider}
        >
            <Menu />
        </IconButton>
    );
};
