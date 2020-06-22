import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import { themeColors } from "../App";

const useStyle = makeStyles(theme => ({
    buttonRow: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: 65,
        padding: theme.spacing(3)
    }
}));

export default props => {
    const classes = useStyle();
    console.log(themeColors.secondary5);

    return (
        <div className={classes.buttonRow}>
            {props.buttons.map((value, index) => {
                return (
                    <Button
                        key={index}
                        variant="contained"
                        startIcon={<value.icon />}
                        size="small"
                        style={{
                            color: "white",
                            background: value.color
                        }}
                    >
                        {value.text}   
                    </Button>
                );
            })}
        </div>
    );
};
