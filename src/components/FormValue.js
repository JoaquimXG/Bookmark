//External Imports
import React from "react";
import { Typography } from "@material-ui/core";

//Style
import { myStyles } from "../static/css/style";

export default props => {
    const classes = myStyles();
    return (
        <Typography className={classes.formValue} variant="subtitle2">
            {props.value}
        </Typography>
    );
};
