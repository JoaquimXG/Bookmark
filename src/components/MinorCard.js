import React from "react";
import { Paper, makeStyles, Typography, Divider, Box} from "@material-ui/core";

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
    }
}));

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
                    
                    return value? (
                        <React.Fragment key={index}>
                            <Typography variant="caption" style={{color: "#646464"}}>
                                {value.title}
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom>{value.content}</Typography>
                        </React.Fragment>
                    ): null;
                })}
            </Box>
        </Paper>
    );
};
