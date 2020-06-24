import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import {
    CreateSharp,
    AddSharp,
    GetAppSharp,
    PublishSharp
} from "@material-ui/icons";
import { themeColors } from "../App";
import { companyCardData } from "../static/pre-api-helpers/minorCardData";
import ItemList from "./ItemList";

const useStyle = makeStyles(() => ({
    body: {
        display: "flex",
        flexDirection: "row"
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
        <div style={{ height: "100vh", background: "#BBC7CD" }}>
            <Box className={classes.body}>
                <ItemList
                    data={props.data}
                    cards={companyCardData.cards}
                    buttons={primaryButtons}
                    title="Important Items"
                />
            </Box>
        </div>
    );
};
