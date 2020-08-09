//External Imports
import React from "react";
import { Box } from "@material-ui/core";
import { AddSharp } from "@material-ui/icons";

//Custom components
import MyDropzoneArea from "./MyDropZoneArea";

//Style
import { myStyles } from "../static/css/style";
import MyButton from "./MyButton";

export default props => {
    const classes = myStyles();

    return (
        <Box className={classes.addFile}>
            <MyButton text="Browse" color="blue" icon={<AddSharp />}/>
            <MyDropzoneArea />
        </Box>
    );
};
