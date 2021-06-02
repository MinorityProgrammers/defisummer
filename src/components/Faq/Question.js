import React from 'react'
import {makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    container:{
        width: '70vh',
        backgroundColor: '#fff',
        padding: '20px',
        '&:hover': {
            cursor: 'pointer',
            border: '1px solid #ccc'
          },
          margin: '20px 0',
          transition: '500ms linear'
    },
    innerContainer:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
}))

export default function Question ({qstns,onPress, show}){
    let classes = useStyles();
    
    return(
        <div className={classes.container} onClick={onPress}>
            <div className={classes.innerContainer} >
                <Typography variant ='body1' style={{textAlign: 'center', fontWeight: 700}}>
                    {qstns.title}
                </Typography>

                {
                    show === qstns.id ? <i class="fas fa-minus" style={{color: '#1FB1FD'}}/> :
                    <i class="fas fa-plus" style={{color: '#1FB1FD'}}/>}
            </div>
                    <span style={{transition: '500ms linear'}}>
                {
                    show === qstns.id ? (
                    <Typography variant ='body2' style={{padding: '10px 0'}}>
                        {qstns.answer}
                    </Typography>
                    ) : null
                }
                </span>
        </div>
    )
}