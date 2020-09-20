//External Imports
import React from "react";
import { Table } from "@material-ui/core";

//Style
import TableHeadExtended from "./TableHeadExtended";
import ItemListTableBody from "./ItemListTableBody";

//Templates, queries
import { columnHeaders } from "../static/templates/itemListStaticTemplates";

export default props => {
    return (
        <Table stickyHeader>
            <TableHeadExtended
                columns={columnHeaders[props.path]}
                selected={props.selected}
                toggleSelectAll={props.toggleSelectAll}
            />
            <ItemListTableBody
                site_id={props.site_id}
                data={props.data}
                path={props.path}
                selected={props.selected}
                toggleSelected={props.toggleSelected}
            />
        </Table>
    );
};
