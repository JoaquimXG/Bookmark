import React from "react";
import { Typography, makeStyles, Paper } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
    messageContainer: {
        position: "absolute",
        color: theme.palette.error.main,
        zIndex: 50,
        padding: "10px",
        bottom: "20px",
        right: "20px"
    },
    messageText: {
        position: "relative"
    },

    alertShown: {
        opacity: 1,
        transition: "all 250ms linear"
    },

    alertHidden: {
        opacity: 0,
        transition: "all 250ms linear"
    }
}));

export default props => {
    const classes = useStyle();

    return (
        <div className={`${props.message.display? classes.alertShown: classes.alertHidden}`}>
        <Paper elevation={8} className={`${classes.messageContainer}`}>
            <Typography className={classes.messageText} variant="subtitle1">
                {props.message.text}
            </Typography>
        </Paper>
        </div>
    );
};
