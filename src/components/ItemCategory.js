import React, { useEffect } from "react";
import { Box, makeStyles } from "@material-ui/core";
import {
    CreateSharp,
    AddSharp,
    GetAppSharp,
    PublishSharp
} from "@material-ui/icons";
import { themeColors, AppBarHeight } from "../App";
import ItemList from "./ItemList";
import ItemCategoryErrorBoundary from "./ItemCategoryErrorBoundary";

const useStyle = makeStyles(theme => ({
    body: {
        display: "flex",
        flexDirection: "row",
        height: "100%"
    },

    main: {
        height: `calc(100vh - ${AppBarHeight.xs}px)`,
        background: "#BBC7CD",
        [theme.breakpoints.up("sm")]: {
            height: `calc(100vh - ${AppBarHeight.sm}px)`
        }
    }
}));

const primaryButtons = [
    {
        icon: CreateSharp,
        get color() {
            return themeColors.secondary5;
        },
        text: "Edit"
    },
    {
        icon: PublishSharp,
        get color() {
            return themeColors.primary5;
        },
        text: "Export"
    },
    {
        icon: GetAppSharp,
        get color() {
            return themeColors.primary5;
        },
        text: "Import"
    },

    {
        icon: AddSharp,
        get color() {
            return themeColors.success;
        },
        text: "New"
    }
];

export default props => {
    const classes = useStyle();

    useEffect(() => {
        props.setRows(props.rows);
    }, [props]);

    return (
            <ItemCategoryErrorBoundary myclasses={classes}>
                <div className={classes.main}>
                    <Box className={classes.body}>
                        <ItemList
                            path={props.path}
                            rows={props.rows}
                            columns={props.colums}
                            buttons={primaryButtons}
                        />
                    </Box>
                </div>
            </ItemCategoryErrorBoundary>
    );
};
