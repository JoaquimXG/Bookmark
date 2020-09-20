//External Imports
import React from "react";
import { TableBody } from "@material-ui/core";

//Custome Components
import TableRowExtended from "./TableRowExtended";

//Templates, queries
import { itemListQueries } from "../static/apollo/queries";

export default props => {
    return (
        <TableBody>
            {props.data[itemListQueries[props.path].data].map(row => (
                <TableRowExtended
                    site_id={props.site_id}
                    path={props.path}
                    key={row.id}
                    row={row}
                    selected={props.selected}
                    toggleSelected={props.toggleSelected}
                />
            ))}
        </TableBody>
    );
};
