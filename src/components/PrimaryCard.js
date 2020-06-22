import React from "react";
import {
    Paper,
    makeStyles,
    Box,
    Typography,
    Divider,
    Button,
    Grid,
    useTheme
} from "@material-ui/core";
import { drawerWidth, themeColors } from "../App";

import CreateIcon from "@material-ui/icons/Create";
import MinorCard from "./MinorCard";
import { companyCardData } from "../static/pre-api-helpers/minorCardData";

const margin = 25;

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },

    main: {
        [theme.breakpoints.up("sm")]: {
            marginLeft: drawerWidth + margin
        },
        margin: margin
    },

    header: {
        display: "flex",
        alignItems: "center",
        height: 65,
        padding: theme.spacing(3)
    },

    dataCard: {
        padding: theme.spacing(2)
    },

    primarCardGrid: {
        padding: theme.spacing(3),
        flexGrow: 1
    },

}));

export const PrimaryCard = () => {
    const classes = useStyles();
    const theme = useTheme()

    return (
        <Box className={classes.main}>
            <Paper style={{ minHeight: 720 }} elevation={8}>
                <header className={classes.header}>
                    <Typography style={{ flexGrow: 1 }} variant="h5">
                        Important Items
                    </Typography>
                    <Button
                        variant="contained"
                        startIcon={<CreateIcon />}
                        style={{
                            color: "white",
                            background: themeColors.secondary5
                        }}
                    >
                        Edit
                    </Button>
                </header>
                <Divider />
                <Grid container justify="space-between" className={classes.primarCardGrid} spacing={3}>
                    {companyCardData.cards.map((value, index) => {
                        return (
                            <Grid key={index} item xs={value.columns.xs ? value.columns.xs : true }>
                                <MinorCard elevation={2} style={{flexGrow: 1}}title={value.title} content={value.content}>Hello</MinorCard>
                            </Grid>
                        );
                    })}
                </Grid>
            </Paper>
        </Box>
    );
};
