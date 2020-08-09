//External Imports
import React from "react";
import { Paper, Divider, Grid } from "@material-ui/core";

//Custom Components
import MinorCardHeader from "./MinorCardHeader";
import MinorCardBody from "./MinorCardBody";

export default props => {
    if (props.title === "Schedule") {
        console.log(props.content)
        console.log(props.formValues)
    }
    return (
        <Grid item xs={props.xs? props.xs: true}>
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
        </Grid>
    );
};
