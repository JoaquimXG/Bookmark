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
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

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

const locationMutation = gql`
    mutation updateLocation(
        $id: ID!
        $site_id: ID!
        $isnew: Boolean!
        $name: String
        $phone: String
        $fax: String
        $addr_1: String
        $addr_2: String
        $postcode: String
        $city: String
        $state: String
        $country: String
        $notes: String
        $type: String
    ) {
        location(
            locationinput: {
                id: $id
                site_id: $site_id
                isnew: $isnew
                name: $name
                phone: $phone
                fax: $fax
                addr_1: $addr_1
                addr_2: $addr_2
                postcode: $postcode
                city: $city
                state: $state
                country: $country
                notes: $notes
                type: $type
            }
        ) {
            updatedRow {
                id
                site_id
                name
                phone
                fax
                addr_1
                addr_2
                postcode
                city
                state
                country
                notes
                type
            }
            error {
                field
                message
            }
            isnew
        }
    }
`;

export default props => {
    const classes = useStyles();
    const theme = useTheme();
    const [edit, setEdit] = useState(false);
    const [formValues, setFormValues] = useState({});

    const [updateLocation, { data }] = useMutation(locationMutation);

    const myMutation = () => {
        console.log(formValues)
        var variables = {}
        variables.id = props.id
        variables.site_id = 12345
        variables.isnew = false
        Object.keys(formValues).map(key => variables[key] = formValues[key])
        console.log(variables)
        updateLocation({ variables: variables })
            .then(({data}) => {
                console.log(data)
            })
            .catch(e => {
                console.log(e)
            });
    }

    const buttonFunctions = {
        handleEditOnClick: () => {
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
                        return (
                            <Button
                                onClick={buttonFunctions.handleEditOnClick}
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
                        {props.cards.map((value, index) => {
                            return value.content.every(
                                subtitle => subtitle === null
                            ) ? null : (
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
