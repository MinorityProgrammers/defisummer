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
            <a href='https://minorityprogrammers.com/' target='_blank' rel="noreferrer"><img src={MPA} alt='MPA' className={classes.logo}/></a>
            <div className={classes.logoLeft}>
                <a href='https://defi.devpost.com/' rel='noreferrer' target="_blank"><img src={Devpost} alt='Devpost' className={classes.logo} style={{width: '80%', height: '55px'}}/></a>
                <a href='http://discord.gg/TAmSpBvmR2' target='_blank' rel='noreferrer'><img src={Discord} alt='Discord' className={classes.logo}/></a>
            </div>
        </div>
    )
}