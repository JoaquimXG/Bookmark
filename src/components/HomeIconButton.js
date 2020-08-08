//External Import
import React from "react";
import { IconButton } from "@material-ui/core";
import { Home } from "@material-ui/icons";

export default props => {
    return (
        <IconButton style={{ color: "white" }} edge="end">
            <Home />
        </IconButton>
    );
};
