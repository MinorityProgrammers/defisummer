import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(()=> ({
    container:{
        backgroundColor: 'transparent',
        border: '1px solid #000',
        textAlign: 'center',
        width: '35%',
        padding: '2vh ',
        '&:hover': {
            cursor: 'pointer'
          }
    }
}))

export default function CustomButton ({title, style}) {
    let classes = useStyles();
    return(
        <div className={classes.container} style={style}>
            <Typography component='p' variant='body1'> 
                {title}
            </Typography>
        </div>
    )
}