//External Imports
import React from "react";
import { Button } from "@material-ui/core";

//Style
import { themeColors, myStyles } from "../static/css/style";

export default props => {
    const classes = myStyles();

    //The button implementation requires for style to be used
    //Trying to use className to set the background color
    //causes the button to show the wrong color when on:hover
    const style = {
        blue: {
            background: themeColors.secondary5
        },
        red: {
            background: themeColors.error,
            color: "black",
            minWidth: "100px"
        },
        green: {
            background: themeColors.success
        },
        grey: {
            background: themeColors.primary5
        }
    };

    return (
        <Button
            type={props.submit ? "submit" : "button"}
            variant="contained"
            startIcon={props.icon}
            size="small"
            className={`${classes.button} ${props.className}`}
            onClick={props.onClick}
            style={style[props.color]}
        >
            {props.text}
        </Button>
    );
};
