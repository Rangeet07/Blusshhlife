import React from 'react'
import Home from '../components/Home'
import Nav from '../components/Nav'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import Image from 'next/image'
import styles from "@/app/styles/aboutsection.module.css"
import bio from '../../../public/rupshaab.JPG'

const About = () => {
  return (
<section id="about" className="about--section">
<div className="about--section--img">
<Image src={bio} alt="picture" width={0} height={500}/>
</div>
<div className="hero--section--content--box about--section--box">
  <div className="hero--section--content">
    {/* <p className="section--title">About</p> */}
    <h1 className="skills-section--heading"style={{textAlign:'center'}} >About Rupsha</h1>
    <p className="hero--section-description">
    Her expertise lies in the seamless fusion of aesthetics and modern styles, crafting looks that are both timeless and on-trend. Whether it is the intricacies of bridal makeup, the glamour of special occasions, or the bold creativity of editorial shoots, Rupsha’s approach is characterised by precision, passion and a commitment to making every client feel radiant✨
    </p>
    <p className="hero--section-description">
    Welcome to a world where beauty knows no bounds and where Rupsha’s artistry takes center stage, creating an experience that goes beyond the surface.
    </p>
  </div>
</div>
</section>  )
}

export default About