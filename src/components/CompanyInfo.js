import React from "react";
import PrimaryCard from "./PrimaryCard";
import SecondaryMenuCard from "./SecondaryMenuCard";
import { Box, makeStyles } from "@material-ui/core";
import {
    CreateSharp,
    PictureAsPdfSharp,
    AddSharp,
    FileCopySharp
} from "@material-ui/icons";
import { themeColors, AppBarHeight } from "../App";
import { companyCardData } from "../static/pre-api-helpers/minorCardData";
import secondaryCardData from "../static/pre-api-helpers/secondaryCardData";

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
        icon: PictureAsPdfSharp,
        get color() {
            return themeColors.primary5;
        },
        text: "Runbook"
    },
    {
        icon: CreateSharp,
        get color() {
            return themeColors.secondary5;
        },
        text: "Edit"
    }
];

const secondaryButtons = [
    {
        icon: CreateSharp,
        get color() {
            return themeColors.secondary5;
        },
        text: "Edit"
    },
    {
        icon: FileCopySharp,
        get color() {
            return themeColors.primary5;
        },
        text: "Merge"
    },
    {
        icon: AddSharp,
        get color() {
            return themeColors.success;
        },
        text: "New"
    }
];

export default () => {
    const classes = useStyle();

    return (
        <div className={classes.main}>
            <Box className={classes.body}>
                <PrimaryCard
                    cards={companyCardData.cards}
                    buttons={primaryButtons}
                    title="Important Items"
                />
                <SecondaryMenuCard
                    data={secondaryCardData}
                    buttons={secondaryButtons}
                />
            </Box>
        </div>
    );
};
