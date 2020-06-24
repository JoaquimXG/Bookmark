import React from "react";
import {
    TableRow,
    TableCell,
    Checkbox,
    Divider,
    Typography,
    useTheme,
    makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    divider: {
        position: "absolute",
        right: 0,
        top: 0
    },

    checkbox: {
        padding: theme.spacing(0, 2),
        position: "relative"
    },

    cell: { position: "relative" }
}));

export default props => {
    const theme = useTheme();
    const classes = useStyles();

    return (
        <TableRow hover>
            <TableCell className={classes.checkbox} padding="checkbox">
                <Checkbox></Checkbox>
                <Divider className={classes.divider} orientation="vertical" />
            </TableCell>
            {props.row.map(cell => (
                <TableCell className={classes.cell} key={cell}>
                    <Typography variant="subtitle2">{cell}</Typography>
                    <Divider
                        className={classes.divider}
                        orientation="vertical"
                    />
                </TableCell>
            ))}
        </TableRow>
    );
};
