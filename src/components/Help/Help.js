import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Typography} from '@material-ui/core'

import {data} from '../../Data/DummyData'

const useStyles = makeStyles (() => ({
    container:{
        '&:hover': {
            cursor: 'pointer'
          }
    }
}))

export default function Help ({helpInfo}) {
    let classes = useStyles();
    return(
        <div className={classes.container}>
            <img src={helpInfo.image} alt='Prize' style={{width: 100, height: 100, margin: '20px '}}/>
            <div>
            <Typography variant='body1' style={{fontWeight: 700, marginBottom: 5}}>
                {helpInfo.title}
            </Typography>
            </div>
        </div>
    )
}