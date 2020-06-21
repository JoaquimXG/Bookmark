import React from "react";
import {
    Paper,
    makeStyles,
    Box,
    Typography,
    Divider,
    Button,
    Grid
} from "@material-ui/core";
import { drawerWidth, themeColors } from "../App";

import CreateIcon from '@material-ui/icons/Create';

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
        padding: 30
    },

    dataCard: {
        padding: theme.spacing(2)

    }
}));

export const PrimaryCard = () => {
    const classes = useStyles();

    return (
        <Box className={classes.main}>
            <Paper style={{ minHeight: 720 }} elevation={8}>
                <header className={classes.header}>
                    <Typography style={{flexGrow:1}} variant="h6">Important Items</Typography>
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
                <Grid container justify="space-around" spacing={3}>
                    <Grid item xs={12}>
                    <Paper className={classes.dataCard}>
                        hello
                    </Paper>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};
