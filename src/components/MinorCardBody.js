//External Imports
import React from "react";
import { Box } from "@material-ui/core";

//Style
import { myStyles } from "../static/css/style";

//Custom Components
import FormField from "./FormField";

export default props => {
    const classes = myStyles();

    
    return (
        <Box className={classes.data}>
            {props.content.map((field, index) => {
                return props.formValues[field.title] || props.edit ? (
                    <FormField
                        key={index}
                        field={field}
                        value={props.formValues[field.title]}
                        handleTextFieldChange={props.handleTextFieldChange}
                        edit={props.edit}
                        submitted={props.submitted}
                    />
                ) : null;
            })}
        </Box>
    );
};
