//External Imports
import React from "react";

//Custom Components
import SecondaryCard from "./SecondaryCard";

//Data, queries, mutations and templates
import {
    buttons,
    primaryCardTemplate,
    secondaryCardData,
    proxyGqlQueryResponseData
} from "../static/templates/companyInfoTemplates";
import PrimaryCard from "./PrimaryCard";


//Uncategorised
import fillDataScreenTemplate from "../static/functions/fillDataScreenTemplate";


const secondaryButtonFunctions = {
    Merge: () => {
        console.log("Merge");
    },
    New: () => {
        console.log("New");
    },
    Edit: () => {
        console.log("Edit");
    }
};

const buttonFunctions = {
    Runbook: () => {
        console.log("Runbook")
    },

    Edit: () => {
        console.log("Edit")
    }
}

export default props => {
    //var query = individualQueries.companyInfo.query;
    var id = 235537;
    const data = proxyGqlQueryResponseData

    const { cards, header } = fillDataScreenTemplate(
        data,
        primaryCardTemplate
    );

    const formState = {
        edit: false,
        newItem: false,
        setMutationVariables: () => console.log("Setting variables"),
        constraints: {},
        setInvalidFields: () => console.log("Setting invalid Fields"),
        invalidFields: {}

    }

    return (
        <>
            <PrimaryCard
                id={id}
                header={header}
                buttonFunctions={buttonFunctions}
                cards={cards}
                formState={formState}
                buttons={buttons.primary}
                companyInfo
                />
            <SecondaryCard
                templates={secondaryCardData}
                buttons={buttons.secondary}
                buttonFunctions={secondaryButtonFunctions}
            />
        </>
    );
};
