import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Typography,Grid} from '@material-ui/core'

import Prize from './Prize'
import {data} from '../../Data/DummyData'

const useStyles = makeStyles (() => ({
    container:{
        margin: '10vh 8%',
    },
    prize:{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '10vh 0',
    }
}))

export default function PrizeTracks () {
    let classes = useStyles();
    const prizes = data.prize.map(p => (
        <Grid lg={4} md={4} sm={6} xs={7}>
            <Prize key={p.id} prizes={p}/>
        </Grid>
    ))

    return(
        <div className={classes.container}>
            <div>
            <Typography variant='h5' style={{fontWeight: 700}}>
                {'<PRIZE_TRACKS/>'}
            </Typography>
            <Typography variant='body2' style={{margin: '10px 0'}}>
                <span style={{fontWeight: 700}}>$10,000</span> in Prizes
            </Typography>
            </div>
            <Grid container className={classes.prize}>
                    {prizes}
            </Grid>
        </div>
    )
}