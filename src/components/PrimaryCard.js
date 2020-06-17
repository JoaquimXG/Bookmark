import React from 'react';
import { Paper, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    }
}))

export const PrimaryCard = () => {
    return (
        <Paper elevation={4}/>
    )
}
