//External Imports
import React, { useEffect } from "react";
import {useLocation} from "react-router-dom";

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
import { useLazyQuery } from "@apollo/client";

//Uncategorised
import fillDataScreenTemplate from "../static/functions/fillDataScreenTemplate";
import { generatePdfQuery } from "../static/apollo/queries";

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

//TO-DO: Remove hardcoded site id
const SITE_ID = 12345;

export default props => {
    //var query = individualQueries.companyInfo.query;
    var id = 235537;
    const data = proxyGqlQueryResponseData;
    const site_id = props.match.params.site_id

    const [loadPdf, { data: lazyData }] = useLazyQuery(generatePdfQuery);

    useEffect(() => {
        if (lazyData) {
            const url = lazyData.generatePdf;
            console.log(lazyData.generatePdf);
            window.open(url, "_blank");
        }
    }, [lazyData]);

    const { cards, header } = fillDataScreenTemplate(data, primaryCardTemplate);

    const formState = {
        edit: false,
        newItem: false,
        setMutationVariables: () => console.log("Setting variables"),
        constraints: {},
        setInvalidFields: () => console.log("Setting invalid Fields"),
        invalidFields: {}
    };

    const buttonFunctions = {
        Runbook: () => {
            console.log("Runbook");
            loadPdf({
                variables: { site_id: SITE_ID, template: null, id: null }
            });
        }
    };

    return (
        <>
            <PrimaryCard
                id={id}
                header={header}
                buttonFunctions={buttonFunctions}
                cards={cards}
                formState={formState}
                buttons={buttons.primary}
                controlButtons
            />
            <SecondaryCard
                templates={secondaryCardData}
                buttons={buttons.secondary}
                buttonFunctions={secondaryButtonFunctions}
            />
        </>
    );
};
