//External Imports
import React, { useState, useEffect } from "react";
import { useQuery, useMutation, useLazyQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";

//Custom Components
import PrimaryCard from "./PrimaryCard";
import SecondaryCard from "./SecondaryCard";
import DisplayMessageCard from "./DisplayMessageCard";

//Functions
import myMutation from "../static/functions/myMutation";
import generatePrimaryCards from "../static/functions/generatePrimaryCards";

//Data, queries, mutations and templates
import dataScreenStaticTemplates from "../static/templates/dataScreenStaticTemplates";
import { individualQueries, itemListQueries } from "../static/apollo/queries";
import mutations from "../static/apollo/mutations";
import cardGenerationTemplates from "../static/templates/cardGenerationTemplates";

//Style
import { myStyles } from "../static/css/style";
import TestDisplay from "./TestDisplay";
import { useFormProvider } from "../hooks/useFormProvider";
import useMyMutation from "../hooks/useMyMutation";

//    // Performs the mutation request to update the item
//    // Checks current cache values and updates the cache as required
//    const [updateItem] = useMutation(mutations[props.path].mutation, {
//        update: (cache, { data }) => {
//            const itemType = `${props.path}s`;
//            var cachedData;
//            try {
//                //check if there is relevant cached data
//                cachedData = cache.readQuery({
//                    query: itemListQueries[props.path].query
//                });
//                if (
//                    cachedData[itemType].some(
//                        item => item.id === data[props.path].updatedRow.id
//                    )
//                ) {
//                    //item already exists and will be updated automatically
//                    return null;
//                }
//            } catch {
//                //no action required as cache will be correct after query is made for the first time
//                return null;
//            }
//            //update the cache with the data returned from the mutation
//            //using the same query as was initially used to populate the itemList cached data
//            //the correct fields will be pulled from the data automatically thanks to the query
//            cache.writeQuery({
//                query: itemListQueries[props.path].query,
//                data: {
//                    [itemType]: [
//                        ...cachedData[itemType],
//                        data[props.path].updatedRow
//                    ]
//                }
//            });
//        }
//    });

//    const secondaryButtonFunctions = {
//        Copy: () => {
//            console.log("copy");
//            myMutation(
//                true,
//                null,
//                formValues,
//                updateItem,
//                errors => console.log("errors are:", errors),
//                handleSuccessfulUpdate,
//                12345
//            );
//        },
//        PDF: () => {
//            //TO-DO
//            console.log("PDF");
//            loadPdf();
//        },
//        Edit: () => {
//            //TO-DO
//            console.log("edit");
//        }
//    };

const fillTemplate = (responseData, template) => {
    var filledTemplate = template.cards.map(card => {
        return {
            ...card,
            fields: card.fields.map(field => ({
                ...field,
                fieldValue: responseData[field.ref]
            }))
        };
    });
    const title = responseData[template.header.title];
    const header = { ...template.header, title };
    return { cards: filledTemplate, header };
};

export default props => {
    var id = parseInt(props.match.params.id);
    var query = individualQueries[props.path].query;

    //REMOVE THIS - MOVE TO TEMPLATE FILE
    const constraints = {
        password: "^[0-9]+$", //must be at least one number
        email: "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$" //eslint-disable-line
    };
    const performMutation = useMyMutation(
        mutations[props.path].mutation,
        itemListQueries[props.path].query,
        props.path
    );

    const {
        buttonFunctions,
        formState: { edit, newItem },
        setMutationVariables,
        setError
    } = useFormProvider(id, performMutation, props.path);

    const { loading, error, data } = useQuery(query, { variables: { id: id } });

    if (loading) return <DisplayMessageCard variant="loading" />;
    if (error) return <DisplayMessageCard variant="error" />;

    const { cards, header } = fillTemplate(
        data[props.path],
        cardGenerationTemplates[props.path]
    );

    return (
        <>
            <PrimaryCard
                path={props.path}
                id={props.match.params.id}
                header={header}
                buttonFunctions={buttonFunctions}
                cards={cards}
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
