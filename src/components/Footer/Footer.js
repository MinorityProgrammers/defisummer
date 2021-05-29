import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';

import {data} from '../../Data/DummyData'

const useStyles = makeStyles (() => ({
    container:{
        margin: '5vh 2vh',
        // display: 'flex',
        alignItems: 'center'
    }
})) 

export default function Footer (){
    let classes = useStyles();

    const socials = data.socials.map(social => <img key={social.id} src={social.image} alt='Socials'/>)
    return(
        <div className={classes.container}>
            <div style={{marginBottom: -10}}>
                {socials}
            </div>
            <Typography variant='body1' style={{textAlign: 'center'}}>
                <span style={{fontWeight: 700}}> © Copyright 2021 by</span> Minority Programmers Association
            </Typography>
        </div>
    )
}