//External Imports
import React from "react";

//Style
import { myStyles } from "../static/css/style";

//Custom Components
import EditableTitle from "./EditableTitle";

//Templates
import ButtonRow from "./ButtonRow";

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
            <ButtonRow
                edit={props.edit}
                buttonFunctions={props.buttonFunctions}
            />
        </header>
    );
};
