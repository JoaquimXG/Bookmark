import React from "react";
import {Box} from "@material-ui/core";

export default props => {
    return (
        <Box
            style={{
                background: props.color,
                height: "1rem"
            }}
        ></Box>
    );
};
