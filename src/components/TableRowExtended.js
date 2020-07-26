import React from "react";
import {
    TableRow,
    TableCell,
    Checkbox,
    Divider,
    Typography,
    makeStyles
} from "@material-ui/core";
import { themeColors } from "../App";
import { Link } from "react-router-dom";

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

    cell: {
        position: "relative",
        color: themeColors.secondary5,
        textDecoration: "none"
    }
}));

export default props => {
    const classes = useStyles();

    return (
        <TableRow hover>
            <TableCell className={classes.checkbox} padding="checkbox">
                <Checkbox></Checkbox>
                <Divider className={classes.divider} orientation="vertical" />
            </TableCell>
            {props.columns.map(column => (
                <TableCell
                    to={`/${props.path}s/${props.row.id}`}
                    component={Link}
                    className={classes.cell}
                    key={`${column.id}-${props.row.id}`}
                >
                    <Typography variant="subtitle2">{props.row[column.id]}</Typography>
                    <Divider
                        className={classes.divider}
                        orientation="vertical"
                    />
                </TableCell>
            ))}
        </TableRow>
    );
};
