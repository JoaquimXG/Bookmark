//External Import
import React from "react";
import { Box } from "@material-ui/core";

//Style
import { myStyles } from "../static/css/style";

//Custom Components
import MyBreadCrumbs from "./MyBreadCrumbs";

const toTitleCase = string => {
    //Only works on a single word

    string = string.toLowerCase();
    string = string[0].toUpperCase() + string.slice(1);

    return string;
};

export default props => {
    const classes = myStyles();

    //    const { loading:itemLoading, error: itemError, data:itemData } = useQuery(query, {
    //        variables: { id: props.site_id }
    //    });


    return (
        <Box className={classes.appBarTitle}>
            <MyBreadCrumbs />
        </Box>
    );
};
