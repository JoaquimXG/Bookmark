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
                    handleChange={props.handleChange}
                    field={props.field}
                    invalidFields={props.invalidFields}
                    newItem={props.newItem}
                />
            ) : (
                <FormValue value={props.field.fieldValue} />
            )}
        </>
    );
};
