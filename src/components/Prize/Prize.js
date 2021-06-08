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
        //   alignItems: 'center'
    },
    image:{
        width: '40px',
        height: '40px',
    },
    title:{
        display: 'flex',
        alignItems: 'center',
    }
}))

export default function Prize ({prizes}) {
    let classes = useStyles();
    return(
        <div className={classes.container}>
            <div className={classes.title}>
                <img src={StartImg} alt='Prize' style={{width: 20, height: 20, marginRight: 5}}/>
                <Typography variant='body1' style={{fontWeight: 700, fontSize: 12}}>
                    {prizes.title}
                </Typography>
            </div>
            <Typography variant='body2' style={{fontSize: 12}}>
                {prizes.description}
            </Typography>
            
        </div>
    )
}