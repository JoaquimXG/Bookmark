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
import mutations from "../static/pre-api-helpers/mutations";
import { useQuery, useMutation } from "@apollo/react-hooks";

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
    const [formValues, setFormValues] = useState({});
    const { loading, error, data } = useMutation(
        mutations.locationsMutation.mutation,
        { variables: { id: 2125, site_id: 12345, name: "Second Office", type: "Operating Location" } }
    );

    const buttonFunctions = {
        handleEditOnClick: () => {
            setEdit(!edit);
        }
    };

    if (data) {
        console.log("data", data);
    }
    if (error){
        console.log('error', error)
    }

    const handleTextFieldChange = event => {
        setFormValues({ ...formValues, [event.target.id]: event.target.value });
        console.log(props);
        console.log(mutations.locationsMutation);
    };

    return (
        <Box className={classes.main}>
            <Paper className={classes.primaryCard} elevation={8}>
                <header className={classes.header}>
                    <Typography style={{ flexGrow: 1 }} variant="h5">
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
