import React, {useState} from "react";
import {
    Paper,
    makeStyles,
    Typography,
    Divider,
    Box,
    TextField,
    ThemeProvider,
    createMuiTheme,
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    dataCard: {
        flexGrow: 1
    },

    header: {
        display: "flex",
        alignItems: "center",
        minHeight: 40,
        padding: theme.spacing(1, 2)
    },

    data: {
        display: "flex",
        flexDirection: "column",
        padding: theme.spacing(2)
    },

    fieldsTypography: {
        lineHeight: "1.0625rem",
        letterSpacing: "0.00938rem",
        fontSize: "0.875rem",
        fontWeight: "500",
        paddingBottom: "6px",
        wordWrap: "break-word"
    }
}));

const theme = createMuiTheme({
    overrides: {
        MuiInputBase: {
            root: {
                fontSize: "0.875rem",
                fontWeight: "500",
                lineHeight: "1.0625rem",
                letterSpacing: "0.00938rem"
            },
            multiline: {
                padding: "0px 0px 6px"
            }
        }
    }
});

export default props => {
    const classes = useStyles();

    return (
        <Paper elevation={props.elevation} className={classes.dataCard}>
            <header className={classes.header}>
                <Typography style={{ flexGrow: 1 }} variant="subtitle1">
                    {props.title}
                </Typography>
            </header>
            <Divider />
            <Box className={classes.data}>
                {props.content.map((value, index) => {
                    return value.content ||props.edit ? (
                        <React.Fragment key={index}>
                            <Typography
                                variant="caption"
                                style={{ color: "#646464", marginTop: "5px" }}
                            >
                                {value.title}
                            </Typography>
                            {props.edit ? (
                                <ThemeProvider theme={theme}>
                                    <TextField
                                        onChange={props.handleTextFieldChange}
                                        id={value.title}
                                        defaultValue={value.content}
                                        multiline
                                    >
                                    </TextField>
                                </ThemeProvider>
                            ) : (
                                <Typography
                                    className={classes.fieldsTypography}
                                    variant="subtitle2"
                                >
                                    {value.content}
                                </Typography>
                            )}
                        </React.Fragment>
                    ) : null;
                })}
            </Box>
        </Paper>
    );
};
