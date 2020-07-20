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

const myMutation = (
    isNew,
    id,
    updatedValues,
    updateFunction,
    handleErrorFunction,
    handleSuccessfulUpdateFunction,
    site_id = 12345
) => {
    var variables = {};
    if (!isNew) {
        variables.id = id;
    }
    //TO-DO remove hardcode site_id
    variables.site_id = site_id;
    variables.isnew = isNew;
    Object.keys(updatedValues).map(
        //loop through the formvalues object and copy values into variables
        //if the string is empty then copy across null instead
        //the empty string will be accepted and then we can't assess for empty fields
        key =>
            (variables[key] =
                updatedValues[key] === "" ? null : updatedValues[key])
    );
    updateFunction({ variables: variables, errorPolicy: "all" }).then(
        success => {
            if (success.errors) {
                handleErrorFunction(success.errors);
            } else {
                handleSuccessfulUpdateFunction(success);
            }
        },
        failure => {
            handleErrorFunction(failure);
        }
    );
};

export default props => {
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();
    //when true, editable fields are displayed
    const [edit, setEdit] = useState(false);
    const [newItem, setNewItem] = useState(false);

    //when set, an error box will be displayed with the given message
    const [message, setMessage] = useState({});
    //when true the form is being submitted
    const [submitted, setSubmitted] = useState(false);

    const [deleteItem, { data: deleteData }] = useMutation(
        mutations[props.path].delete
    );

    const resetFormValues = () => {
        props.setFormValues(props.initialFormValues);
    };
    const clearFormValues = () => {
        props.setFormValues({});
    };

    //Sets the message to be displayed in the error box
    //The error box is only displayed when message.display is true
    const handleBadFormSubmit = () => {
        setMessage({
            text: "Please Fill Required Fields",
            display: true
        });
        setSubmitted(true);
        setTimeout(() => {
            setMessage(message => ({ ...message, display: false }));
        }, 2000);
    };

    const handleSuccessfulUpdate = success => {
        let id = success.data[props.path].updatedRow.id;
        setEdit(false);
        history.push(`/${props.path}s/${id}`);
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
                setEdit(true);
            } else {
                resetFormValues();
                setSubmitted(false);
                setEdit(false);
            }
            setNewItem(!newItem);
        },
        Save: () => {
            console.log("pressed save");
            myMutation(
                newItem,
                props.id,
                props.formValues,
                props.updateItem,
                handleBadFormSubmit,
                handleSuccessfulUpdate,
                12345
            );
        }
    };

    const handleTextFieldChange = event => {
        props.setFormValues({
            ...props.formValues,
            [event.target.id]: event.target.value
        });
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
                            value={props.formValues.name}
                            disabled={props.header.disabled}
                            error={
                                (submitted && !props.formValues.name) ||
                                props.formValues.name === ""
                                    ? true
                                    : false
                            }
                        ></TextField>
                    ) : (
                        <Typography style={{ flexGrow: 1 }} variant="h5">
                            {props.formValues.name}
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
                        {cards.map((card, index) => {
                            return card.content.every(
                                subtitle => subtitle.content === null
                            ) && !edit ? null : (
                                <Grid
                                    key={index}
                                    item
                                    xs={
                                        card.columns.xs ? card.columns.xs : true
                                    }
                                >
                                    <MinorCard
                                        formValues={props.formValues}
                                        handleTextFieldChange={
                                            handleTextFieldChange
                                        }
                                        submitted={submitted}
                                        newItem={newItem}
                                        edit={edit}
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
