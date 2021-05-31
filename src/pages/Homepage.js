import React from 'react'

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

export default function Homepage () {
    
    return(
        <>
            <LargeBanner style={{width: '100%', height: 'auto'}}/>
            <BottomBanner style={{width: '100%', height: 'auto',marginTop: '-6em'}}/>
            <Banner/>
            <About/>
            <PrizeTracks/>
            <HowToHelp/>
            <Faq/>
            <JudgesList/>
            <SponsorsList/>
            <Footer/>
        </>
    )
}