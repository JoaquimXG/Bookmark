import React from "react";
import {
    Paper,
    makeStyles,
    Box,
    Typography,
    Divider,
    Button,
    Grid,
    useTheme,
    TextField,
    InputAdornment,
    IconButton
} from "@material-ui/core";
import { SearchSharp } from "@material-ui/icons";
import { drawerWidth } from "../App";

import MinorCard from "./MinorCard";

const margin = 25;

const useStyles = makeStyles(theme => ({
    main: {
        [theme.breakpoints.up("sm")]: {
            marginLeft: drawerWidth + margin
        },
        margin: margin,
        display: "flex"
    },

    header: {
        display: "flex",
        alignItems: "center",
        justifyItems: "space-between",
        height: 75,
        padding: theme.spacing(3)
    },
    
    label: {
        borderColor: "red"
    },

    dataCard: {
        padding: theme.spacing(2)
    },

    primarCardGrid: {
        padding: theme.spacing(3),
        flexGrow: 1
    }
}));

export default props => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Box className={classes.main}>
            <Paper style={{ minHeight: 720 }} elevation={8}>
                <header className={classes.header}>
                    <TextField
                        label="Search"
                        size="small"
                        style={{ flexGrow: 1 , marginRight: "10px", borderColor: "red"}}
                        variant="outlined"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment>
                                    <IconButton>
                                        <SearchSharp />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                    {props.buttons.map((value, index) => {
                        return (
                            <Button
                                key={index}
                                variant="contained"
                                startIcon={<value.icon />}
                                size="small"
                                style={{
                                    margin: theme.spacing(1),
                                    color: "white",
                                    background: value.color
                                }}
                            >
                                {value.text}
                            </Button>
                        );
                    })}
                </header>
                <Divider />
                <Grid
                    container
                    justify="space-between"
                    className={classes.primarCardGrid}
                    spacing={3}
                >
                    {props.cards.map((value, index) => {
                        return (
                            <Grid
                                key={index}
                                item
                                xs={value.columns.xs ? value.columns.xs : true}
                            >
                                <MinorCard
                                    elevation={2}
                                    style={{ flexGrow: 1 }}
                                    title={value.title}
                                    content={value.content}
                                ></MinorCard>
                            </Grid>
                        );
                    })}
                </Grid>
            </Paper>
        </Box>
    );
};
