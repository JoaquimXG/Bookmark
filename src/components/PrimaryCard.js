//External Imports
import React from "react";
import { Paper, Box, Divider } from "@material-ui/core";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";

//Custom components
import MyMessage from "./MyMessage";
import PrimaryCardHeader from "./PrimaryCardHeader";
import MinorCardGridContainer from "./MinorCardGridContainer";

//Functions
import myMutation from "../static/functions/myMutation";

//Style
import { myStyles } from "../static/css/style";

//Mutations
import mutations from "../static/apollo/mutations";

export default props => {
    const classes = myStyles();
    const history = useHistory();
    //when true, editable fields are displayed
    const [edit, setEdit] = useState(false);
    const [newItem, setNewItem] = useState(false);

    //when set, an error box will be displayed with the given message
    const [message, setMessage] = useState({});
    //when true the form has been submitted
    //Used to conditionally show errored formValues
    const [submitted, setSubmitted] = useState(false);

    const [deleteItem] = useMutation(mutations[props.path].delete, {
        update: (cache, { data }) => {
            //the data object contains a key matching the name of the mutation that was performed
            //the mutation performed will be in this case delete+the name of the path/item currently displayed
            //I have stored this name in the mutation object that is imported
            var id = data[mutations[props.path].deleteStringIdentifier];
            cache.modify({
                fields: {
                    //similar to the above, the function that needs to be called matches the name
                    //of the query that we are updating, in this case that will be the plural item name/path
                    [`${props.path}s`](existingRefs, { readField }) {
                        //return the whole array of refs unless the referred object's id
                        //matches the id returned from the "delete" mutation
                        return existingRefs.filter(
                            ref => id !== readField("id", ref)
                        );
                    }
                }
            });
        }
    });

    const resetFormValues = () => {
        props.setFormValues(props.initialFormValues);
    };
    const clearFormValues = () => {
        props.setFormValues({});
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

    const handleSuccessfulUpdate = success => {
        let id = success.data[props.path].updatedRow.id;
        setEdit(false);
        history.replace(`/${props.path}s/${id}`);
    };

    const buttonFunctions = {
        Edit: () => {
            setEdit(!edit);
        },
        Delete: () => {
            let variables = {};
            variables.id = props.id;
            variables.site_id = 12345;
            deleteItem({
                variables: variables,
                errorPolicy: "all"
            }).then(
                success => {
                    console.log("succes", success);
                    history.replace("./");
                },
                failure => {
                    console.log("failure", failure);
                }
            );
        },
        New: () => {
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
            myMutation(
                newItem,
                props.id,
                props.formValues,
                props.updateItem,
                handleBadFormSubmit,
                handleSuccessfulUpdate,
                12345
            );
        }
    };

    const handleTextFieldChange = event => {
        props.setFormValues({
            ...props.formValues,
            [event.target.id]: event.target.value
        });
    };

    const cards = newItem ? props.rowTemplate.cards : props.cards;

    return (
        <Paper className={classes.itemList} elevation={8}>
            <MyMessage message={message} />
            <PrimaryCardHeader
                handleTextFieldChange={handleTextFieldChange}
                buttonFunctions={buttonFunctions}
                edit={edit}
                submitted={submitted}
                formValues={props.formValues}
                header={props.header}
                buttons={props.buttons}
            />
            <Divider />
            <MinorCardGridContainer
                cards={cards}
                edit={edit}
                submitted={submitted}
                handleTextFieldChange={handleTextFieldChange}
                formValues={props.formValues}
            />
        </Paper>
    );
};
