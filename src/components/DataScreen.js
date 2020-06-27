import React from "react";
import PrimaryCard from "./PrimaryCard";
import SecondaryCard from "./SecondaryCard";
import { Box, makeStyles } from "@material-ui/core";
import { AppBarHeight } from "../App";

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

export default props => {
    const classes = useStyle();

    return (
        <div className={classes.main}>
            <Box className={classes.body}>
                <PrimaryCard
                    cards={props.cards}
                    buttons={props.buttons.primary}
                    title={props.title}
                />
                <SecondaryCard
                    data={props.secondaryCardData}
                    buttons={props.buttons.secondary}
                />
            </Box>
        </div>
    );
};
