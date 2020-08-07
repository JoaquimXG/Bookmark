//External Imports
import React from "react";
import { Box, makeStyles } from "@material-ui/core";

//Custom Components
import SecondaryCard from "./SecondaryCard";
import CompanyInfoPrimaryCard from "./CompanyInfoPrimaryCard";

//Data, queries, mutations and templates
import { AppBarHeight } from "../App";

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
    }
}));

export default props => {
    const classes = useStyle();

    //var query = individualQueries.companyInfo.query;
    var id = 235537;

    const secondaryButtonFunctions = {
    };

    return (
        <div className={classes.main}>
            <Box className={classes.body}>
                <CompanyInfoPrimaryCard
                    path={props.path}
                    id={id}
                    cards={props.cards}
                    buttons={props.buttons.primary}
                    header={props.header}
                />
                <SecondaryCard
                    data={props.secondaryCardData}
                    buttons={props.buttons.secondary}
                    handleClick={secondaryButtonFunctions}
                />
            </Box>
        </div>
    );
};
