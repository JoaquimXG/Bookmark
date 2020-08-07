//External Imports
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

//Custom components
import { drawerWidth } from "../App";
import MinorCard from "./MinorCard";

const margin = 25;

const useStyles = makeStyles(theme => ({
    main: {
        [theme.breakpoints.up("sm")]: {
            marginLeft: drawerWidth + margin
        },
        margin: margin,
        display: "flex",
        flexGrow: 1
    },

    titleTextField: {
        fontSize: "1.5rem",
        lineHeight: "1.5rem",
        letterSpacing: "0rem",
        marginRight: "6px"
    },

    titleTextFieldInput: {
        padding: "8px 0px"
    },

    primaryCard: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        position: "relative"
    },

    header: {
        display: "flex",
        alignItems: "center",
        justifyItems: "space-between",
        height: 65,
        padding: theme.spacing(3) + 2
    },

    dataCard: {
        padding: theme.spacing(2)
    },

    primaryCardGrid: {
        padding: theme.spacing(3)
    }
}));

export default props => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Box className={classes.main}>
            <Paper className={classes.primaryCard} elevation={8}>
                <header className={classes.header}>
                    <Typography style={{ flexGrow: 1 }} variant="h5">
                        {"Company Info"}
                    </Typography>
                    {props.buttons.map((value, index) => {
                        return (
                            <Button
                                onClick={value =>
                                    console.log(`Pressed ${value.text}`)
                                }
                                key={index}
                                variant="contained"
                                startIcon={<value.icon />}
                                size="small"
                                style={{
                                    margin: theme.spacing(1),
                                    color: value.textColor
                                        ? value.textColor
                                        : "white",
                                    background: value.color,
                                    minWidth: value.minWidth
                                        ? value.minWidth
                                        : "auto"
                                }}
                            >
                                {value.text}
                            </Button>
                        );
                    })}
                </header>
                <Divider />
                <Box
                    style={{
                        overflowY: "auto",
                        overflowX: "hidden",
                        flexGrow: 1
                    }}
                >
                    <Grid
                        container
                        className={classes.primaryCardGrid}
                        spacing={3}
                    >
                        {props.cards.map((card, index) => {
                            return (
                                <Grid
                                    key={index}
                                    item
                                    xs={
                                        card.columns.xs ? card.columns.xs : true
                                    }
                                >
                                    <MinorCard
                                        formValues={props.formValues}
                                        elevation={2}
                                        style={{ flexGrow: 1 }}
                                        title={card.title}
                                        content={card.content}
                                    ></MinorCard>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Box>
            </Paper>
        </Box>
    );
};
