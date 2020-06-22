import React from "react";
import { Box, makeStyles, Paper, Divider, useTheme } from "@material-ui/core";
import { themeColors } from "../App";
import SecondaryCardButtonRow from "./SecondaryCardButtonRow";
import SecondaryCardData from "./SecondaryCardData";
import {NotificationImportantSharp, AttachFileSharp, VpnKeySharp} from '@material-ui/icons';
import activityFeedData from "../static/pre-api-helpers/activityFeed";

const margin = 25;

const useStyle = makeStyles(theme => ({
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: 65,
        padding: theme.spacing(3)
    },

    main: {
        marginLeft: "0px",
        margin: margin,
        display: "flex"
    },

    secondaryCardList: {
        padding: theme.spacing(3)
    },
}));

export default props => {
    const classes = useStyle();
    const theme = useTheme();
    console.log(theme);

    return (
        <Box className={classes.main}>
            <Paper elevation={8} style={{ minWidth: 350 }}>
                <SecondaryCardButtonRow />
                <Divider />
                <Box className={classes.secondaryCardList}>
                    <SecondaryCardData
                        title="Activity Feed"
                        caption={(type, time) => `${type} - ${time}`}
                        body={(author, item) => `${author} updated: ${item}`}
                        icon={<NotificationImportantSharp style={{color: themeColors.error, marginRight: theme.spacing(1)}}/>}
                        data={activityFeedData}
                    />
                    <SecondaryCardData
                        title="Top Attachments"
                        caption={(time) => `Last Viewed: ${time}`}
                        body={(author, item) => `${author}: ${item}`}
                        icon={<AttachFileSharp style={{marginRight: theme.spacing(1)}}/>}
                        data={null}
                    />
                    <SecondaryCardData
                        title="Top Credentials"
                        caption={(time) => `Last Viewed: ${time}`}
                        body={(author, item) => `${author}: ${item}`}
                        icon={<VpnKeySharp style={{marginRight: theme.spacing(1)}}/>}
                        data={null}
                    />
                </Box>
            </Paper>
        </Box>
    );
};
