import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import {
    CreateSharp,
    AddSharp,
    GetAppSharp,
    PublishSharp
} from "@material-ui/icons";
import { themeColors, AppBarHeight } from "../App";
import { companyCardData } from "../static/pre-api-helpers/minorCardData";
import ItemList from "./ItemList";

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
            height: `calc(100vh - ${AppBarHeight.sm}px)`,
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

    return (
        <div className={classes.main} >
            <Box className={classes.body}>
                <ItemList
                    rows={props.rows}
                    columns={props.colums}
                    buttons={primaryButtons}
                />
            </Box>
        </div>
    );
};
