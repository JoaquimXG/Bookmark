//External Imports
import React from "react";
import { Paper, Divider } from "@material-ui/core";

//Custom components
import MyMessage from "./MyMessage";
import PrimaryCardHeader from "./PrimaryCardHeader";
import MinorCardGridContainer from "./MinorCardGridContainer";

//Templates
import dataScreenStaticTemplates from "../static/templates/dataScreenStaticTemplates";

//Style
import { myStyles } from "../static/css/style";

//  ------ This can be used to display an error message box when form is submitted incorrectly ------
//
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

    const buttons = props.companyInfo
        ? props.buttons
        : dataScreenStaticTemplates.buttons.primary;

    return (
        <Paper className={classes.itemList} elevation={8}>
            <PrimaryCardHeader
                buttonFunctions={props.buttonFunctions}
                header={props.header}
                buttons={buttons}
                formState={props.formState}
            />
            <Divider />
            <MinorCardGridContainer
                cards={props.cards}
                formState={props.formState}
            />
        </Paper>
    );
};
