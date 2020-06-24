import React from "react";
import {
    TableHead,
    TableRow,
    TableCell,
    Checkbox,
    Divider,
    Typography,
    useTheme,
    makeStyles
} from "@material-ui/core";
import { ArrowDownwardSharp } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    divider: {
        position: "absolute",
        right: 0,
        top: 0
    },

    checkbox: {
        padding: theme.spacing(0, 2),
    },

    cell: { position: "relative" },

    arrowIcon: {
        position: "absolute",
        top: "35%",
        right: "16px"
    }
}));

export default props => {
    const theme = useTheme();
    const classes = useStyles();

    return (
        <TableHead>
            <TableRow>
                <TableCell
                    className={classes.checkbox}
                    padding="checkbox"
                    variant="head"
                >
                    <Checkbox></Checkbox>
                    <Divider
                        className={classes.divider}
                        orientation="vertical"
                    />
                </TableCell>
                {props.columns.map(column => (
                    <TableCell variant="head" key={column.id}>
                        <Typography
                            variant="subtitle1"
                            style={{ fontWeight: "bold" }}
                        >
                            {column.label}
                        </Typography>
                        <ArrowDownwardSharp
                            className={classes.arrowIcon}
                            fontSize="small"
                        />
                        <Divider
                            className={classes.divider}
                            orientation="vertical"
                        />
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};
