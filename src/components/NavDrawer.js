//External Import
import React from "react";
import { Hidden, Drawer } from "@material-ui/core";

//Custom Components
import NavBar from "./NavBar";

//Style
import { myStyles } from "../static/css/style";

export default props => {
    const classes = myStyles();

    return (
        <nav className={classes.navDrawer}>
            <Hidden smUp implementation="css">
                <Drawer
                    open={props.mobileOpen}
                    onClose={props.toggleSlider}
                    variant="temporary"
                    ModalProps={{ keepMounted: true }}
                >
                    {
                        <NavBar
                            site_id={props.site_id}
                            setId={props.setId}
                            id={props.id}
                        />
                    }
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer open onClose={props.toggleSlider} variant="permanent">
                    {
                        <NavBar
                            site_id={props.site_id}
                            setId={props.setId}
                            id={props.id}
                        />
                    }
                </Drawer>
            </Hidden>
        </nav>
    );
};
