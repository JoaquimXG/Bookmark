//External Imports
import React from "react";
import { Box } from "@material-ui/core";

//Style
import { myStyles } from "../static/css/style";

//Custom Components
import FormField from "./FormField";
import { useFormConsumer } from "../hooks/useFormConsumer";

export default props => {
    const classes = myStyles();

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
    //console.log({invalidFields})
    //console.log({localInvalidFields})

    return (
        <Box className={`${classes.flexColumn} ${classes.padding2}`}>
            {props.fields.map((field, index) => {
                return field.fieldValue || props.formState.edit ? (
                    <FormField
                        key={index}
                        field={field}
                        edit={edit}
                        newItem={newItem}
                        invalidFields={localInvalidFields}
                        handleChange={{ blur: handleBlur, edit: handleEdit }}
                    />
                ) : null;
            })}
        </Box>
    );
};
