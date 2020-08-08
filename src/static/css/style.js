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
export const myStyles = makeStyles(theme => ({
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

    primaryCard: {
        [theme.breakpoints.up("sm")]: {
            marginLeft: drawerWidth + 25
        },
        margin: 25,
        display: "flex",
        flexGrow: 1
    },


    //Utility classes
    flexColumn: {
        display: "flex",
        flexDirection: "column"
    },
    flexGrow: {
        flexGrow: 1,
    },

    padding2: {
        padding: theme.spacing(2)
    },

    padding3: {
        padding: theme.spacing(3)
    },

    primaryOverflow: {
        overflowY: "auto",
        overflowX: "hidden",
    },

}));
