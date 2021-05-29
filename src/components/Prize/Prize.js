import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Typography} from '@material-ui/core'

import StartImg from '../../assets/images/Star.svg'

const useStyles = makeStyles (() => ({
    container:{
        width: '250px',
        '&:hover': {
            cursor: 'pointer'
          }
    },
    image:{
        objectFit: 'contain',
        width: '20px',
        height: '20px'
    }
}))

export default function Prize ({prizes}) {
    let classes = useStyles();
    return(
        <div className={classes.container}>
            <img src={StartImg} alt='Prize' style={{width: 150, height: 150, margin: '20px '}}/>
            <div>
            <Typography variant='body1' style={{fontWeight: 700, marginBottom: 5}}>
                {prizes.title}
            </Typography>
            <Typography variant='body2' style={{fontSize: 12}}>
                {prizes.description}
            </Typography>
            </div>
        </div>
    )
}