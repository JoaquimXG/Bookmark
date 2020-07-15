import React, { useEffect } from "react";
import {
    Paper,
    makeStyles,
    Box,
    Typography,
    Divider,
    Button,
    Grid,
    TextField,
    useTheme
} from "@material-ui/core";
import { drawerWidth } from "../App";
import MinorCard from "./MinorCard";
import { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import mutations from "../static/pre-api-helpers/mutations";
import { useHistory } from "react-router-dom";
import MyMessage from "./MyMessage";

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

const initialiseFormValues = (cards, title)=> {
    let tempFormValues = {name: title};
    cards
        .map(card => card.content)
        .flat()
        .forEach(
            value =>
                (tempFormValues[value.title] = value.content
                    ? value.content
                    : "")
        );
    return tempFormValues;
};

export default props => {
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();
    const [edit, setEdit] = useState(false);
    const [newItem, setNewItem] = useState(false);
    const [initialFormValues] = useState(initialiseFormValues(props.cards, props.title));
    const [formValues, setFormValues] = useState(initialFormValues);
    const [message, setMessage] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [id, setID] = useState(props.id);

    const [updateItem, { data }] = useMutation(
        mutations[props.path].mutation
    );

    const [deleteItem, { data: deleteData }] = useMutation(
        mutations[props.path].delete
    );

    const clearFormValues = () => {
        setFormValues({});
    };
    const resetFormValues = () => {
        setFormValues(initialFormValues);
    };

    //either updates the currently viewed item or creates a new one
    //dependant on if the id is of the current item and if .isnew is set to true
    const myMutation = () => {
        var variables = {};
        variables.id = id;
        variables.site_id = 12345;
        variables.isnew = newItem;
        Object.keys(formValues).map(key => (variables[key] = formValues[key] === "" ? null: formValues[key]));
        updateItem({ variables: variables, errorPolicy: "all" }).then(
            success => {
                console.log("succes", success);
                if (success.error){
                    console.log("error")
                }
                let id = success.data[props.path].updatedRow.id;
                setEdit(false)
                history.push(`/${props.path}s/${id}`);
            },
            failure => {
                console.log("failure", failure);
                setMessage({
                    text: "Please Fill Required Fields",
                    display: true
                });
                setSubmitted(true);
                setTimeout(() => {
                    setMessage(message => ({ ...message, display: false }));
                }, 2000);
            }
        );
    };

    const buttonFunctions = {
        Edit: () => {
            console.log("pressed save");
            setEdit(!edit);
        },
        Delete: () => {
            console.log("pressed delete");
            let variables = {};
            variables.id = props.id;
            variables.site_id = 12345;
            deleteItem({ variables: variables, errorPolicy: "all" }).then(
                success => {
                    console.log("succes", success);
                    history.push(`/${props.path}s`);
                },
                failure => {
                    console.log("failure", failure);
                }
            );
        },
        New: () => {
            console.log("pressed new");
            if (!newItem) {
                clearFormValues();
                setEdit(true)
            } else {
                resetFormValues();
                setSubmitted(false)
                setEdit(false)
            }
            setNewItem(!newItem);
        },
        Save: () => {
            console.log("pressed save");
            myMutation();
        }
    };

    const handleTextFieldChange = event => {
        setFormValues({ ...formValues, [event.target.id]: event.target.value });
    };

    const cards = newItem ? props.rowTemplate.cards : props.cards;

    return (
        <Box className={classes.main}>
            <Paper className={classes.primaryCard} elevation={8}>
                <MyMessage message={message} />
                <header className={classes.header}>
                    {edit ? (
                        <TextField
                            style={{ flexGrow: 1 }}
                            required
                            InputProps={{
                                className: classes.titleTextField,
                                classes: {
                                    input: classes.titleTextFieldInput
                                }
                            }}
                            onChange={handleTextFieldChange}
                            id="name"
                            placeholder="Title"
                            value={formValues.name}
                            error={
                                (submitted && !formValues.name) ||
                                formValues.name === ""
                                    ? true
                                    : false
                            }
                        ></TextField>
                    ) : (
                        <Typography style={{ flexGrow: 1 }} variant="h5">
                            {formValues.name}
                        </Typography>
                    )}
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
                                    background: value.save.color,
                                    minWidth: "80px"
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
                                        submitted={submitted}
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
