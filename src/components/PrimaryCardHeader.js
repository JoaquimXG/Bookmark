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
                value={props.header.title}
                disabled={props.header.disabled}
            />
            <ButtonRow
                edit={props.edit}
                buttonFunctions={props.buttonFunctions}
                buttons={props.buttons}
            />
        </header>
    );
};
