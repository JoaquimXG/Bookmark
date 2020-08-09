//External Imports
import React from "react";
import { Paper, Divider } from "@material-ui/core";

//Custom components
import PrimaryCardHeader from "./PrimaryCardHeader";
import MinorCardGridContainer from "./MinorCardGridContainer";

//Style
import { myStyles } from "../static/css/style";


export default props => {
    const classes = myStyles();

    const buttonFunctions = {
        Edit: () => {
            console.log("pressed edit")
        },
    };

    const handleTextFieldChange = event => {
        props.setFormValues({
            ...props.formValues,
            [event.target.id]: event.target.value
        });
    };

    return (
        <Paper className={classes.itemList} elevation={8}>
            <PrimaryCardHeader
                handleTextFieldChange={handleTextFieldChange}
                buttonFunctions={buttonFunctions}
                formValues={props.formValues}
                header={props.header}
                buttons={props.buttons}
            />
            <Divider />
            <MinorCardGridContainer
                cards={props.cards}
                handleTextFieldChange={handleTextFieldChange}
                formValues={props.formValues}
            />
        </Paper>
    );
};
