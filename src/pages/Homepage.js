import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

import {ReactComponent as LargeBanner } from '../assets/images/Large Banner.svg'
import {ReactComponent as BottomBanner} from '../assets/images/Vector 1.svg'
import Banner from '../components/Banner/Banner'
import About from '../components/About/About'
import PrizeTracks from '../components/Prize/PrizeTracks'
import HowToHelp from '../components/Help/HowToHelp'
import Faq from '../components/Faq/Faq'
import JudgesList from '../components/Judges/JudgesList'
import SponsorsList from '../components/Sponsors/SponsorsList'
import Footer from '../components/Footer/Footer'

const useStyles = makeStyles((theme) => ({
    bottomB:{
        marginTop: '-6em'
    },
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
    }
}))
export default function Homepage () {
    let classes = useStyles();
    return(
        <div>
            <LargeBanner stuyle={{width: '100%', height: '20vh'}}/>
            <div className={classes.bottomB}>
                <BottomBanner/>
            </div>
            <Banner/>
            <About/>
            <PrizeTracks/>
            <HowToHelp/>
            <Faq/>
            <JudgesList/>
            <SponsorsList/>
            <Footer/>
        </div>
    )
}