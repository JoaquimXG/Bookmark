import React from "react";
import { Box, makeStyles, Paper, Divider, useTheme } from "@material-ui/core";
import { themeColors } from "../App";
import SecondaryCardButtonRow from "./SecondaryCardButtonRow";
import ActivityFeed from "./ActivityFeed";

const margin = 25;

const useStyle = makeStyles(theme => ({
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: 65,
        padding: theme.spacing(3)
    },

    main: {
        marginLeft: "0px",
        margin: margin,
        display: "flex"
    },

    secondaryCardList: {
        padding: theme.spacing(3)
    }
}));

export default props => {
    const classes = useStyle();
    const theme = useTheme();
    console.log(theme);

    return (
        <Box className={classes.main}>
            <Paper elevation={8} style={{ minWidth: 350 }}>
                <SecondaryCardButtonRow />
                <Divider />
                <Box className={classes.secondaryCardList}>
                    <ActivityFeed />
                    <Divider style={{marginTop: theme.spacing(4), marginLeft: -(theme.spacing(3)), marginRight: -(theme.spacing(3))}}/>
                </Box>
            </Paper>
        </Box>
    );
};
