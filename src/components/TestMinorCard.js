import React, { useState, useEffect } from "react";
import { Paper, TextField, FormGroup, Button } from "@material-ui/core";
import { myStyles } from "../static/css/style";
import TestDisplay from "./TestDisplay";
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

const test = true;

export default props => {
    const classes = myStyles();
    const {
        edit,
        newItem,
        setMutationVariables,
        constraints,
        setError
    } = props.formState;
    const [invalidFields, setInvalidFields] = useState({});

    const validateField = (value, ref, constraint) => {
        if (value.match(constraint)) {
            setInvalidFields(current => ({ ...current, [ref]: false }));
            if (Object.values(invalidFields).every((field)=> field===false)){
                setError(false)
            }
        } else {
            setInvalidFields(current => ({ ...current, [ref]: true }));
            setError(true)
        }
    };

    const handleEdit = event => {
        let ref = event.target.id;
        let value = event.target.value;
        setMutationVariables(current => ({
            ...current,
            [ref]: value
        }));
        if (invalidFields[ref]) {
            validateField(value, ref, constraints[ref].regex);
        }
    };

    const handleBlur = event => {
        let ref = event.target.id;
        let value = event.target.value;
        if (constraints[ref]) {
            validateField(value, ref, constraints[ref].regex);
        }
    };

    return (
        <Paper className={classes.itemList} elevation={8}>
            <h1>{props.card.minorTitle}</h1>
            {test && <TestDisplay toDisplay={props.formState} />}
            <FormGroup row style={formGroupStyle}>
                {Object.entries(props.card.fields).map(([key, field]) => {
                    return edit ? (
                        <TextField
                            helperText={
                                invalidFields[field.ref]
                                    ? constraints[field.ref].helperText
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
            <Button onClick={() => console.log(invalidFields)}>Test</Button>
        </Paper>
    );
};
