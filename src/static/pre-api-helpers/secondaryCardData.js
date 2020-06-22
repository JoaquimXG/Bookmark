import activityFeedData from './activityFeed'
import React from 'react';
import {NotificationImportantSharp, AttachFileSharp, VpnKeySharp} from '@material-ui/icons';
import {themeColors} from '../../App';
import {createMuiTheme} from '@material-ui/core';


const theme = createMuiTheme()

export default [
    {
                        title:"Activity Feed",
                        caption:(type, time) => `${type} - ${time}`,
                        body:(author, item) => `${author} updated: ${item}`,
                        icon:<NotificationImportantSharp style={{get color(){return themeColors.error}, marginRight: theme.spacing(1)}}/>,
                        data:activityFeedData
    },
    {

                        title:"Top Attachments",
                        caption:(time) => `Last Viewed: ${time}`,
                        body:(author, item) => `${author}: ${item}`,
                        icon:<AttachFileSharp style={{marginRight: theme.spacing(1)}}/>,
                        data:null
    },
    {

                        title:"Top Credentials",
                        caption:(time) => `Last Viewed: ${time}`,
                        body:(author, item) => `${author}: ${item}`,
                        icon:<VpnKeySharp style={{marginRight: theme.spacing(1)}}/>,
                        data:null,
    }

]
