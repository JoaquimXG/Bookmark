//External Imports
import React, { useEffect, useState } from "react";

//Custom Components
import SecondaryCard from "./SecondaryCard";
import CompanyInfoPrimaryCard from "./CompanyInfoPrimaryCard";

//Data, queries, mutations and templates
import {
    buttons,
    primaryCardTemplate,
    secondaryCardData,
    proxyGqlQueryResponseData
} from "../static/templates/companyInfoTemplates";


const initialiseFormValues = (cards, title) => {
    let tempFormValues = { name: title };
    cards
        .map(card => card.content)
        .flat()
        .forEach(
            value =>
                (tempFormValues[value.title] = value.content
                    ? value.content
                    : "")
        );
    return tempFormValues;
};

export default props => {
    const [item, setItem] = useState(null);

    const [initialFormValues, setInitialFormValues] = useState(null);

    const [formValues, setFormValues] = useState(null);
    

    //var query = individualQueries.companyInfo.query;
    //var id = 235537;

    const secondaryButtonFunctions = {
        Copy: () => {
            console.log("copy");
        },
        PDF: () => {
            console.log("PDF");
        },
        Edit: () => {
            console.log("edit");
        }
    };

    const tempData = proxyGqlQueryResponseData

    useEffect(() => {
        if (tempData) {
            //USED TO BE tempitem = generatePrimaryCards() 
            //TO-DO, needs to replaced
            var tempItem = false
            console.log(tempItem)
            // Initialise the values used to fill forms
            let tempFormValues = initialiseFormValues(
                tempItem.cards,
                tempItem.header.title
            );
            setItem(tempItem);
            setInitialFormValues(tempFormValues);
            setFormValues(tempFormValues);
        }
    }, [tempData]);

    if (!formValues) return( null )

    return (
        <>
            <CompanyInfoPrimaryCard
                path={"/"}
                id={0}
                cards={item.cards}
                header={item.header}
                rowTemplate={primaryCardTemplate}
                formValues={formValues}
                initialFormValues={initialFormValues}
                setFormValues={setFormValues}
                buttons={buttons.primary}
            />
            <SecondaryCard
                templates={secondaryCardData}
                buttons={buttons.secondary}
                buttonFunctions={secondaryButtonFunctions}
            />
        </>
    );
};
