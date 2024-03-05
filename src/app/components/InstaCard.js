import React from 'react'
import styles from '@/app/styles/common.module.css'
import Image from "next/image";
import Link from "next/link";

const InstaCard = (curElem) => {

    const { id, media_type,media_url} = curElem;
    let post;

    // switch (media_type) {
    //     case "VIDEO":
    //         post = (
    //             <video
    //                 className={styles.vid}
    //                 width={240}
    //                 height={240} 
    //                 src={media_url} 
    //                 type="video/mp4" 
                    
    //                 controls playsinline>
    //             </video>
    //         )
    //         break;
    //     case "CAROUSEL_ALBUM":
    //         post = (
    //             <Image src={media_url} alt={id} width={240} height={240} />
    //         );
    //         break;
    //     default:
    //         post = (
    //             <Image src={media_url} alt={id} width={240} height={240} />
    //         );
    // }  
   
    
  return (
    <>
    <div className={styles.card} >
                <div className={styles.card_image}>
               {curElem.media_type==='IMAGE' && <Image src={curElem.media_url} alt={id} width={240} height={240} loading='lazy'  blurDataURL={curElem.media_url} placeholder='blur' />}
               {post}
                </div>
                {/* <div className={styles.card_data}>
                    <h2>{title.substring(0,18)}</h2>
                    <p>
                        {`${synopsis.substring(0,66)} ...`}
                    </p>

                    <Link href={`/movie/${id}`}>
                        <button>
                            Read More
                        </button>
                    </Link>
                </div> */}
            </div>
    </>
  )
}

export default InstaCard