import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

import MPA from '../../assets/icons/MinorityP.svg'
import Discord from '../../assets/icons/Discord.svg'
import Devpost from '../../assets/icons/Devpost.svg'

const useStyles = makeStyles (() => ({
    container:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '0 '
    },
    logo:{
        '&:hover': {
            cursor: 'pointer',
        }
    },
    logoLeft:{
        display: 'flex',
        alignItems: 'center',
    }
}))

export default function Navigation ({style}) {
    let classes = useStyles();
    return(
        <div style={style} className={classes.container}>
            <img src={MPA} alt='MPA' className={classes.logo}/>
            <div className={classes.logoLeft}>
                <img src={Devpost} alt='Devpost' className={classes.logo} style={{width: '80%', height: '55px'}}/>
                <img src={Discord} alt='Discord' className={classes.logo}/>
            </div>
        </div>
    )
}