import React from "react";
import PrimaryCard from "./PrimaryCard";
import SecondaryCard from "./SecondaryCard";
import { Box, makeStyles } from "@material-ui/core";
import { AppBarHeight } from "../App";
import {useQuery} from "@apollo/react-hooks";
import {individualQueries} from '../static/pre-api-helpers/queries'

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
            var content = card.content.map(templateValue => {
                return item[templateValue]
                    ? { title: templateValue, content: item[templateValue] }
                    : {title: templateValue, content: null};
            });
            return content ? { ...card, content: content } : null;
        })
    };
    newItem.header = item[template.header];
    console.log("newItem",newItem)
    return newItem;
};

export default props => {
    const classes = useStyle();

    var query = ""
    var id = null
    if (props.home){
        query = individualQueries.companyInfo.query
        id = 235537
    }else{
        id = parseInt(props.match.params.id)
        query = individualQueries[props.path].query
    }

    const {loading, error, data } = useQuery(query, {variables: {id: id}});

    if (loading) return <p>looooooooooooooooooooooooooooooooooaaaaaaaaaaaaaaaaaaaaaaaaaading</p>
    if (error) return <p>eeeeeeeeeeeeeeeeeeeeeerrrrrrrrrrrrrrrrrrrrrrrrrrroooooooooooooooooooooooooorrrrrrrrrrrrrrr</p>

    if (data && !props.home){
        var item;
        item = data ? data[props.path]: null
        item = generatePrimaryCards(item, props.rowTemplate);
    }

    return (
        <div className={classes.main}>
            <Box className={classes.body}>
                <PrimaryCard
                    id={props.home ? id : props.match.params.id}
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
