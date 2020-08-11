import React, { useState, useEffect } from "react";
import { Paper, TextField, FormGroup } from "@material-ui/core";
import { myStyles } from "../static/css/style";
import TestDisplay from "./TestDisplay";
import FormValue from "./FormValue";
import FormField from "./FormField";
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
    const { edit, newItem, setMutationVariables } = props.formState;

    const handleEdit = event => {
        let id = event.target.id;
        let value = event.target.value;
        setMutationVariables(current => ({
            ...current,
            [id]: value
        }));
    };

    return (
        <Paper className={classes.itemList} elevation={8}>
            <h1>{props.card.minorTitle}</h1>
            {test && <TestDisplay toDisplay={props.formState} />}
            <FormGroup row style={formGroupStyle}>
                {Object.entries(props.card.fields).map(([key, field]) => {
                    return edit ? (
                        <TextField
                            onChange={handleEdit}
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
