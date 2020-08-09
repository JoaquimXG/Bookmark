//External Imports
import React from "react";
import { Button } from "@material-ui/core";

export default props => {

    return (
        <Button
            variant="contained"
            startIcon={props.icon}
            size="small"
            className={props.className}
            onClick={props.onClick}
        >
            {props.text}
        </Button>
    );
};
