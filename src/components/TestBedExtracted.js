//External Imports
import React, { useState, useEffect } from "react";
import { Box, Paper } from "@material-ui/core";
import { useQuery, useMutation, useLazyQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";

//Style
import { myStyles } from "../static/css/style";

//Functions
import myMutation2 from "../static/functions/myMutation2";
import generatePrimaryCards from "../static/functions/generatePrimaryCards";

//Data, queries, mutations and templates
import dataScreenStaticTemplates from "../static/templates/dataScreenStaticTemplates";
import { individualQueries, itemListQueries } from "../static/apollo/queries";
import mutations from "../static/apollo/mutations";
import cardGenerationTemplates from "../static/templates/cardGenerationTemplates";

//Custom Components
import PrimaryCard from "./PrimaryCard";
import SecondaryCard from "./SecondaryCard";
import DisplayMessageCard from "./DisplayMessageCard";
import TestPrimaryCard from "./TestPrimaryCard";
import TestDisplay from "./TestDisplay";
import {useFormState} from "../useFormState";

const cardTemplate = [
    {
        minorTitle: "Address",
        fields: [
            { ref: "addr_1", title: "Address Line 1" },
            { ref: "addr_2", title: "Address Line 2" },
            { ref: "city", title: "City" },
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
    const classes = myStyles();
    const history = useHistory();

    const {
        buttonFunctions,
        formState: { edit, newItem, submitting },
        formFunctions: { setSubmitting },
        setMutationVariables
    } = useFormState(queryResult)

    const cards = fillTemplate(queryResult, cardTemplate);

    const test = false;
    if (test) return <TestDisplay toDisplay={cards} />;

    return (
        <>
            <TestPrimaryCard
                //TO-DO, remove
                toDisplay={{
                    edit,
                    submitting,
                    newItem,
                }}
                cards={cards}
                buttonFunctions={buttonFunctions}
                formState={{
                    edit,
                    newItem,
                    submitting,
                    setSubmitting,
                    setMutationVariables
                }}
            />
        </>
    );
};
