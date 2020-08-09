//External Imports
import React from "react";
import { Paper, Divider } from "@material-ui/core";

//Custom Components
import SecondaryCardButtonRow from "./SecondaryCardButtonRow";
import SecondaryMinorCardContatiner from "./SecondaryMinorCardContatiner";

//Style
import { myStyles } from "../static/css/style";

export default props => {
    const classes = myStyles();

    return (
        <Paper elevation={8} className={classes.secondaryCard}>
            <SecondaryCardButtonRow
                className={classes.secondaryCardButtonRow}
                buttons={props.buttons}
                buttonFunctions={props.buttonFunctions}
            />
            <Divider />
            <SecondaryMinorCardContatiner templates={props.templates} />
        </Paper>
    );
};
