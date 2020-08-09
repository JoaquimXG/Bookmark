//External Imports
import React from "react";
import { Box, Button } from "@material-ui/core";
import { AddSharp } from "@material-ui/icons";

//Custom components
import MyDropzoneArea from "./MyDropZoneArea";

//Style
import { myStyles } from "../static/css/style";

export default props => {
    const classes = myStyles();

    return (
        <Box className={classes.addFile}>
            <Button
                variant="contained"
                startIcon={<AddSharp />}
                size="small"
                className={classes.buttonBlue}
            >
                Browse
            </Button>
            <MyDropzoneArea />
        </Box>
    );
};
