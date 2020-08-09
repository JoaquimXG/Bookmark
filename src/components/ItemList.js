//External Imports
import React from "react";
import { Paper, Divider } from "@material-ui/core";
import { useQuery } from "@apollo/client";

// Custom static components
import ItemCategoryErrorBoundary from "./ItemCategoryErrorBoundary";
import DisplayMessageCard from "./DisplayMessageCard";

//Style
import { myStyles } from "../static/css/style";

//Incoming data or templates
import { itemListQueries } from "../static/apollo/queries";
import ItemListTableContainer from "./ItemListTableContainer";
import ItemListHeader from "./ItemListHeader";

export default props => {
    const classes = myStyles();

    const { loading, error, data } = useQuery(
        itemListQueries[props.path].query
    );

    if (loading)
        return (
            <DisplayMessageCard variant="loading"/>
        );
    if (error)
        return (
            <DisplayMessageCard variant="error"/>
        );

    return (
        <ItemCategoryErrorBoundary myclasses={classes}>
            <Paper className={classes.itemList} elevation={8}>
                <ItemListHeader />
                <Divider />
                <ItemListTableContainer
                    data={data}
                    path={props.path}
                />
            </Paper>
        </ItemCategoryErrorBoundary>
    );
};
