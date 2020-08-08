//External Imports
import React from "react";
import { Paper, Divider } from "@material-ui/core";

//Custom Components
import MinorCardHeader from "./MinorCardHeader";
import MinorCardBody from "./MinorCardBody";

export default props => {

    return (
        <Paper elevation={2}>
            <MinorCardHeader title={props.title} />
            <Divider />
            <MinorCardBody
                content={props.content}
                formValues={props.formValues}
                edit={props.edit}
                handleTextFieldChange={props.handleTextFieldChange}
                submitted={props.submitted}
            />
        </Paper>
    );
};
