import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Typography} from '@material-ui/core'

import {data} from '../../Data/DummyData'
import Help from './Help'

const useStyles = makeStyles (() => ({
    container:{
        margin: '10vh 15vh'
    },
    help:{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        margin: '5vh 0'
    }
}))

export default function HowToHelp () {
    let classes = useStyles();
    const helpOptions = data.help.map(h => <Help key={h.id} helpInfo={h}/>)

    return(
        <div className={classes.container}>
            <Typography variant='h5' style={{fontWeight: 700, marginTop: '5em'}}>
                {'<HOW_TO_HELP/>'}
            </Typography>
            <div className={classes.help}>
                {helpOptions}
            </div>

        </div>
    )
}