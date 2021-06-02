import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles (() => ({
    sponsor: {
        width: '20vh',
        margin: '2vh 4vh ',
        opacity:0.5,
        '&:hover': {
            cursor: 'pointer',
            opacity: 1,
            transition: '500ms linear'
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
            <a href={data.link} target='_blank'>
                <img src={data.image} alt='sponsor' className={classes.sponsorImage}/>
            </a>
        </div>
    )
}