//External Imports
import React from "react";
import { Paper, Typography } from "@material-ui/core";

//Style
import { myStyles } from "../static/css/style";

export default props => {
    const classes = myStyles();

    const text = {
        loading: "Loading, Just a Minute",
        error: "There has been an error"
    }
    return (
        <Paper style={{alignSelf: "center"}}>
            <div>
                <Typography variant="h1" className={classes.padding3}>
                    {text[props.variant]}
                </Typography>
            </div>
        </Paper>
    );
};
