import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { Typography, Grid } from '@material-ui/core';

import Sponsor from './Sponsor'
import {data} from '../../Data/DummyData'

const useStyles = makeStyles (() => ({
    container: {
        margin: '0 15vh'
    },
    sponsors:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%',
        margin: '5vh auto'
    }
}))

export default function SponsorsList () {
    let classes = useStyles();

    const sponsors = data.sponsors.map(sponsor => (
        <Grid item xs={12} md={4} sm={6} lg={4}>
            <Sponsor key={sponsor.id} data={sponsor}/>
        </Grid>
    ))
    return(
        <div className={classes.container}> 
            <Typography variant='h5' style={{textAlign: 'right'}}>
                {'<BROUGHT_TO_YOU_BY/>'}
            </Typography>
            <Grid container className={classes.sponsors}>
                {sponsors}
            </Grid>
        </div>
    )
}