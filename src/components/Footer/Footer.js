import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';

import {data} from '../../Data/DummyData'

const useStyles = makeStyles (() => ({
    container:{
        margin: '5vh 2vh',
        // display: 'flex',
        alignItems: 'center'
    },
    image:{
        width: '30px',
        height: '30px',
        margin: '0 5px',
        '&:hover': {
            cursor: 'pointer',
        }
    }
})) 

export default function Footer (){
    let classes = useStyles();

    const socials = data.socials.map(social => <a href={social.link} target='_blank' rel="noreferrer"><img key={social.id} src={social.image} alt='Socials' className={classes.image}/></a>)
    return(
        <div className={classes.container}>
            <div style={{marginBottom: -10}}>
                {socials}
            </div>
            <Typography variant='body2' style={{textAlign: 'center'}}>
                <a href='https://minorityprogrammers.com/' target='_blank' rel="noreferrer" style={{textDecoration: 'none'}}><span style={{fontWeight: 700, color: '#000'}}> © Copyright 2021 by</span> </a>Minority Programmers Association
            </Typography>
        </div>
    )
}