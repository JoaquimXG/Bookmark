import React from "react";
import {
    makeStyles,
    Box,
    Typography,
    Divider,
    useTheme
} from "@material-ui/core";

const useStyle = makeStyles(theme => ({
    main: {
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column"
    }
}));

export default props => {
    const classes = useStyle();
    const theme = useTheme();

    return (
        <Box className={classes.main}>
            <header
                style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    marginBottom: theme.spacing(1.5)
                }}
            >
                {props.icon}
                <Typography variant="h5">{props.title}</Typography>
            </header>
            {props.data ? props.data.map((value, index) => {
                return (
                    <div key={index}>
                        <Typography
                            style={{color: "#646464" }}
                            variant="caption"
                        >
                            {props.caption(value.type, value.time)}
                        </Typography>
                        <Typography style={{marginTop: theme.spacing(0.5)}}gutterBottom variant="subtitle2">
                            {props.body(value.author, value.item)}
                        </Typography>
                        <Divider style={{ marginBottom: theme.spacing(1) }} />
                    </div>
                );
            }) : (
                <Typography variant="subtitle2">There are no attachments to show</Typography>
            )}
            <Divider
                style={{
                    marginTop: theme.spacing(4),
                    marginLeft: -theme.spacing(3),
                    marginRight: -theme.spacing(3),
                    marginBottom: theme.spacing(3),
                }}
            />
        </Box>
    );
};
