//External Imports
import React from "react";
import { ThemeProvider, TextField } from "@material-ui/core";

//Style
import { myMuiTheme } from "../static/css/style";

export default props => {
    const error =
        ((props.submitted && !props.value) || props.value === "") &&
        props.field.required
            ? true
            : false;

    return (
        <ThemeProvider theme={myMuiTheme}>
            <TextField
                onChange={props.handleTextFieldChange}
                id={props.field.title}
                value={props.value}
                multiline
                disabled={props.field.disabled}
                error={error}
            ></TextField>
        </ThemeProvider>
    );
};
