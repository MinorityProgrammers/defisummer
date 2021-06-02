import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';
import { Parallax } from 'react-parallax';

import BgImg from '../../assets/images/about.svg'

const useStyles = makeStyles (() => ({
    container: {
        padding: '15vh 4vh',
        color:'#fff'
    },
    innerCont:{
        width: '60%',
        margin: 'auto'
    },
    body:{
        margin: '5vh 0'
    },
    description:{
        paddingBottom: '2vh'
    },hashTag:{
        fontWeight: 700
    }
}))

export default function About () {
    let classes = useStyles();
    return (
        <Parallax blur={1} bgImage={BgImg} bgImageAlt="the cat" strength={1000} style={{backgroundColor: '#1FB1FD'}}>
        <div className={classes.container}>
            <div className={classes.innerCont}>
                <Typography component='h2' variant='h5' style={{fontWeight: 700}}>
                    {'<ABOUT_DEFI_SUMMER/>'}
                </Typography>
                <div className={classes.body}>
                    <Typography component='p' variant='body2' className={classes.description}>
                        <span className={classes.hashTag}>#DefiSummer</span> is a summer long celebration, summit, and hackathon for decentralized finance. Starting June 1st, developers from all around the world can team up with each other and get direct access to industry professionals to solve the biggest issues surrounding the #decentralized finance space. Global banking solutions. Blockchain consultancy. NFT marketplaces. Smart contract development.
                    </Typography>

                    <Typography component='p' variant='body2' >
                        Trading automation. Blockchain governance. Find a team, learn how to do it, build a project, win prizes &amp; internships, and celebrate all summer. Organized by the Minority Programmers Association looking to bring more diverse talent into STEM &amp;<span className={classes.hashTag}>#blockchain</span>.
                    </Typography>
                </div>
            </div>
        </div>
        </Parallax>
    )
}

   
