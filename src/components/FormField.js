//External Imports
import React from "react";

//Custom Components
import FormSubtitle from "./FormSubtitle";
import MyTextField from "./MyTextField";
import FormValue from "./FormValue";

export default props => {
    return (
        <>
            <FormSubtitle
                required={props.field.required}
                edit={props.edit}
                title={props.field.title}
            />
            {props.edit ? (
                <MyTextField
                    handleTextFieldChange={props.handleTextFieldChange}
                    field={props.field}
                    value={props.value}
                    submitted={props.submitted}
                />
            ) : (
                <FormValue value={props.value} />
            )}
        </>
    );
};
