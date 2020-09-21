//External Import
import React from "react";
import { Breadcrumbs, Link } from "@material-ui/core";
import { useRouteMatch } from "react-router-dom";
import { useQuery, useLazyQuery } from "@apollo/client";
import { Link as RouterLink } from "react-router-dom";

//Queries and mutations
import { individualQueries } from "../static/apollo/queries";

//Custom Components
import DisplayMessageCard from "./DisplayMessageCard";
import { myStyles } from "../static/css/style";

const toTitleCase = string => {
    //Only works on a single word
    string = string.toLowerCase();
    string = string[0].toUpperCase() + string.slice(1);
    return string;
};

const LinkRouter = props => <Link {...props} component={RouterLink} />;

export default props => {
    const classes = myStyles();
    const siteQuery = individualQueries.companyInfo.query;

    const matchObject = {
        path: [
            "/companies/:site_id/:itemType/:id/",
            "/companies/:site_id/:itemType/",
            "/companies/:site_id/"
        ],
        strict: false
    };
    const { params } = useRouteMatch(matchObject);
    const site_id = params.site_id ? params.site_id : null;
    const itemType = params.itemType ? toTitleCase(params.itemType) : null;
    const id = params.id ? params.id : null;

    const { loading: siteLoading, error: siteError, data: siteData } = useQuery(
        siteQuery,
        {
            variables: { id: site_id }
        }
    );


    if (siteLoading) return <DisplayMessageCard variant="loading" />;
    if (siteError) return <DisplayMessageCard variant="error" />;

    return (
        <Breadcrumbs className={classes.breadcrumbs}>
            {siteData.site.name && (
                <LinkRouter
                    className={classes.breadcrumbs}
                    to={`/companies/${site_id}`}
                >
                    {siteData.site.name}
                </LinkRouter>
            )}
            {itemType && (
                <LinkRouter
                    className={classes.breadcrumbs}
                    to={`/companies/${site_id}/${itemType}`}
                >
                    {itemType}
                </LinkRouter>
            )}
            {id && (
                <LinkRouter
                    className={classes.breadcrumbs}
                    to={`/companies/${site_id}/${itemType}/${id}`}
                >
                    {id}
                </LinkRouter>
            )}
        </Breadcrumbs>
    );
};
