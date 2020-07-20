import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import mutations from "../static/pre-api-helpers/mutations";
import { useHistory } from "react-router-dom";

export function usePrimaryCard(props) {
    const initialiseFormValues = (cards, title) => {
        let tempFormValues = { name: title };
        cards
            .map(card => card.content)
            .flat()
            .forEach(
                value =>
                    (tempFormValues[value.title] = value.content
                        ? value.content
                        : "")
            );
        return tempFormValues;
    };

    const history = useHistory();
    const [edit, setEdit] = useState(false);
    const [newItem, setNewItem] = useState(false);
    const [initialFormValues] = useState(
        initialiseFormValues(props.cards, props.header.title)
    );
    //separates formvalues from initialFormValues
    const [formValues, setFormValues] = useState(initialFormValues);
    //when set, an error box will be displayed with the given message
    const [message, setMessage] = useState({});
    //when true the form is being submitted
    const [submitted, setSubmitted] = useState(false);

    const [updateItem] = useMutation(mutations[props.path].mutation);
    const [deleteItem] = useMutation(mutations[props.path].delete);

    const resetFormValues = () => {
        setFormValues(initialFormValues);
    };
    const clearFormValues = () => {
        setFormValues({});
    };

    //Sets the message to be displayed in the error box
    //The error box is only displayed when message.display is true
    const handleBadFormSubmit = () => {
        setMessage({
            text: "Please Fill Required Fields",
            display: true
        });
        setSubmitted(true);
        setTimeout(() => {
            setMessage(message => ({ ...message, display: false }));
        }, 2000);
    };

    //either updates the currently viewed item or creates a new one
    //dependant on if the id is of the current item and if .isnew is set to true
    const myMutation = () => {
        var variables = {};
        if (!newItem) {
            variables.id = props.id;
        }
        //TO-DO remove hardcode site_id
        variables.site_id = 12345;
        variables.isnew = newItem;
        Object.keys(formValues).map(
            //loop through the formvalues object and copy values into variables
            //if the string is empty then copy across null instead
            //the empty string will be accepted and then we can't assess for empty fields
            key =>
                (variables[key] =
                    formValues[key] === "" ? null : formValues[key])
        );
        updateItem({ variables: variables, errorPolicy: "all" }).then(
            success => {
                console.log("succes", success);
                if (success.errors) {
                    //the form likely has missing fields if successful but returns with errors
                    //so the error is displayed and handle formsubmit is run
                    success.errors.forEach(error => console.log(error.message));
                    handleBadFormSubmit();
                } else {
                    //otherwise set the id to the id of the returned item
                    //and move to the new page to display it
                    let id = success.data[props.path].updatedRow.id;
                    setEdit(false);
                    history.push(`/${props.path}s/${id}`);
                }
            },
            failure => {
                //in case of failure inform the user of the form not being complete
                console.log("failure", failure);
                handleBadFormSubmit();
            }
        );
    };

    const buttonFunctions = {
        Edit: () => {
            console.log("pressed save");
            setEdit(!edit);
        },
        Delete: () => {
            console.log("pressed delete");
            let variables = {};
            variables.id = props.id;
            variables.site_id = 12345;
            deleteItem({ variables: variables, errorPolicy: "all" }).then(
                success => {
                    console.log("succes", success);
                    history.push(`/${props.path}s`);
                },
                failure => {
                    console.log("failure", failure);
                }
            );
        },
        New: () => {
            console.log("pressed new");
            if (!newItem) {
                clearFormValues();
                setEdit(true);
            } else {
                resetFormValues();
                setSubmitted(false);
                setEdit(false);
            }
            setNewItem(!newItem);
        },
        Save: () => {
            console.log("pressed save");
            myMutation();
        }
    };

    const handleTextFieldChange = event => {
        setFormValues({ ...formValues, [event.target.id]: event.target.value });
    };

    const cards = newItem ? props.rowTemplate.cards : props.cards;

    return {
        cards,
        handleTextFieldChange,
        buttonFunctions,
        message,
        submitted
    };
}
