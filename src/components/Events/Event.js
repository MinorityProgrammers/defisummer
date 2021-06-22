import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import event from '../../assets/images/calenda.png'

const useStyles = makeStyles(() => ({
    container:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        // flexWrap: 'wrap',
        margin: '5vh 0',
    },
    title:{
        textAlign: 'center',
        color: '#1FB1FD',
        width: '300px'
    },
    calendar:{
        backgroundSize: '140px', 
        backgroundImage: `url(${event})`,
        width: '140px',
        height: '145px',
        color: '#1FB1FD',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
}))

export default function Event ({event}) {
    let classes = useStyles()
    return(
        <div className={classes.container}>
            <div className={classes.calendar}>
                <Typography variant='body1'>{event.month}</Typography>
                <Typography variant='body1'>{event.date}</Typography>
            </div>
           <div className={classes.title}>
                <Typography variant='body1'>
                    Time
                </Typography>
                <Typography variant='body1'>
                    {event.time}
                </Typography>
           </div>
           <div className={classes.title}>
                <Typography variant='body1'>
                    Title
                    {/* Name of Event (Click to Link) */}
                </Typography>
                <Typography variant='body1'>
                    {event.event}
                </Typography>
           </div>
        </div>
    )
}