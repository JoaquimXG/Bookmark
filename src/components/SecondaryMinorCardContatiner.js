//External Imports
import React from "react";
import { Box } from "@material-ui/core";

//Style
import { myStyles } from "../static/css/style";

//Custom Components
import DataList from "./DataList";

export default props => {
    const classes = myStyles();

    return (
        <Box className={`${classes.primaryOverflow} ${classes.padding3}`}>
            {props.templates.map((value, index) => {
                return (
                    <DataList
                        addFile={value.addFile}
                        key={index}
                        title={value.title}
                        caption={value.caption}
                        body={value.body}
                        icon={value.icon}
                        listData={value.data}
                    />
                );
            })}
        </Box>
    );
};
