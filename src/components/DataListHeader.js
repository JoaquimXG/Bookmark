//External Imports
import React from "react";
import { Typography } from "@material-ui/core";

//Style
import { myStyles } from "../static/css/style";

//Custom Components

export default props => {
    const classes = myStyles();

    return (
        <header className={`${classes.flexRowCenter} ${classes.marginBottom1_5}`}>
            {props.icon}
            <Typography variant="h5">{props.title}</Typography>
        </header>
    );
};
