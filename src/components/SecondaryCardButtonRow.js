import React from "react";
import { makeStyles, Button } from "@material-ui/core";

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

    const buttonHandlers={
        Copy: () => {
            console.log("copy")
        }
    }

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
                        onClick={buttonHandlers[value.text]}
                    >
                        {value.text}   
                    </Button>
                );
            })}
        </div>
    );
};
