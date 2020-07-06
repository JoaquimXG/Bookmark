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
import { drawerWidth } from "../App";
import MinorCard from "./MinorCard";
import { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import mutations from "../static/pre-api-helpers/mutations";

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

    primaryCard: { flexGrow: 1, display: "flex", flexDirection: "column" },

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
    const [edit, setEdit] = useState(false);
    const [newItem, setNewItem] = useState(false);
    const [formValues, setFormValues] = useState({});
    const [id, setID] = useState(props.id)

    const [updateLocation, { data }] = useMutation(
        mutations.locationsMutation.mutation
    );

    const myMutation = () => {
        var variables = {};
        variables.id = id;
        variables.site_id = 12345;
        variables.isnew = newItem;
        Object.keys(formValues).map(key => (variables[key] = formValues[key]));
        updateLocation({ variables: variables, errorPolicy: "all" })
            .then()
            .catch(e => {
                console.log(e);
            });
    };

    const cards = newItem? null : props.cards
    console.log(cards)

    const buttonFunctions = {
        Edit: () => {
            console.log("pressed save");
            setEdit(!edit);
        },
        Delete: () => {
            console.log("pressed delete");
            console.log(props.cards)
        },
        New: () => {
            console.log("pressed new");
            setEdit(!edit)
            setNewItem(!newItem);
        },
        Save: () => {
            console.log("pressed save");
            myMutation();
            setEdit(!edit);
        }
    };

    const handleTextFieldChange = event => {
        setFormValues({ ...formValues, [event.target.id]: event.target.value });
    };


    return (
        <Box className={classes.main}>
            <Paper className={classes.primaryCard} elevation={8}>
                <header className={classes.header}>
                    <Typography
                        onClick={myMutation}
                        style={{ flexGrow: 1 }}
                        variant="h5"
                    >
                        {props.title}
                    </Typography>
                    {props.buttons.map((value, index) => {
                        return edit && value.text === "Edit" ? (
                            <Button
                                onClick={buttonFunctions[value.save.text]}
                                key={index}
                                variant="contained"
                                startIcon={<value.save.icon />}
                                size="small"
                                style={{
                                    margin: theme.spacing(1),
                                    color: "white",
                                    background: value.save.color
                                }}
                            >
                                {value.save.text}
                            </Button>
                        ) : (
                            <Button
                                onClick={buttonFunctions[value.text]}
                                key={index}
                                variant="contained"
                                startIcon={<value.icon />}
                                size="small"
                                style={{
                                    margin: theme.spacing(1),
                                    color: value.textColor
                                        ? value.textColor
                                        : "white",
                                    background: value.color
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
                        {cards.map((value, index) => {
                            return value.content.every(
                                subtitle => subtitle.content === null
                            ) && !edit ? null : (
                                <Grid
                                    key={index}
                                    item
                                    xs={
                                        value.columns.xs
                                            ? value.columns.xs
                                            : true
                                    }
                                >
                                    <MinorCard
                                        formValues={formValues}
                                        handleTextFieldChange={
                                            handleTextFieldChange
                                        }
                                        newItem={newItem}
                                        edit={edit}
                                        elevation={2}
                                        style={{ flexGrow: 1 }}
                                        title={value.title}
                                        content={value.content}
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
