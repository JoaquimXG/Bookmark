import React, { useState } from "react";
import PrimaryCard from "./PrimaryCard";
import SecondaryCard from "./SecondaryCard";
import { Box, makeStyles } from "@material-ui/core";
import { AppBarHeight } from "../App";
import { useQuery, useMutation } from "@apollo/client";
import { individualQueries } from "../static/pre-api-helpers/queries";
import mutations from "../static/pre-api-helpers/mutations";
import { useHistory } from "react-router-dom";
import myMutation from "../static/pre-api-helpers/functions/myMutation";

const useStyle = makeStyles(theme => ({
    body: {
        display: "flex",
        flexDirection: "row",
        height: "100%",
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

const generatePrimaryCards = (item, template) => {
    var newItem = {
        cards: template.cards.map(card => {
            //loop through each card in the template
            //return the entire contents of the template e.g. columns and title
            //but replace template variables with their respective values from the item
            var content = card.content.map(templateValue => {
                //loop through each value in the card
                //return the entire templatevalue including disabled
                //replace the template value with the appropriate value from the item
                //sets content to null if there is no data from the item
                //if all the values.content in card are set to null then the card won't be displayed
                return item[templateValue.title]
                    ? { ...templateValue, content: item[templateValue.title] }
                    : { ...templateValue, content: null };
            });
            return content ? { ...card, content: content } : null;
        })
    };
    //sets the header to match the template
    //but using the real item title as opposed to "name"
    newItem.header = {
        title: item[template.header.title],
        disabled: template.header.disabled
    };
    return newItem;
};

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
    const [item, setItem] = useState(null);

    const [initialFormValues, setInitialFormValues] = useState(null);
    const [formValues, setFormValues] = useState(null);
    const [updateItem] = useMutation(mutations[props.path].mutation, {
        update: (cache, { data }) => {console.log("update")}
    });

    var query = "";
    var id = null;
    if (props.home) {
        query = individualQueries.companyInfo.query;
        id = 235537;
    } else {
        id = parseInt(props.match.params.id);
        query = individualQueries[props.path].query;
    }

    const { loading, error, data } = useQuery(query, { variables: { id: id } });

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

    if (data && !props.home && !initialFormValues) {
        var tempItem = generatePrimaryCards(
            data[props.path],
            props.rowTemplate
        );
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
        }
    };

    return (
        <div className={classes.main}>
            <Box className={classes.body}>
                <PrimaryCard
                    path={props.path}
                    id={props.home ? id : props.match.params.id}
                    cards={item ? item.cards : props.cards}
                    buttons={props.buttons.primary}
                    header={item ? item.header : props.header}
                    rowTemplate={props.rowTemplate}
                    formValues={formValues}
                    setFormValues={setFormValues}
                    initialFormValues={initialFormValues}
                    updateItem={updateItem}
                />
                <SecondaryCard
                    data={props.secondaryCardData}
                    buttons={props.buttons.secondary}
                    handleClick={secondaryButtonFunctions}
                />
            </Box>
        </div>
    );
};
