import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import Judge from './Judge'
import {data} from '../../Data/DummyData'

const useStyles = makeStyles (() => ({
    container:{
        margin: '15vh 15vh',
        fontFamily: 'Open Sans'
    },
    judges:{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        margin: '2vh 0'
    }
}))

export default function JudgesList () {
    let classes = useStyles();

    const judges = data.judges.map(judge => <Judge key={judge.id} judge={judge}/>)
    return(
        <div className={classes.container}>
            <Typography variant='h5'>
                {'<JUDGES/>'}
            </Typography>

            <div className={classes.judges}>
                {judges}
            </div>
        </div>
    )
}