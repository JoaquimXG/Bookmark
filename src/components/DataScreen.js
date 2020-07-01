import React from "react";
import PrimaryCard from "./PrimaryCard";
import SecondaryCard from "./SecondaryCard";
import { Box, makeStyles } from "@material-ui/core";
import { AppBarHeight } from "../App";

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

export default props => {
    const classes = useStyle();

    const generatePrimaryCards = (item, template) => {
        var newItem = {
            cards: template.cards.map(card => {
                var content = card.content.map(templateValue => {
                    return item[templateValue]
                        ? { title: templateValue, content: item[templateValue] }
                        : null;
                });
                return content ? { ...card, content: content } : null;
            })
        };
        newItem.header = item[template.header];
        return newItem;
    };

    var item;
    if (props.match) {
        let id = parseInt(props.match.params.id);

        // if the page is refreshed then there will be no value in rows
        if (props.rows === null) {
            //TO-DO getRows
            console.log("rows undefined, page probably refreshed");
        }

        item = props.rows.find(row => row.id === id);
        item = generatePrimaryCards(item, props.rowTemplate);
    } else {
        item = null;
    }

    return (
        <div className={classes.main}>
            <Box className={classes.body}>
                <PrimaryCard
                    cards={item ? item.cards : props.cards}
                    buttons={props.buttons.primary}
                    title={item ? item.header : props.title}
                />
                <SecondaryCard
                    data={props.secondaryCardData}
                    buttons={props.buttons.secondary}
                />
            </Box>
        </div>
    );
};
