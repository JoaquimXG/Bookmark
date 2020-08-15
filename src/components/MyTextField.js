//External Imports
import React from "react";
import { ThemeProvider, TextField } from "@material-ui/core";

//Style
import { myMuiTheme } from "../static/css/style";

export default props => {
    const { invalidFields, field, handleChange } = props;

    return (
        <ThemeProvider theme={myMuiTheme}>
            <TextField
                onChange={handleChange.edit}
                onBlur={handleChange.blur}
                id={field.ref}
                defaultValue={props.newItem ? "" : field.fieldValue}
                multiline
                disabled={field.disabled}
                error={invalidFields[field.ref]}
            ></TextField>
        </ThemeProvider>
    );
};
