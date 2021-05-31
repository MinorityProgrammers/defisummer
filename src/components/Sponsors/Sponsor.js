import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles (() => ({
    sponsor: {
        width: '20vh',
        margin: '2vh 4vh ',
        '&:hover': {
            cursor: 'pointer'
          },
    },
    sponsorImage:{
        height: 'auto',
        width: '100%'
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