//External Imports
import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

//Style
import { myStyles } from "../static/css/style";

//Templates
import { NavLink } from "react-router-dom";

export default props => {
    const classes = myStyles();

    const listItem = props.listItem;
    console.log("props.id inside list item", props.id);
    const selected = props.id === listItem.id;
    console.log("selected", selected);
    return (
        <NavLink
            style={{ textDecoration: "none" }}
            exact
            //TO-DO, Navigate to the ID rather than to the path string
            to={`/${listItem.listText}`}
            onClick={() => props.setId(listItem.id)}
            activeClassName={classes.navItemOnSelect}
            //TO-DO, conditionally set classname depending on selected
        >
            <ListItem
                selected={selected}
                className={classes.navBarListItem}
                button
            >
                <ListItemIcon>{listItem.listIcon}</ListItemIcon>
                <ListItemText primary={listItem.listText} />
            </ListItem>
        </NavLink>
    );
};
