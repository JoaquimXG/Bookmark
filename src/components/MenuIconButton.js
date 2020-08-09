//External Import
import React from "react";
import { IconButton} from "@material-ui/core";
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
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
            <MenuSharpIcon />
        </IconButton>
    );
};
