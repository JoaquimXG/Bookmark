import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { AppBarHeight } from "../App";
import ItemList from "./ItemList";
import ItemCategoryErrorBoundary from "./ItemCategoryErrorBoundary";

const useStyle = makeStyles(theme => ({
    outermost: {
        height: `calc(100vh - ${AppBarHeight.xs}px)`,
        background: "#BBC7CD",
        [theme.breakpoints.up("sm")]: {
            height: `calc(100vh - ${AppBarHeight.sm}px)`
        },
        display: "flex"
    }
}));

export default props => {
    const classes = useStyle();

    return (
        <ItemCategoryErrorBoundary myclasses={classes}>
            <div className={classes.outermost}>
                    <ItemList path={props.path} />
            </div>
        </ItemCategoryErrorBoundary>
    );
};
