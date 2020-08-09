//External Imports
import React from "react";
import { Button, useTheme } from "@material-ui/core";

//Templates
import dataScreenStaticTemplates from "../static/templates/dataScreenStaticTemplates";

//Style
import {myStyles} from "../static/css/style";

export default props => {
    const classes = myStyles()
    const theme = useTheme();

    const buttons = dataScreenStaticTemplates.buttons.primary;

    return (
        <div className={classes.buttonRow}>
            {buttons.map((button, index) => {
                return props.edit && button.text === "Edit" ? (
                    <Button
                        onClick={props.buttonFunctions[button.save.text]}
                        key={index}
                        variant="contained"
                        startIcon={<button.save.icon />}
                        size="small"
                        style={{
                            margin: theme.spacing(1),
                            color: "white",
                            background: button.save.color,
                            minWidth: "80px"
                        }}
                    >
                        {button.save.text}
                    </Button>
                ) : (
                    <Button
                        onClick={props.buttonFunctions[button.text]}
                        key={index}
                        variant="contained"
                        startIcon={<button.icon />}
                        size="small"
                        style={{
                            margin: theme.spacing(1),
                            color: button.textColor
                                ? button.textColor
                                : "white",
                            background: button.color,
                            minWidth: button.minWidth ? button.minWidth : "auto"
                        }}
                    >
                        {button.text}
                    </Button>
                );
            })}
        </div>
    );
};
