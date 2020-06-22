import React from "react";
import { NavBar } from "./NavBar";
import { PrimaryCard } from "./PrimaryCard";
import SecondaryMenuCard from "./SecondaryMenuCard";
import {Box, makeStyles} from "@material-ui/core";

const useStyle = makeStyles(theme => ({
    body: {
        display: "flex",
        flexDirection: "row"
    }
}))

export default () => {
    const classes = useStyle()
    return (
        <div style={{ height: "100vh", background: "#BBC7CD" }}>
            <NavBar />
            <Box className={classes.body}>
                <PrimaryCard />
                <SecondaryMenuCard />
            </Box>
        </div>
    );
};
