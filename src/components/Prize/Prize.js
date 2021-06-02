import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Typography} from '@material-ui/core'

import StartImg from '../../assets/images/Star.svg'

const useStyles = makeStyles (() => ({
    container:{
        width: '260px',
        '&:hover': {
            cursor: 'pointer',
            transition: 'all 0.2s ease-out',
            boxShadow: '0px 4px 8px rgba(38, 38, 38, 0.2)',
            top: '-4px',
            border: '0.5px solid #cccccc',
            backgroundColor: 'white',
            padding: '10px'
          },
          marginTop: '1vh',
          marginBottom: '1vh',
          marginRight: '2%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
    },
    image:{
        width: '40px',
        height: '40px',
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