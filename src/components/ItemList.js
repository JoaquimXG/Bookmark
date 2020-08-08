//External Imports
import React from "react";
import { Paper, Box, Divider } from "@material-ui/core";
import { useQuery } from "@apollo/client";

// Custom static components
import ItemCategoryErrorBoundary from "./ItemCategoryErrorBoundary";

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

    if (error) return <p>Error</p>;

    return (
        <ItemCategoryErrorBoundary myclasses={classes}>
            <Box className={classes.itemList}>
                <Paper
                    className={`${classes.flexGrow} ${classes.flexColumn}`}
                    elevation={8}
                >
                    <ItemListHeader />
                    <Divider />
                    <ItemListTableContainer
                        loading={loading}
                        data={data}
                        path={props.path}
                    />
                </Paper>
            </Box>
        </ItemCategoryErrorBoundary>
    );
};
