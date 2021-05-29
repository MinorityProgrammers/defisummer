import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles (() => ({
    container:{
        display: 'flex',
        width: '400px',
        margin: '20px ','&:hover': {
            cursor: 'pointer'
          }
    },
    avatar:{
        objectFit: 'contain',
        width: 80,
        height: 80,
        borderRadius: 40,
        margin: '0 15px'
    },
    details:{
        margin: '10px'
    }
}))

export default function Judge ({judge}) {
    let classes = useStyles();
    return(
        <div className={classes.container}>
            <img src={judge.image} alt='Avatar' className={classes.avatar}/>
            <div className={classes.details}>
                <Typography variant='body1' style={{fontWeight: 700}}>
                    {judge.name}
                </Typography>
                <Typography variant='body2'>
                    <em>{judge.position}</em>
                </Typography>
            </div>
        </div>
    )
}