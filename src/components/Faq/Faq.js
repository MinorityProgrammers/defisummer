import React from 'react'
import {makeStyles, Typography } from '@material-ui/core'

import Question from './Question'
import FaqImg from '../../assets/images/faq.svg'
import {data} from '../../Data/DummyData'

const useStyles = makeStyles(() => ({
    container:{
        backgroundImage: `url(${FaqImg})`,
        backgroundColor: '#F9B444',
        padding: '10vh 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
}))

export default function Faq (){
    let classes = useStyles();
    
    const faq = data.faq.map(qstn => <Question key={qstn.id} qstns={qstn}/>)
    return(
        <div className={classes.container}>
            <Typography variant ='h5'>
                {'<FREQUENTLY_ASKED_QUESTIONS/>'}
            </Typography>
            <Typography variant='body1' style={{margin: '5vh 0'}}>
                Below are some common frequently asked questions about DefiSummerHacks
            </Typography>
            <div>
                {faq}
            </div>
        </div>
    )
}