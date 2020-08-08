//External Imports
import React from "react";
import { TextField, Typography } from "@material-ui/core";

//Style
import { myStyles } from "../static/css/style";

export default props => {
    const classes = myStyles();

    //For showing field is required to user
    const error =
        (props.submitted && !props.value) || props.value === "" ? true : false;

    //For styling TextField
    const inputProps = {
        className: classes.primaryCardTitleTextField,
        classes: {
            input: classes.primaryCardTitleTextFieldInput
        }
    };

    return (
        <>
            {props.edit ? (
                <TextField
                    style={{ flexGrow: 1 }}
                    InputProps={inputProps}
                    onChange={props.handleTextFieldChange}
                    id="name"
                    placeholder="Title"
                    value={props.value}
                    disabled={props.disabled}
                    error={error}
                ></TextField>
            ) : (
                <Typography style={{ flexGrow: 1 }} variant="h5">
                    {props.value}
                </Typography>
            )}
        </>
    );
};
