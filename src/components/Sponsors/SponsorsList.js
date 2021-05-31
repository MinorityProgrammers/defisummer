import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';

import Sponsor from './Sponsor'
import {data} from '../../Data/DummyData'

const useStyles = makeStyles (() => ({
    container: {
        margin: '0 15vh'
    },
    sponsors:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        width: '70%',
        margin: '5vh auto'
    }
}))

export default function SponsorsList () {
    let classes = useStyles();

    const sponsors = data.sponsors.map(sponsor => <Sponsor key={sponsor.id} data={sponsor}/>)
    return(
        <div className={classes.container}> 
            <Typography variant='h5' style={{textAlign: 'right'}}>
                {'<BROUGHT_TO_YOU_BY/>'}
            </Typography>
            <div className={classes.sponsors}>
                {sponsors}
            </div>
        </div>
    )
}