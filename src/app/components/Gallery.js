import React from 'react'
import styles from "@/app/styles/gallery.module.css"
import gal from '../../../public/gallerypic.JPEG'
import Image from 'next/image'


const Gallery = () => {
  return (
    <div className={styles.gallerycontainer}>
      <h1 className={styles.heading}>Gallery</h1>
      <div className={styles.container}>
        <div className={styles.selected}>
          <Image
            src={gal}
            alt='/'
            layout='responsive'
            width='677'
            height='451'
          />
        </div>
        <div className={styles.thumbnail}>
          <Image
            src='/DSC_4833-Edit.JPG'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='fill'
          />
        </div>
        <div className={styles.thumbnail}>
          <Image
            src='/haylo_taylor0279.JPG'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className={styles.thumbnail}>
          <Image
            src='/DSC_4866-Edit.JPG'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className={styles.thumbnail}>
          <Image
            src='/IMG_4208.JPG'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
      </div>
    </div>  )
}

export default Gallery