//External Imports
import React from "react";
import { Typography } from "@material-ui/core";

//Style
import { myStyles } from "../static/css/style";

export default props => {
    const classes = myStyles();
    return (
        <Typography
            variant="caption"
            style={{ color: "#646464", marginTop: "5px" }}
        >
            {props.edit && props.required ? (
                <span>
                    <span>{props.title}</span>
                    <span className={classes.asterisk}>*</span>
                </span>
            ) : (
                props.title
            )}
        </Typography>
    );
};
