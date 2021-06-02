import React,{useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import Event from './Event'
import {data} from '../../Data/DummyData'

const useStyles = makeStyles(() => ({
    container:{
        margin: '10vh 15vh'
    },
    tabsContainer:{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    tabs:{
        display: 'flex',
        marginRight: '5vh'
    },
    tabsCont:{
        color: '#1FB1FD',
        marginRight:'10px',
        textTransform: 'uppercase',
        '&:hover': {
            cursor: 'pointer',
        }
    },
}))

export default function EventsList () {
    const [selected, setSelected] = useState('Learn');
    let classes = useStyles()
    const allEvents = data.events.map(event => event.name);
    const tasks = data.events.map(event => event).filter(e => e.name === selected)

    const events = tasks[0].events.map(task => <Event key={task.id} event={task}/>)
    
    return(
        <div className={classes.container}>
            <div className={classes.tabsContainer}>
                <div className={classes.tabs}>
                    {
                        data.events.map(event => (
                    <Typography 
                        variant='h5' 
                        key={event.id} 
                        className={classes.tabsCont} 
                        onClick = {() => setSelected(event.name)} 
                        style={selected === event.name ? {color: '#173B69',transition: '500ms linear'}: null}>
                        {`<${event.name}/>`}
                    </Typography>
                    ))}
                </div>
            <Typography variant='h5'>
                {'<SCHEDULE/>'}
            </Typography>
            </div>
            {events}
        </div>
    )
}