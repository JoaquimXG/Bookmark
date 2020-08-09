//External Imports
import React from "react";
import { Typography, Paper } from "@material-ui/core";

//Style
import {myStyles} from "../static/css/style";

export default props => {
    const classes = myStyles();

    return (
        <div
            className={`${
                props.message.display ? classes.errorMessageShow : classes.errorMessageHide
            }`}
        >
            <Paper elevation={8} className={`${classes.errorMessageContainer}`}>
                <Typography className={classes.relative} variant="subtitle1">
                    {props.message.text}
                </Typography>
            </Paper>
        </div>
    );
};
