import React from 'react'
import Home from '../components/Home'
import Nav from '../components/Nav'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import Image from 'next/image'
import styles from "@/app/styles/aboutsection.module.css"
import bio from '../../../public/haylo_melissadsc09695.JPG'


const page = () => {
  return (
//     <>
//         {/* <Home title={"About Me"}/> */}
//         <div className={styles.section}>
//         <div className={styles.container}>

//         <div className={styles.title}>

//         <h2>About Me</h2>


//         </div>
//         <div className={styles.content}>
//           <div className={styles.article}>
//             <h3>
//             Welcome to La Blush Life Makeup by Rupsha! 💕

//             </h3>
//             <p>Her expertise lies in the seamless fusion of aesthetics and modern styles, crafting looks that are both timeless and on-trend. Whether it is the intricacies of bridal makeup, the glamour of special occasions, or the bold creativity of editorial shoots, Rupsha’s approach is characterised by precision, passion and a commitment to making every client feel radiant✨
// <br />
// Welcome to a world where beauty knows no bounds and where Rupsha’s artistry takes center stage, creating an experience that goes beyond the surface.</p>
//             <div className="btn btn-primary">View Portfolio</div>
//           </div>
//         </div>

//         <div className={styles.imagesection}>
//           {/* <Image /> */}
//         </div>


//         </div>
//         </div>
     
//     </>'
<section id="AboutMe" className="about--section">
<div className="about--section--img">
<Image src={bio} alt="picture" width={0} height={500}/>
</div>
<div className="hero--section--content--box about--section--box">
  <div className="hero--section--content">
    {/* <p className="section--title">About</p> */}
    <h1 className="skills-section--heading">About Me</h1>
    <p className="hero--section-description">
    Her expertise lies in the seamless fusion of aesthetics and modern styles, crafting looks that are both timeless and on-trend. Whether it is the intricacies of bridal makeup, the glamour of special occasions, or the bold creativity of editorial shoots, Rupsha’s approach is characterised by precision, passion and a commitment to making every client feel radiant✨
    </p>
    <p className="hero--section-description">
    Welcome to a world where beauty knows no bounds and where Rupsha’s artistry takes center stage, creating an experience that goes beyond the surface.
    </p>
  </div>
</div>
</section>

  )
}

export default page