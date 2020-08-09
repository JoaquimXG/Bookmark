//External Imports
import React, { useState } from "react";
import { Box, makeStyles } from "@material-ui/core";
import { useQuery, useMutation, useLazyQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";

//Custom Components
import PrimaryCard from "./PrimaryCard";
import SecondaryCard from "./SecondaryCard";

//Functions
import myMutation from "../static/functions/myMutation";
import generatePrimaryCards from "../static/functions/generatePrimaryCards";

//Data, queries, mutations and templates
import dataScreenStaticTemplates from "../static/templates/dataScreenStaticTemplates";
import { AppBarHeight, drawerWidth } from "../static/css/style";
import { individualQueries, itemListQueries } from "../static/apollo/queries";
import mutations from "../static/apollo/mutations";
import cardGenerationTemplates from "../static/templates/cardGenerationTemplates";

const margin = 25;

const useStyle = makeStyles(theme => ({
    body: {
        display: "flex",
        flexDirection: "row",
        height: "100%",
        flexGrow: 1
    },
    mainBody: {
        [theme.breakpoints.up("sm")]: {
            marginLeft: drawerWidth + margin
        },
        margin: margin,
        display: "flex",
        flexGrow: 1
    },

    main: {
        height: `calc(100vh - ${AppBarHeight.xs}px)`,
        background: "#BBC7CD",
        [theme.breakpoints.up("sm")]: {
            height: `calc(100vh - ${AppBarHeight.sm}px)`
        }
    }
}));

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
    const classes = useStyle();
    const history = useHistory();
    //Contains the structure for all minorcards that will be displayed
    //including, the width, the title and subtitles for each card
    //doesn't contain the content
    const [item, setItem] = useState(null);

    // Used to reset formvalues to initial values
    const [initialFormValues, setInitialFormValues] = useState(null);
    // Contains the current form values, including edits from the user
    const [formValues, setFormValues] = useState(null);
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

    // Setting the query used to fill data for this page
    var id = parseInt(props.match.params.id);
    var query = individualQueries[props.path].query;

    // Inital queries, starting to load the page
    const { loading, error, data } = useQuery(query, { variables: { id: id } });
    const [
        loadPdf,
        { lazyLoading, lazyError, lazyData, lazyCalled }
    ] = useLazyQuery(query);

    //TO-DO, Create loading icon and error page
    if (loading)
        return (
            <p>
                looooooooooooooooooooooooooooooooooaaaaaaaaaaaaaaaaaaaaaaaaaading
            </p>
        );
    if (error)
        return (
            <p>
                eeeeeeeeeeeeeeeeeeeeeerrrrrrrrrrrrrrrrrrrrrrrrrrroooooooooooooooooooooooooorrrrrrrrrrrrrrr
            </p>
        );

    if (!initialFormValues) {
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

    return (
        <div className={classes.main}>
            <Box className={classes.body}>
                <PrimaryCard
                    path={props.path}
                    id={props.match.params.id}
                    cards={item ? item.cards : null}
                    header={item ? item.header : null}
                    rowTemplate={cardGenerationTemplates[props.path]}
                    formValues={formValues}
                    initialFormValues={initialFormValues}
                    setFormValues={setFormValues}
                    updateItem={updateItem}
                />
                <SecondaryCard
                    templates={dataScreenStaticTemplates.secondaryCardData}
                    buttons={dataScreenStaticTemplates.buttons.secondary}
                    handleClick={secondaryButtonFunctions}
                />
            </Box>
        </div>
    );
};
