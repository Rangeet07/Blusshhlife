import React from 'react'
import styles from '@/app/styles/common.module.css'
import Image from "next/image";
import Link from "next/link";

const InstaCard = (curElem) => {

    const { id} = curElem;
  return (
    <>
    <div className={styles.card} >
                <div className={styles.card_image}>
                    <Image src={curElem.media_url} alt={id} width={240} height={240} />
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