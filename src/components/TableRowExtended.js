//External Imports
import React from "react";
import {
    TableRow,
    TableCell,
    Checkbox,
    Divider,
    Typography
} from "@material-ui/core";
import { Link } from "react-router-dom";

//Style
import { myStyles } from "../static/css/style";

//Templates
import { columnHeaders } from "../static/templates/itemListStaticTemplates";

export default props => {
    const classes = myStyles();
    const id = props.row.id;

    const isChecked = props.selected[id] ? props.selected[id] : false;

    return (
        <TableRow hover>
            <TableCell className={classes.tableCellCheckbox} padding="checkbox">
                <Checkbox
                    id={id}
                    checked={isChecked}
                    onChange={e => props.toggleSelected(e)}
                ></Checkbox>
                <Divider
                    className={classes.tableCellDivider}
                    orientation="vertical"
                />
            </TableCell>
            {columnHeaders[props.path].map(column => (
                <TableCell
                    to={`/companies/${props.site_id}/${props.path}s/${props.row.id}`}
                    component={Link}
                    className={classes.tableCell}
                    key={`${column.id}-${props.row.id}`}
                >
                    <Typography variant="subtitle2">
                        {props.row[column.id]}
                    </Typography>
                    <Divider
                        className={classes.tableCellDivider}
                        orientation="vertical"
                    />
                </TableCell>
            ))}
        </TableRow>
    );
};
