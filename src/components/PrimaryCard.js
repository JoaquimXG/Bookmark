//External Imports
import React from "react";
import { Paper, Divider } from "@material-ui/core";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";

//Custom components
import MyMessage from "./MyMessage";
import PrimaryCardHeader from "./PrimaryCardHeader";
import MinorCardGridContainer from "./MinorCardGridContainer";

//Templates
import dataScreenStaticTemplates from "../static/templates/dataScreenStaticTemplates";

//Functions
import myMutation from "../static/functions/myMutation";

//Style
import { myStyles } from "../static/css/style";

//Mutations
import mutations from "../static/apollo/mutations";

//    const handleBadFormSubmit = error => {
//        console.log(error);
//        setMessage({
//            text: "Please Fill Required Fields",
//            display: true
//        });
//        setSubmitted(true);
//        setTimeout(() => {
//            setMessage(message => ({ ...message, display: false }));
//        }, 2000);
//    };

//    //when set, an error box will be displayed with the given message
//    const [message, setMessage] = useState({});
            //<MyMessage message={message} />

export default props => {
    const classes = myStyles();
    const history = useHistory();

    return (
        <Paper className={classes.itemList} elevation={8}>
            <PrimaryCardHeader
                buttonFunctions={props.buttonFunctions}
                header={props.header}
                buttons={dataScreenStaticTemplates.buttons.primary}
                edit={props.formState.edit}
            />
            <Divider />
            <MinorCardGridContainer
                cards={props.cards}
                formState={props.formState}
            />
        </Paper>
    );
};
