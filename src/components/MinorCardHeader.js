//External Imports
import React from 'react';
import {Typography} from '@material-ui/core';

//Style
import {myStyles} from '../static/css/style'

export default props => {
    const classes = myStyles()

    return (
        <header className={classes.minorCardHeader}>
            <Typography variant="subtitle1">
                {props.title}
            </Typography>
        </header>
    );
};
