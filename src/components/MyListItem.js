//External Imports
import React from "react";
import { Typography, Divider, useTheme } from "@material-ui/core";

export default props => {
    const theme = useTheme();

    return (
        <div>
            <Typography style={{ color: "#646464" }} variant="caption">
                {props.generateCaption(
                    props.listItem.type,
                    props.listItem.time
                )}
            </Typography>
            <Typography
                style={{ margin: theme.spacing(0.5, 0) }}
                variant="subtitle2"
            >
                {props.generateBody(props.listItem.author, props.listItem.item)}
            </Typography>
            <Divider style={{ margin: theme.spacing(1, 0) }} />
        </div>
    );
};
