//External Imports
import React from "react";

//Style
import { myStyles } from "../static/css/style";

//Custom Components
import EditableTitle from "./EditableTitle";
import SecondaryCardButtonRow from "./SecondaryCardButtonRow";

//Templates
import dataScreenStaticTemplates from "../static/templates/dataScreenStaticTemplates";

export default props => {
    const classes = myStyles();

    return (
        <header className={classes.primaryCardHeader}>
            <EditableTitle
                handleTextFieldChange={props.handleTextFieldChange}
                value={props.formValues.name}
                disabled={props.header.disabled}
                edit={props.edit}
                submitted={props.submitted}
            />
            <SecondaryCardButtonRow
                edit={props.edit}
                buttons={dataScreenStaticTemplates.buttons.primary}
                buttonFunctions={props.buttonFunctions}
            />
        </header>
    );
};
