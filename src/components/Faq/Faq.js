import React, {useState} from 'react'
import {makeStyles, Typography } from '@material-ui/core'
import { Parallax } from 'react-parallax';

import Question from './Question'
import FaqImg from '../../assets/images/faq.svg'
import {data} from '../../Data/DummyData'

const useStyles = makeStyles(() => ({
    container:{
        padding: '10vh 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
}))

export default function Faq (){
    let classes = useStyles();
    const [show, setShow] = useState(null);

    const open = index => {
        if(show === index){
            return setShow(null);
        }else{
            setShow(index)
        }
    }
    const faq = data.faq.map((qstn, index) => <Question key={qstn.id} qstns={qstn} show={show} onPress={() => open(qstn.id)}/>)
    
    return(
        <Parallax blur={1} bgImage={FaqImg} bgImageAlt="the cat" strength={1000} style={{backgroundColor: '#F9B444'}}>
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
        </Parallax>
    )
}