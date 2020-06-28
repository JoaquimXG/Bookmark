import React from "react";
import { Box, makeStyles, Paper, Divider } from "@material-ui/core";
import SecondaryCardButtonRow from "./SecondaryCardButtonRow";
import SecondaryCardList from "./SecondaryCardList";

const useStyle = makeStyles(theme => ({
    main: {
        marginLeft: "0px",
        margin: 25,
        display: "flex"
    },

    secondaryCard : {
        minWidth: 350,
        display: "flex",
        flexDirection: "column"

    },

    secondaryCardList: {
        padding: theme.spacing(3),
        overflowY: "auto",
        overflowX: "hidden"
    }

}));

export default props => {
    const classes = useStyle();

    return (
        <Box className={classes.main}>
            <Paper elevation={8} className={classes.secondaryCard} >
                <SecondaryCardButtonRow buttons={props.buttons} />
                <Divider />
                <Box className={classes.secondaryCardList}>
                    {props.data.map((value, index) => {
                        return (
                            <SecondaryCardList
                                key={index}
                                title={value.title}
                                caption={value.caption}
                                body={value.body}
                                icon={value.icon}
                                data={value.data}
                            />
                        );
                    })}
                </Box>
            </Paper>
        </Box>
    );
};
