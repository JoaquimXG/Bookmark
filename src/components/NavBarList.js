//External Imports
import React from "react";
import { List } from "@material-ui/core";

//Custom components
import NavBarListItem from "./NavBarListItem";

//Templates
import navBarItems from "../static/templates/navBarTemplates";

export default props => {
    return (
        <List>
            {navBarItems.map((listItem, index) => {
                return (
                    <NavBarListItem
                        key={index}
                        listItem={listItem}
                        setId={props.setId}
                        id={props.id}
                        site_id={props.site_id}
                        page={props.page}
                    />
                );
            })}
        </List>
    );
};
