//External Imports
import React from "react";
import { useFormProvider } from "../hooks/useFormProvider";

//Custom Components
import TestPrimaryCard from "./TestPrimaryCard";

const cardTemplate = [
    {
        minorTitle: "Address",
        fields: [
            { ref: "addr_1", title: "Address Line 1" },
            { ref: "addr_2", title: "Address Line 2" },
            { ref: "id", title: "ID Number", helper: "Numbers Only"},
            { ref: "email", title: "email Address", helper: "Email address invalid" },
            { ref: "postcode", title: "Postcode" },
            { ref: "state", title: "State" },
            { ref: "country", title: "Country" }
        ]
    },
    {
        minorTitle: "Additional Information",
        fields: [
            { ref: "phone", title: "Landline" },
            { ref: "fax", title: "Fax No." },
            { ref: "type", title: "Location Type" }
        ]
    },
    { minorTitle: "notes", fields: [{ ref: "notes", title: "Notes" }] }
];

const queryResult = {
 
    email: "test@gmail.com",
    id: "2125",
    name: "This is the title",
    type: "this is type",
    phone: "This is phone",
    addr_1: "This is address line 1",
    addr_2: "this is address line 2",
    postcode: "This is postcode",
    city: "This is is city",
    state: "This is state",
    country: "this is country",
    notes: "This is notes",
    fax: "this is fax"
};

const constraints = {
    id: "^[0-9]+$",//must be at least one number
    email: "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"//eslint-disable-line
};

//const constraintsOLD = [
    //{ ref: "type", regex: ".+" },//must not be empty
    //{ ref: "fax", regex: "" }
//]

const fillTemplate = (responseData, template) => {
    var filledTemplate = template.map(card => {
        return {
            ...card,
            fields: card.fields.map(field => ({
                ...field,
                fieldValue: responseData[field.ref]
            }))
        };
    });
    return filledTemplate;
};

export default props => {
    const {
        buttonFunctions,
        formState: { edit, newItem },
        setMutationVariables,
        setError
    } = useFormProvider(queryResult.id);

    const cards = fillTemplate(queryResult, cardTemplate);

    return (
        <>
            <TestPrimaryCard
                cards={cards}
                buttonFunctions={buttonFunctions}
                formState={{
                    edit,
                    newItem,
                    setMutationVariables,
                    constraints,
                    setError
                }}
            />
        </>
    );
};
