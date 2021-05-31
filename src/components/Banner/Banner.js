import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Typography} from '@material-ui/core'

import CustomButton from '../Button/CustomButton'
import {ReactComponent as BannerImage } from '../../assets/images/Banner.svg'

const useStyles = makeStyles((theme) => ({
    banner: {
        backgroundColor: '#F0EBD8',
        padding: '10%',
        marginTop: '-5em'
    },
    bannerImg:{
       width: '100%',
       height: '50%',
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
                <CustomButton title='Register on DEVPOST' style={{backgroundColor: '#FFD546'}}/>
                <CustomButton title='Join the Discord' style={{backgroundColor: '#173B69', color: '#fff'}}/>
            </div>
        </div>
    )
}