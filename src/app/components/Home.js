'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Josefin_Sans , Sacramento, Tangerine} from 'next/font/google'
import bio from '../../../public/haylo_melissadsc09695.JPG'
import styles from "@/app/styles/herosection.module.css"
const inter = Josefin_Sans({ subsets: ['latin'] })
// const sacramento = Tangerine({subsets:['latin']})
import Image from 'next/image'
import ReadMore from './ReadMore'



const sacramento = Sacramento({
    subsets:['latin'],

    weight: ['400']
})

const tangerine = Tangerine({
    
        subsets: ['latin'],
      
    weight: ["400",  "700"],
  },
 );
const Home = ({title, about}) => {
    const [readMore , setReadMore] = useState(false);

  return (
    <div>
        <section className={styles.herosection}>
       
            <div className={styles.herosectioncontentbox}>
                <div className={styles.herosectioncontent}>
                    {/* <p className={styles.sectiontitle}>Hey Im Rangeet</p> */}
                    {/* <h2 className={styles.herosectiontitle}> */}
                    <h2 className={`${styles['herosectiontitle']} ${inter['className']}`}>
                    <span className={styles.herosectiontitlecolor}>La Blush Life</span>{" "}
                    </h2>
                    <h3 >Makeup Artist</h3>

                    <p className={ `${styles['herosectiondescription']} ${sacramento['className']}`}>
                    Welcome to La Blush Life Makeup by Rupsha! 💕
                    <br />
                       
                    Rupsha is an Indian Australian with a palette of experience spanning five years in the realm of professional makeup. Rupsha has mastered the art of enhancing natural beauty and create stunning transformations.

                     
                        {readMore && <ReadMore/>}
                        <br />

                    </p>
                </div>
                {/* <button className={`${styles["btn"]} ${styles["btn-primary"]}`}>Book</button> */}
               
                    <Link className="btn btn-primary" href='#'
                     onClick = {() => setReadMore(!readMore)} >read {(readMore && `less` )|| (!readMore && `more`) }</Link>
            </div>
            <div className={styles.herosectionimg}>
            <Image src={bio} alt="picture" width={0} height={500} loading="lazy" />
                {/* <img src={bio} alt="picture" /> */}
            </div>
           
        </section>
    </div>
  )
}

export default Home