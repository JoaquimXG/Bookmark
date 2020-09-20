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
    const selected = props.id === listItem.id;
    return (
        <NavLink
            style={{ textDecoration: "none" }}
            //TO-DO, Navigate to the ID rather than to the path string
            to={`/companies/${props.site_id}/${listItem.listText}`}
            onClick={() => props.setId(listItem.id)}
            activeClassName={classes.navItemOnSelect}
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
