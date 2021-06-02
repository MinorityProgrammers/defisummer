import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Typography} from '@material-ui/core'

import {ReactComponent as BannerImage } from '../../assets/images/Banner.svg'

const useStyles = makeStyles((theme) => ({
    banner: {
        backgroundColor: '#F0EBD8',
        padding: '10%',
        marginTop: '-10vh',
    },
    bannerImg:{
       width: '100%',
       height: 'auto',
       display: 'block',
       margin: 'auto'
    },
    bannerText:{
        textAlign: 'center',
        color: '#D7545A',
        padding: '10vh 0',
        fontSize: '1.5em',
        fontWeight: 700
    },
    buttons:{
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    container:{
        backgroundColor: '#FFD546',
        border: '1px solid #000',
        textAlign: 'center',
        maxWidth: '200px',
        width: '100%',
        padding: '15px 10px',
        margin: '1vh 5vh',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: 'transparent',
            border: '1px solid #000',
            color: '#000',
            transition: '500ms linear'
          }
    },
    container2:{
        backgroundColor: '#173B69',
        border: '1px solid #000',
        textAlign: 'center',
        maxWidth: '200px',
        width: '100%',
        padding: '15px 10px',
        margin: '1vh 5vh',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: 'transparent',
            border: '1px solid #000',
            color: '#000',
            transition: '500ms linear'
          },
        color: '#fff'
    }
}))
export default function Banner () {
    let classes = useStyles();
    return(
        <div className={classes.banner}>
            <BannerImage className={classes.bannerImg}/>
            <Typography component='h5' variant='h4' className={classes.bannerText}>
                {'<LEARN/> ALL JUNE . <HACK/> JULY-MID AUGUST . <CELEBRATE/> REST OF AUGUST'}
            </Typography>
            <div className={classes.buttons}>
            <div className={classes.container}>
                <Typography component='p' variant='body1'> 
                    Register on DEVPOST
                </Typography>
            </div>
            <div className={classes.container2} >
                <Typography component='p' variant='body1'> 
                    Join the Discord
                </Typography>
            </div>
            </div>
        </div>
    )
}