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
            <TableHeadExtended columns={columnHeaders[props.path]} />
            <ItemListTableBody data={props.data} path={props.path} />
        </Table>
    );
};
