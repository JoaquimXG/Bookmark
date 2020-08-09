//External Imports
import React from "react";
import { Typography } from "@material-ui/core";

//Style
import MyListItem from "./MyListItem";

export default props => {
    return props.listData ? (
        props.listData.map((listItem, index) => {
            return (
                <MyListItem
                    listItem={listItem}
                    key={index}
                    generateCaption={props.caption}
                    generateBody={props.body}
                />
            );
        })
    ) : (
        <Typography variant="subtitle2">
            There are no attachments to show
        </Typography>
    );
};
