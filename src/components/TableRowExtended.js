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

    cell: { position: "relative", color: themeColors.secondary5 }
}));

export default props => {
    const classes = useStyles();

    const testing = () => {
        console.log(props.row);
    };

    return (
        <TableRow hover>
            <TableCell className={classes.checkbox} padding="checkbox">
                <Checkbox></Checkbox>
                <Divider className={classes.divider} orientation="vertical" />
            </TableCell>
            {props.row.data.map(cell => (
                <TableCell
                    onClick={testing}
                    to={`${props.path}/${props.row.id}`}
                    component={Link}
                    className={classes.cell}
                    key={cell}
                >
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
