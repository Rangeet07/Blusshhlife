import React from 'react'
import Link from 'next/link'
import { Josefin_Sans } from 'next/font/google'
import bio from '../../../public/haylo_melissadsc09695.JPG'
import styles from "@/app/styles/herosection.module.css"
const inter = Josefin_Sans({ subsets: ['latin'] })
import Image from 'next/image'


const Home = () => {
  return (
    <div>
        <section className={styles.herosection}>
        <div className={styles.herosectionimg}>
            <Image src={bio} alt="picture" width={350} height={500}/>
                {/* <img src={bio} alt="picture" /> */}
            </div>
            <div className={styles.herosectioncontentbox}>
                <div className={styles.herosectioncontent}>
                    {/* <p className={styles.sectiontitle}>Hey Im Rangeet</p> */}
                    {/* <h2 className={styles.herosectiontitle}> */}
                    <h2 className={`${styles['herosectiontitle']} ${inter['className']}`}>
                    <span className={styles.herosectiontitlecolor}>Rupsha Nandy </span>{" "}
                    </h2>
                    <h3 >Makeup Artist</h3>

                    <p className={styles.herosectiondescription}>
                       

Based predominantly in Perth but have traveled beyond the metro region for pre-weddings too. Angie is seasoned in Bridal makeup and hairdo as well as various makeovers for a variety of occasions.

                        <br/>
                        Among her specialty is eye enhancement and natural makeup to bring out your inner beauty.
                    </p>
                </div>
                {/* <button className={`${styles["btn"]} ${styles["btn-primary"]}`}>Book</button> */}
               
                    <Link className="btn btn-primary"
                    href='#contact'>Book</Link>
            </div>
           
        </section>
    </div>
  )
}

export default Home