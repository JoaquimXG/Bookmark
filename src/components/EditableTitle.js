//External Imports
import React from "react";
import { TextField, Typography } from "@material-ui/core";

//Style
import { myStyles } from "../static/css/style";
import { useFormConsumer } from "../hooks/useFormConsumer";

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

    const {
        edit,
        newItem,
        setMutationVariables,
        constraints,
        setInvalidFields,
        invalidFields
    } = props.formState;

    const { localInvalidFields, handleBlur, handleEdit } = useFormConsumer(
        setMutationVariables,
        setInvalidFields,
        constraints,
        invalidFields
    );

    return (
        <>
            {edit ? (
                <TextField
                    style={{ flexGrow: 1 }}
                    InputProps={inputProps}
                    onChange={handleEdit}
                    onBlur={handleBlur}
                    id={props.header.ref}
                    placeholder="Title"
                    defaultValue={newItem ? "" : props.header.fieldValue}
                    disabled={props.header.disabled}
                    error={localInvalidFields[props.header.ref]}
                ></TextField>
            ) : (
                <Typography style={{ flexGrow: 1 }} variant="h5">
                    {props.value}
                </Typography>
            )}
        </>
    );
};
