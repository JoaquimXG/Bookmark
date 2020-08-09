//External Imports
import React from "react";
import { Box, Divider } from "@material-ui/core";

//Cusomt Components
import AddFile from "./AddFile";
import DataListItems from "./DataListItems";
import DataListHeader from "./DataListHeader";

//Style
import { myStyles } from "../static/css/style";

export default props => {
    const classes = myStyles();

    return (
        <Box className={`${classes.flexColumn} ${classes.spaceAround}`}>
            <DataListHeader icon={props.icon} title={props.title} />
            {props.addFile && <AddFile />}
            <DataListItems
                listData={props.listData}
                caption={props.caption}
                body={props.body}
            />
            <Divider className={classes.divider} />
        </Box>
    );
};
