import React from "react";
import PrimaryCard from "./PrimaryCard";
import SecondaryCard from "./SecondaryCard";
import { Box, makeStyles, Typography, Paper, Button } from "@material-ui/core";
import { AppBarHeight } from "../App";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { individualQueries } from "../static/pre-api-helpers/queries";
import { drawerWidth } from "../App";
import { gql } from "apollo-boost";

const margin = 25;

const useStyle = makeStyles(theme => ({
    body: {
        display: "flex",
        flexDirection: "row",
        height: "100%",
        flexGrow: 1
    },

    main: {
        height: `calc(100vh - ${AppBarHeight.xs}px)`,
        background: "#BBC7CD",
        [theme.breakpoints.up("sm")]: {
            height: `calc(100vh - ${AppBarHeight.sm}px)`
        }
    },

    main2: {
        [theme.breakpoints.up("sm")]: {
            marginLeft: drawerWidth + margin
        },
        margin: margin,
        display: "flex",
        flexGrow: 1
    }
}));

const locationMutation = gql`
    mutation updateLocation($id: ID!) {
        updateLocation(id: $id) {
            id
        }
    }
`;

export default props => {
    const classes = useStyle();

    const [updateLocation, { data }] = useMutation(locationMutation);

    console.log("datascreen props", props);

    const testFunc = () => {
        updateLocation({ variables: { id: 5 } });
    };

    return (
        <div className={classes.main}>
            <Box className={classes.body}>
                <Box className={classes.main2}>
                    <Paper elevation={8}>
                        <Typography variant="h4" primary="test">
                            test
                        </Typography>
                        <Button onClick={()=> updateLocation({variables: {id: 5}})}>Test</Button>
                    </Paper>
                </Box>
            </Box>
        </div>
    );
};
