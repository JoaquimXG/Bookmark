//External Imports
import React from "react";

//Style
import { myStyles } from "../static/css/style";

//Custom Components
import EditableTitle from "./EditableTitle";
import ButtonRow from "./ButtonRow";


export default props => {
    const classes = myStyles();

    return (
        <header className={classes.primaryCardHeader}>
            <EditableTitle
                value={props.header.fieldValue}
                header={props.header}
                disabled={props.header.disabled}
                formState={props.formState}
            />
            <ButtonRow
                edit={props.formState.edit}
                buttonFunctions={props.buttonFunctions}
                buttons={props.buttons}
            />
        </header>
    );
};
