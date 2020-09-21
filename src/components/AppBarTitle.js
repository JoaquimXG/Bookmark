//External Import
import React from "react";
import { Box, Typography } from "@material-ui/core";
import { useQuery } from "@apollo/client";
import { useRouteMatch } from "react-router-dom";

//Style
import { myStyles } from "../static/css/style";

//Queries and mutations
import { individualQueries } from "../static/apollo/queries";

//Custom Components
import DisplayMessageCard from "./DisplayMessageCard";

//Templates
import navBarItems from "../static/templates/navBarTemplates";

const toTitleCase = string => {
    //Only works on a single word

    string = string.toLowerCase()
    string = string[0].toUpperCase() + string.slice(1)

    return string
}

export default props => {
    const classes = myStyles();
    const query = individualQueries.companyInfo.query;
    const matchObject = {
        path: [
            "/companies/:site_id/:itemType/:id/",
            "/companies/:site_id/:itemType/",
            "/companies/:site_id/"
        ],
        strict: false
    };
    const match = useRouteMatch(matchObject);

    console.log(match.params);

    const { loading:siteLoading, error: siteError, data:siteData } = useQuery(query, {
        variables: { id: props.site_id }
    });
//    const { loading:itemLoading, error: itemError, data:itemData } = useQuery(query, {
//        variables: { id: props.site_id }
//    });

    if (siteLoading) return <DisplayMessageCard variant="loading" />;
    if (siteError) return <DisplayMessageCard variant="error" />;


    return (
        <Box className={classes.appBarTitle}>
            <Typography variant="h5">{`${siteData.site.name}\
            ${match.params.itemType? " / " + match.params.itemType: ""}\
                ${match.params.id? " / " + match.params.id : ""}`}</Typography>
        </Box>
    );
};
