import React from "react";
import {
    makeStyles,
    Button,
} from "@material-ui/core";
import { themeColors } from "../App";
import { CreateSharp, AddSharp, FileCopySharp } from "@material-ui/icons/";


const useStyle = makeStyles(theme => ({
    buttonRow: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: 65,
        padding: theme.spacing(3)
    },
}));

export default props => {
    const classes = useStyle();
    console.log(themeColors.secondary5);

    return (
        <div className={classes.buttonRow}>
            <Button
                variant="contained"
                startIcon={<CreateSharp />}
                size="small"
                style={{
                    color: "white",
                    background: themeColors.secondary5
                }}
            >
                Edit
            </Button>
            <Button
                variant="contained"
                startIcon={<FileCopySharp />}
                size="small"
                style={{
                    color: "white",
                    background: themeColors.primary5
                }}
            >
                Merge
            </Button>
            <Button
                variant="contained"
                startIcon={<AddSharp />}
                size="small"
                style={{
                    color: "white",
                    background: themeColors.success
                }}
            >
                New
            </Button>
        </div>
    );
};
