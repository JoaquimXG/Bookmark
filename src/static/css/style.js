//External Imports
import { makeStyles, createMuiTheme } from "@material-ui/core";

//Colors
export const themeColors = {
    primary6: "#546e7a",
    primary5: "#263238",
    primary3: "#90A4AE",

    secondary5: "#0D24A8",

    success: "#27AE60",

    error: "#FF0C3E"
};

//Navigation drawer width
export const drawerWidth = 250;
export const AppBarHeight = {
    xs: 72,
    sm: 80
};

//Mui Theme
export const myMuiTheme = createMuiTheme({
    overrides: {
        MuiInputBase: {
            root: {
                fontSize: "0.875rem",
                fontWeight: "500",
                lineHeight: "1.0625rem",
                letterSpacing: "0.00938rem"
            },
            multiline: {
                padding: "0px 0px 6px"
            }
        }
    }
});

//Theme

const margin = 25;
export const myStyles = makeStyles(theme => ({
    //Primary Card and Children
    primaryCard: {
        [theme.breakpoints.up("sm")]: {
            marginLeft: drawerWidth + 25
        },
        margin: margin,
        display: "flex",
        flexGrow: 1
    },
    primaryCardHeader: {
        display: "flex",
        alignItems: "center",
        justifyItems: "space-between",
        height: 65,
        padding: theme.spacing(3) + 2
    },

    primaryCardTitleTextField: {
        fontSize: "1.5rem",
        lineHeight: "1.5rem",
        letterSpacing: "0rem",
        marginRight: "6px"
    },
    primaryCardTitleTextFieldInput: {
        padding: "8px 0px"
    },

    minorCardHeader: {
        display: "flex",
        alignItems: "center",
        minHeight: 40,
        padding: theme.spacing(1, 2)
    },

    formValue: {
        lineHeight: "1.0625rem",
        letterSpacing: "0.00938rem",
        fontSize: "0.875rem",
        fontWeight: "500",
        paddingBottom: "6px",
        wordWrap: "break-word"
    },

    //Secondary card and children
    secondaryCard: {
        marginLeft: "0px",
        margin: 25,
        minWidth: 350,
        display: "flex",
        flexDirection: "column"
    },

    addFile: {
        margin: theme.spacing(0, 0, 1.5),
        display: "flex",
        justifyContent: "space-between"
    },

    //ItemList and Children
    itemList: {
        //When the drawer is being shown, the main container needs
        //to move in by the width of the drawer
        [theme.breakpoints.up("sm")]: {
            paddingLeft: drawerWidth + margin,
            height: `calc(100vh - ${AppBarHeight.sm}px)`
        },
        height: `calc(100vh - ${AppBarHeight.xs}px)`,
        padding: 25,
        display: "flex",
        background: "#BBC7CD"
    },

    itemListHeader: {
        display: "flex",
        alignItems: "center",
        justifyItems: "space-between",
        height: 75,
        padding: theme.spacing(3)
    },

    tableCell: {
        position: "relative",
        color: themeColors.secondary5,
        textDecoration: "none"
    },

    tableCellDivider: {
        position: "absolute",
        right: 0,
        top: 0
    },

    tableCellCheckbox: {
        padding: theme.spacing(0, 2),
        position: "relative"
    },

    //AppBar/NavBar and Children
    appBar: {
        [theme.breakpoints.up("sm")]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth
        }
    },

    appBarTitle: {
        paddingLeft: theme.spacing(1),
        flexGrow: 1
    },

    appBarAvatar: {
        margin: "auto",
        width: "144px",
        height: "64px"
    },

    appBarToolbar: {
        height: "56px"
    },
    navMenuSliderContainer: {
        width: drawerWidth,
        background: "#ffffff"
    },

    navDrawer: {
        [theme.breakpoints.up("sm")]: {
            flexShrink: 0
        }
    },

    navBarListItem: {
        color: "Black"
    },

    navItemOnSelect: {
        "& div::before": {
            position: "absolute",
            content: '""',
            right: 0,
            top: 0,
            height: "100%",
            background: themeColors.secondary5,
            width: theme.spacing(1)
        }
    },

    //Buttons
    buttonBlue: {
        color: "white",
        background: themeColors.secondary5,
        minWidth: "80px"
    },
    buttonRed: {
        color: "black",
        background: themeColors.error,
        minWidth: "80px"

    },
    buttonGreen: {
        color: "white",
        background: themeColors.success,
        minWidth: "80px"
    },
    buttonGrey: {
        color: "white",
        background: themeColors.primary5,
        minWidth: "80px"
    },


    buttonRow: {
        display: "flex",
        alignItems: "center",
        //padding: theme.spacing(3)
    },

    //Utility classes
    flexRowCenter: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row"
    },

    divider: {
        margin: theme.spacing(3, -3)
    },

    flexColumn: {
        display: "flex",
        flexDirection: "column"
    },
    spaceAround: {
        justifyContent: "space-around"
    },
    spaceBetween: {
        justifyContent: "space-between"
    },

    flexGrow: {
        flexGrow: 1
    },

    marginBottom1_5: {
        margin: theme.spacing(0, 0, 1.5)
    },

    padding2: {
        padding: theme.spacing(2)
    },

    padding3: {
        padding: theme.spacing(3)
    },

    primaryOverflow: {
        overflowY: "auto",
        overflowX: "hidden"
    }
}));
