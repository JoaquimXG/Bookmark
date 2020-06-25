import activityFeedData from './activityFeed'
import React from 'react';
import {NotificationImportantSharp, AttachFileSharp, VpnKeySharp} from '@material-ui/icons';
import {themeColors} from '../../App';
import {createMuiTheme} from '@material-ui/core';

const theme = createMuiTheme()

export const companyInfoPrimaryCardData = {
    title: "Important Items",

    cards: [
        {
            title: "Company Notes",
            content:
            [
                {
                    title: "",
                    content: "This is where some notes can be kept about the item. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation." 
                },
            ],
            columns: {
                xs: 12,
            }
        },
        {
            title: "Recently Viewed",
            content: [
                {
                    title: "Credential",
                    content: "A Credential"
                },
                {
                    title: "Asset",
                    content: "An Asset"
                }
            ],
            columns: {
                xs: 4
            }
        },
        {
            title: "Recently Edited",
            content: [
                {
                    title: "Credential",
                    content: "A Credential"
                },
                {
                    title: "Asset",
                    content: "An Asset"
                }
            ],
            columns: {
                xs: 4,
            }
        },
        {
            title: "Important Contacts",
            content: [
                {
                    title: "Contact",
                    content: "A Contact"
                },
                {
                    title: "Contact",
                    content: "A Contact"
                },
                {
                    title: "Contact",
                    content: "Another Contact"
                }
            ],
            columns: {
                xs: 4,
            }
        }
    ]
};

export const companyInfoSecondaryCardData =  [
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
