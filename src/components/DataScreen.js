//External Imports
import React, { useState, useEffect } from "react";
import { Box, Paper } from "@material-ui/core";
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
    const classes = myStyles();
    const history = useHistory();

    // Setting the query used to fill data for this page
    var id = parseInt(props.match.params.id);
    var query = individualQueries[props.path].query;

    // Inital queries, starting to load the page
    const { loading, error, data } = useQuery(query, { variables: { id: id } });
    const [
        loadPdf,
        { lazyLoading, lazyError, lazyData, lazyCalled }
    ] = useLazyQuery(query);

    //Contains the structure for all minorcards that will be displayed
    //including, the width, the title and subtitles for each card
    //doesn't contain the content
    const [item, setItem] = useState(null);

    // Used to reset formvalues to initial values
    const [initialFormValues, setInitialFormValues] = useState(null);
    // Contains the current form values, including edits from the user
    const [formValues, setFormValues] = useState(null);

    useEffect(() => {
        if (data) {
            // genereate the cards and title from the returned data
            // using the template required for this item type
            var tempItem = generatePrimaryCards(
                data[props.path],
                cardGenerationTemplates[props.path]
            );
            // Initialise the values used to fill forms
            let tempFormValues = initialiseFormValues(
                tempItem.cards,
                tempItem.header.title
            );
            setItem(tempItem);
            setInitialFormValues(tempFormValues);
            setFormValues(tempFormValues);
        }
    }, [data, props.path]);

    // Performs the mutation request to update the item
    // Checks current cache values and updates the cache as required
    const [updateItem] = useMutation(mutations[props.path].mutation, {
        update: (cache, { data }) => {
            const itemType = `${props.path}s`;
            var cachedData;
            try {
                //check if there is relevant cached data
                cachedData = cache.readQuery({
                    query: itemListQueries[props.path].query
                });
                if (
                    cachedData[itemType].some(
                        item => item.id === data[props.path].updatedRow.id
                    )
                ) {
                    //item already exists and will be updated automatically
                    return null;
                }
            } catch {
                //no action required as cache will be correct after query is made for the first time
                return null;
            }
            //update the cache with the data returned from the mutation
            //using the same query as was initially used to populate the itemList cached data
            //the correct fields will be pulled from the data automatically thanks to the query
            cache.writeQuery({
                query: itemListQueries[props.path].query,
                data: {
                    [itemType]: [
                        ...cachedData[itemType],
                        data[props.path].updatedRow
                    ]
                }
            });
        }
    });

    const handleSuccessfulUpdate = success => {
        let id = success.data[props.path].updatedRow.id;
        history.push(`/${props.path}s/${id}`);
    };

    const secondaryButtonFunctions = {
        Copy: () => {
            console.log("copy");
            myMutation(
                true,
                null,
                formValues,
                updateItem,
                errors => console.log("errors are:", errors),
                handleSuccessfulUpdate,
                12345
            );
        },
        PDF: () => {
            //TO-DO
            console.log("PDF");
            loadPdf();
        },
        Edit: () => {
            //TO-DO
            console.log("edit");
        }
    };

    if (loading || !formValues)
        return (
            <DisplayMessageCard variant="loading"/>
        );
    if (error)
        return (
            <DisplayMessageCard variant="error"/>
        );

    return (
        <>
            <PrimaryCard
                path={props.path}
                id={props.match.params.id}
                cards={item.cards}
                header={item.header}
                rowTemplate={cardGenerationTemplates[props.path]}
                formValues={formValues}
                initialFormValues={initialFormValues}
                setFormValues={setFormValues}
                updateItem={updateItem}
                buttons={dataScreenStaticTemplates.buttons.primary}
            />
            <SecondaryCard
                templates={dataScreenStaticTemplates.secondaryCardData}
                buttons={dataScreenStaticTemplates.buttons.secondary}
                buttonFunctions={secondaryButtonFunctions}
            />
        </>
    );
};
