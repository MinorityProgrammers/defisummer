import React from 'react'
import './home.css'

import Navigation from '../components/Navigation/Navigation'
import {ReactComponent as LargeBanner } from '../assets/images/Large Banner.svg'
import {ReactComponent as BottomBanner} from '../assets/images/Vector 1.svg'
import Banner from '../components/Banner/Banner'
import About from '../components/About/About'
import PrizeTracks from '../components/Prize/PrizeTracks'
import EventsList from '../components/Events/EventsList'
import JudgingCriteria from '../components/JudgingCriteria/JudgingCriteria'
import HowToHelp from '../components/Help/HowToHelp'
import Faq from '../components/Faq/Faq'
import JudgesList from '../components/Judges/JudgesList'
import SponsorsList from '../components/Sponsors/SponsorsList'
import Footer from '../components/Footer/Footer'

export default function Homepage () {
    
    return(
        <div style={{position: 'relative'}}>  
            <Navigation style={{background: 'transparent',zIndex: 1,position: 'absolute', top: 10,right: 10 ,left: 10}}/>
            <LargeBanner style={{width: '100%', height: 'auto', marginTop: -10}}/>
            <BottomBanner style={{width: '100%', height: 'auto',marginTop: '-6em'}}/>
            <Banner/>
            <About/>
            <PrizeTracks/>
            <EventsList/>
            <JudgingCriteria/>
            <HowToHelp/>
            <Faq/>
            <JudgesList/>
            <SponsorsList/>
            <Footer/>
        </div>
    )
}