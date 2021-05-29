import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Typography} from '@material-ui/core'

import Prize from './Prize'
import {data} from '../../Data/DummyData'

const useStyles = makeStyles (() => ({
    container:{
        margin: '10vh 15vh'
    },
    prize:{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        margin: '10vh 0'
    }
}))

export default function PrizeTracks () {
    let classes = useStyles();
    const prizes = data.prize.map(p => <Prize key={p.id} prizes={p}/>)

    return(
        <div className={classes.container}>
            <div>
            <Typography variant='h5' style={{fontWeight: 700}}>
                {'<PRIZE_TRACKS/>'}
            </Typography>
            <Typography variant='body2' style={{margin: '10px 0'}}>
                <span style={{fontWeight: 700}}>$6,500</span> in Prizes
            </Typography>
            </div>
            <div className={classes.prize}>
                {prizes}
            </div>
        </div>
    )
}