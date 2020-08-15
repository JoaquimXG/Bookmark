//External Imports
import React from "react";
import { Paper, TextField, FormGroup, Button } from "@material-ui/core";

//Style
import { myStyles } from "../static/css/style";

//Hooks
import { useFormConsumer } from "../hooks/useFormConsumer";

//Custom Components
import FormValue from "./FormValue";
import FormSubtitle from "./FormSubtitle";

const formGroupStyle = {
    margin: 25,
    display: "flex",
    justifyContent: "space-between"
};

const textFieldStyle = {
    width: "28%"
};

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
        <Paper className={classes.itemList} elevation={8}>
            <h1>{props.card.minorTitle}</h1>
            <FormGroup row style={formGroupStyle}>
                {Object.entries(props.card.fields).map(([key, field]) => {
                    return edit ? (
                        <TextField
                            helperText={
                                invalidFields[field.ref]
                                    ? field.helperText
                                    : null
                            }
                            error={invalidFields[field.ref]}
                            onChange={handleEdit}
                            onBlur={handleBlur}
                            id={field.ref}
                            key={key}
                            label={field.title}
                            defaultValue={newItem ? "" : field.fieldValue}
                            style={textFieldStyle}
                        />
                    ) : (
                        <span style={textFieldStyle}>
                            <FormSubtitle
                                edit={edit}
                                title={field.fieldValue}
                            />
                            <FormValue value={field.fieldValue} />
                        </span>
                    );
                })}
            </FormGroup>
        </Paper>
    );
};
