//External Import
import React from "react";
import { Box, Typography } from "@material-ui/core";

//Style
import { myStyles } from "../static/css/style";

//Templates
import navBarItems from "../static/templates/navBarTemplates";

export default props => {
    const classes = myStyles();

    const title = navBarItems.find(item => item.id === props.id)
    return (
        <Box className={classes.appBarTitle}>
            <Typography variant="h5">
                Some Company {title && `/ ${title.listText}`}
            </Typography>
        </Box>
    );
};
