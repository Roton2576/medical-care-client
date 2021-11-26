import React from 'react'
import './Header.css'
import Navbar from '../Navbar/Navbar'
import Sliders from '../Sliders/Sliders'
import SpecialistMeet from '../SpecialistMeet/SpecialistMeet'
import './Header.css'
import Pricing from '../Pricing/Pricing'
import ViewOurService from '../ViewOurService/ViewOurService'
import Footer from '../Footer/Footer'

const Header = () => {
     return (
          <div>
               <Navbar></Navbar>
               <Sliders></Sliders>
               <SpecialistMeet></SpecialistMeet>
               <ViewOurService></ViewOurService>
               <Pricing></Pricing>
               <Footer></Footer>
          </div>
     )
}

export default Header;

