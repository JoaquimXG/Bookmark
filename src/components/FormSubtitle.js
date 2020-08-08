//External Imports
import React from "react";
import { Typography } from "@material-ui/core";

//Style
import { themeColors } from "../static/css/style";

export default props => {
    return (
        <Typography
            variant="caption"
            style={{ color: "#646464", marginTop: "5px" }}
        >
            {props.edit && props.required ? (
                <span>
                    <span>{props.title}</span>
                    <span
                        style={{
                            color: themeColors.secondary5,
                            fontWeight: "bold"
                        }}
                    >
                        *
                    </span>
                </span>
            ) : (
                props.title
            )}
        </Typography>
    );
};
