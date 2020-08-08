//External Imports
import React from "react";
import { Button, useTheme } from "@material-ui/core";

//Templates
import dataScreenStaticTemplates from "../static/templates/dataScreenStaticTemplates";

export default props => {
    const theme = useTheme();

    const buttons = dataScreenStaticTemplates.buttons.primary;

    return (
        <>
            {buttons.map((value, index) => {
                return props.edit && value.text === "Edit" ? (
                    <Button
                        onClick={props.buttonFunctions[value.save.text]}
                        key={index}
                        variant="contained"
                        startIcon={<value.save.icon />}
                        size="small"
                        style={{
                            margin: theme.spacing(1),
                            color: "white",
                            background: value.save.color,
                            minWidth: "80px"
                        }}
                    >
                        {value.save.text}
                    </Button>
                ) : (
                    <Button
                        onClick={props.buttonFunctions[value.text]}
                        key={index}
                        variant="contained"
                        startIcon={<value.icon />}
                        size="small"
                        style={{
                            margin: theme.spacing(1),
                            color: value.textColor ? value.textColor : "white",
                            background: value.color,
                            minWidth: value.minWidth ? value.minWidth : "auto"
                        }}
                    >
                        {value.text}
                    </Button>
                );
            })}
        </>
    );
};
