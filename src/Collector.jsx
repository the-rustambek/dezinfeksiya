import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import CleanH from './Pages/CleanH/CleanH'
import Service from './Pages/Service/Service'
import CleanM from './Pages/CleanM/CleanM'
import FAQ from './Pages/FAQ/FAQ'
import Contact from './Pages/Contact/Contact'
import Footer from './Components/Footer/Footer'

function Collector() {
  return (
    <>
        <Navbar /> 
        <Home />
        <About />
        <CleanH />
        <Service />
        <CleanM />
        <FAQ />
        <Contact />
        <Footer />
    </>
  )
}

export default Collector