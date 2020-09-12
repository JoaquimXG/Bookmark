//External Imports
import React, { useState, useEffect } from "react";
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
    const [selected, setSelected] = useState({});
    const itemType = `${props.path}s`;

    const { loading, error, data } = useQuery(
        itemListQueries[props.path].query
    );

    const toggleSelectAll = e => {
        const isChecked = e.target.checked;
        var newSelected = {};
        data[itemType].forEach(value => {
            newSelected[value.id] = isChecked;
        });
        setSelected(newSelected);
    };

    const toggleSelected = e => {
        const isChecked = e.target.checked;
        const id = e.target.id;
        setSelected(current => ({ ...current, [id]: isChecked }));
    };

    if (loading) return <DisplayMessageCard variant="loading" />;
    if (error) return <DisplayMessageCard variant="error" />;

    return (
        <ItemCategoryErrorBoundary myclasses={classes}>
            <Paper className={classes.itemList} elevation={8}>
                <ItemListHeader />
                <Divider />
                <ItemListTableContainer
                    data={data}
                    path={props.path}
                    selected={selected}
                    toggleSelectAll={toggleSelectAll}
                    toggleSelected={toggleSelected}
                />
            </Paper>
        </ItemCategoryErrorBoundary>
    );
};
