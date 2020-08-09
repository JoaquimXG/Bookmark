import React from "react";
import {
    TableHead,
    TableRow,
    TableCell,
    Checkbox,
    Divider,
    Typography
} from "@material-ui/core";
import { ArrowDownwardSharp } from "@material-ui/icons";

//Styles
import { myStyles } from "../static/css/style";

export default props => {
    const classes = myStyles();

    return (
        <TableHead>
            <TableRow>
                <TableCell
                    className={classes.tableCellCheckbox}
                    padding="checkbox"
                    variant="head"
                >
                    <Checkbox></Checkbox>
                    <Divider
                        className={classes.tableCellDivider}
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
                            className={classes.tableHeaderArrowIcon}
                            fontSize="small"
                        />
                        <Divider
                            className={classes.tableCellDivider}
                            orientation="vertical"
                        />
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};
