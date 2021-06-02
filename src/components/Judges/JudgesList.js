import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { Typography, Grid } from '@material-ui/core'

import Judge from './Judge'
import {data} from '../../Data/DummyData'

const useStyles = makeStyles (() => ({
    container:{
        margin: '15vh 8%',
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

    const judges = data.judges.map(judge => (
        <Grid item sm={6} md={6} lg={5}>
            <Judge key={judge.id} judge={judge}/>
        </Grid>
    ))
    return(
        <div className={classes.container}>
            <Typography variant='h5' style={{fontFamily: 'Open Sans', fontWeight: 700}}>
                {'<JUDGES/>'}
            </Typography>

            <Grid container className={classes.judges}>
                {judges}
            </Grid>
        </div>
    )
}