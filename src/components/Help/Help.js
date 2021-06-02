import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Typography} from '@material-ui/core'
import './help.css'

const useStyles = makeStyles (() => ({
    container:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '&:hover': {
            cursor: 'pointer'
          }
    }
}))

export default function Help ({helpInfo}) {
    let classes = useStyles();
    return(
        <div className={classes.container}>
            <img src={helpInfo.image} alt='Prize' style={{width: 100, height: 100, margin: '20px'}} className='shakeImg'/>
            <div>
            <Typography variant='body1' style={{fontWeight: 700, marginBottom: 5, }}>
                {helpInfo.title}
            </Typography>
            </div>
        </div>
    )
}