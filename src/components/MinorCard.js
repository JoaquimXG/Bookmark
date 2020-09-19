//External Imports
import React from "react";
import { Paper, Divider, Grid } from "@material-ui/core";

//Custom Components
import MinorCardHeader from "./MinorCardHeader";
import MinorCardBody from "./MinorCardBody";

export default props => {
    const {columns, minorTitle, fields} = props.card

    return (
        <Grid item xs={columns.xs? columns.xs: true}>
            <Paper elevation={2} style={{margin:12}}>
                <MinorCardHeader title={minorTitle} />
                <Divider />
                <MinorCardBody
                    formState={props.formState}
                    fields={fields}
                />
            </Paper>
        </Grid>
    );
};
