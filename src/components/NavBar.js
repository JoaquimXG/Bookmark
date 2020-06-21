import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { menuItems } from "../static/pre-api-helpers/menu-items";
import Drawer from "@material-ui/core/Drawer";
import logo from "../static/images/Logo.svg";
import {drawerWidth, themeColors} from '../App'

import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
    ListItemIcon,
    Hidden
} from "@material-ui/core";
import { Home, Menu } from "@material-ui/icons";


// CSS Styles
const useStyles = makeStyles(theme => ({
    appBar: {
        [theme.breakpoints.up("sm")]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth
        }
    },

    toolbar: {
        height: "56px"
    },

    menuSliderContainer: {
        width: drawerWidth,
        background: "#ffffff"
    },

    menuButton: {
        color: "white",
        marginRight: theme.spacing(1),
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }

    },

    avatar: {
        margin: "auto",
        width: theme.spacing(18),
        height: theme.spacing(7.9)
    },

    listItem: {
        color: "Black"
    },

    drawer: {
        [theme.breakpoints.up("sm")]: {
            flexShrink: 0
        }
    }
}));

export const NavBar = () => {
    const classes = useStyles();

    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleSlider = () => {
        setMobileOpen(!mobileOpen);
        console.log(mobileOpen);
    };

    const NavBar = () => (
        <Box className={classes.menuSliderContainer}>
            <Box style={{ background: "#c4c4c4", height: "1rem", width: drawerWidth}}></Box>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                className={classes.toolbar}
            >
                <Avatar
                    className={classes.avatar}
                    variant="square"
                    src={logo}
                    alt="logo"
                />
                <Divider />
            </Box>
            <List>
                {menuItems.map((listItem, key) => (
                    <ListItem className={classes.listItem} button key={key}>
                        <ListItemIcon>{listItem.listIcon}</ListItemIcon>
                        <ListItemText primary={listItem.listText} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <Box>
                <Box
                    style={{
                        background: themeColors.primary6,
                        height: "1rem"
                    }}
                ></Box>
                <AppBar
                    className={classes.appBar}
                    position="static"
                    style={{ background: themeColors.primary5 }}
                >
                    <Toolbar className={classes.toolbar}>
                        <IconButton edge="start" onClick={toggleSlider}>
                            <Menu className={classes.menuButton}/>
                        </IconButton>
                        <Box pl={1} flexGrow={1}>
                            <Typography
                                className={classes.appBarTitle}
                                variant="h5"
                            >
                                Some Company
                            </Typography>
                        </Box>
                        <IconButton edge="end">
                            <Home style={{ color: "white" }} />
                        </IconButton>

                        <nav className={classes.drawer}>
                            <Hidden smUp implementation="css">
                                <Drawer
                                    open={mobileOpen}
                                    onClose={toggleSlider}
                                    variant="temporary"
                                    ModalProps={{ keepMounted: true }}
                                >
                                    {NavBar()}
                                </Drawer>
                            </Hidden>
                            <Hidden xsDown implementation="css">
                                <Drawer
                                    open
                                    onClose={toggleSlider}
                                    variant="permanent"
                                >
                                    {NavBar()}
                                </Drawer>
                            </Hidden>
                        </nav>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};
