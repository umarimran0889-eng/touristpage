import React from 'react'
import Hero from './Hero-section'
import BespokeServices from './Services'
import Reviews from './Reviews'
import Vehicles from './Vehicles'
import Routes from './Routes'
import Trusted from './Trusted'
import AboutUs from './Aboutus'


const Index = () => {
    return (
        <div>
            <Hero/>
            <BespokeServices/>
            <AboutUs/>
            <Trusted/>
            <Routes/>
            <Vehicles/>
            <Reviews/>
            
        </div>
    )
}

export default Index
