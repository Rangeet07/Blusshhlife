import React from 'react'
import Home from './components/Home'
import ContactForm from './components/ContactForm'
import Gallery from './components/Gallery'
import Pricing from './components/Pricing'
import About from './components/About'

const page = () => {
  return (
    <>
    <Home/>
    <About/>
   <Gallery/>
   <Pricing/>
    <ContactForm/>
    </>
  )
}

export default page
