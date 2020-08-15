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
        setError,
        constraints
    } = props.formState;

    const { invalidFields, handleBlur, handleEdit } = useFormConsumer(
        setMutationVariables,
        setError,
        constraints
    );

    return (
        <Box className={`${classes.flexColumn} ${classes.padding2}`}>
            {props.fields.map((field, index) => {
                return field.fieldValue || props.formState.edit ? (
                    <FormField
                        key={index}
                        field={field}
                        edit={edit}
                        newItem={newItem}
                        invalidFields={invalidFields}
                        handleChange={{ blur: handleBlur, edit: handleEdit }}
                    />
                ) : null;
            })}
        </Box>
    );
};
