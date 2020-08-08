//External Imports
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AppBar, Toolbar, Box } from "@material-ui/core";

//Custom Components
import AppBarDecoration from "./AppBarDecoration";
import NavDrawer from "./NavDrawer";
import AppBarTitle from "./AppBarTitle";
import MenuIconButton from "./MenuIconButton";
import HomeIconButton from "./HomeIconButton";

//Local data and templates
import { themeColors, myStyles } from "../static/css/style";
import navBarItems from "../static/templates/navBarTemplates";

export default props => {
    const classes = myStyles();

    const [mobileOpen, setMobileOpen] = useState(false);
    const [id, setId] = useState(undefined);

    const currentPage = useLocation().pathname;
    console.log("current page", currentPage);
    console.log("navBarItems", navBarItems)
    var currentId;
    if (id === undefined) {
        currentId = navBarItems.find(item =>
            currentPage.toLowerCase().includes(item.listText.toLowerCase())
        ).id;
    }

    useEffect(() => {
        setId(currentId);
    }, [currentId]);

    const toggleSlider = () => {
        setMobileOpen(!mobileOpen);
    };
    return (
        <Box>
            <AppBarDecoration color={themeColors.primary6} />
            <AppBar
                className={classes.appBar}
                position="static"
                style={{ background: themeColors.primary5 }}
            >
                <Toolbar className={classes.appBarToolbar}>
                    <MenuIconButton toggleSlider={toggleSlider} />
                    <AppBarTitle id={id} />
                    <HomeIconButton />
                    <NavDrawer
                        setId={setId}
                        id={id}
                        toggleSlider={toggleSlider}
                        mobileOpen={mobileOpen}
                    />
                </Toolbar>
            </AppBar>
        </Box>
    );
};
