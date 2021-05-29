import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles (() => ({
    sponsor: {
        // width: '100px',
        margin: '2vh 2vh ',
        '&:hover': {
            cursor: 'pointer'
          },
    },
    sponsorImage:{
        height: '8h'
    }
}))

export default function Sponsor ({data}) {
    let classes = useStyles();
    return (
        <div className={classes.sponsor}>
            <img src={data.image} alt='sponsor' className={classes.sponsorImage}/>
        </div>
    )
}