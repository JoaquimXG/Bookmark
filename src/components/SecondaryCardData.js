import React from 'react';
import {makeStyles, Box, Typography, Divider, useTheme} from '@material-ui/core';
import data from '../static/pre-api-helpers/activityFeed'
import {NotificationImportantSharp} from '@material-ui/icons';
import {themeColors} from '../App'

const useStyle = makeStyles(theme => ({
    main: {
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
    },
}))

export default props => {
    const classes = useStyle();
    const theme = useTheme();

    return (
        <Box className={classes.main}>
            <header style={{display: "flex",alignItems: "center", flexDirection: "row", marginBottom: theme.spacing(1.5)}}>
                <NotificationImportantSharp style={{color: themeColors.error, marginRight: theme.spacing(1)}}/>
                <Typography variant="h5">Activity Feed</Typography>
            </header >
            {data.map((value, index) => {
                return (
                    <div key={index}>
                        <Typography style={{color: "#646464"}}variant="caption">{`${value.type} - ${value.time}`}</Typography>
                        <Typography gutterBottom variant="subtitle2">{`${value.author} updated: ${value.item}`}</Typography>
                        <Divider style={{marginBottom: theme.spacing(1)}}/>
                    </div>
                )
            })
            }
        </Box>
    )
}
