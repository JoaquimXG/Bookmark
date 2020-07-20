import React from "react";
import PrimaryCard from "./PrimaryCard";
import SecondaryCard from "./SecondaryCard";
import { Box, makeStyles } from "@material-ui/core";
import { AppBarHeight } from "../App";
import { useQuery } from "@apollo/react-hooks";
import { individualQueries } from "../static/pre-api-helpers/queries";

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

export default props => {
    const classes = useStyle();

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

    if (data && !props.home) {
        var item;
        item = data ? data[props.path] : null;
        item = generatePrimaryCards(item, props.rowTemplate);
    }

    return (
        <div className={classes.main}>
            <Box className={classes.body}>
                <PrimaryCard
                    path={props.path}
                    id={props.home ? id : props.match.params.id}
                    cards={item ? item.cards : props.cards}
                    buttons={props.buttons.primary}
                    header={item? item.header: props.header}
                    rowTemplate={props.rowTemplate}
                />
                <SecondaryCard
                    data={props.secondaryCardData}
                    buttons={props.buttons.secondary}
                />
            </Box>
        </div>
    );
};
