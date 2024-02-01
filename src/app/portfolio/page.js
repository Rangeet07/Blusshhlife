// 'use client'
// import React from 'react'
// import ContactForm from '../components/ContactForm'
// import InstaCard from '../components/InstaCard'


// const page = () => {
//   return (
//     <InstaCard/>
//   )
// }


// export default page


import React from 'react'
import styles from "@/app/styles/common.module.css"
import InstaCard from "@/app/components/InstaCard";
import { Josefin_Sans } from 'next/font/google'
import Link from 'next/link';

const inter = Josefin_Sans({ subsets: ['latin'] })

export const getPosts = async () => {
        const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink,username&access_token=${process.env.INSTAGRAM_KEY}`;
        const data = await fetch(url,{
            cache: "force-cache"
        });
            const feed = await data.json();
        console.log(feed);
        return feed;

}




const Movie = async () => {
    
    await new Promise(resolve => setTimeout(resolve, 2000));
// const url = process.env.RAPID_KEY;
// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '3b10504cc6msh61d7eb1a77cfcbbp19809ajsnb2cf284f1bf3',
//     'X-RapidAPI-Host': 'instagram130.p.rapidapi.com'
//   }
// };

// const res = await fetch(url, options);
// const data = await res.json()
// const main_data = data.edges;
// console.log(data);





const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink,username&access_token=${process.env.INSTAGRAM_KEY}&limit=44`;
// const a = 'https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink,username&access_token=IGQWROQlg3OG9TU04wMEhicGFleko4R0hEN0JxTDFuamFsamVoZAUc5YnJOd3k4NGFjcDJjZA24tQjRKWlBtdGR6RURGTWxuRWdLbkJnd01qYi1kbWtsdHJDVXN0XzRpbThNSm5DN2NYNlFKU1kxMTRWWmZA0aXJadVEZD'
const response = await fetch(url,{
    cache: "force-cache"
});
    const feed = await response.json();
const main_data = feed.data;
console.log(main_data);


// let count = 0;
// if(main_data.media_type==='IMAGE'){
//   count++;
// }

// if(main_data.media_type==='VIDEO' || main_data.media_type==='VIDEO'  ){

// }
// let instaPhotos = resp.data.filter(d => d.media_type === "IMAGE").map(d => d.media_url);

// if (main_data.media_type === 'IMAGE'){
//   return main_data
// }

// const url = process.env.RAPID_KEY;
// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '55e6e4d453msh2c3a9c82acd732cp141c8fjsn580ec8d16f01',
//     'X-RapidAPI-Host': 'instagram130.p.rapidapi.com'
//   }
// };

// const res = await fetch(url, options);
// const data = await res.json()
// const main_data = data.edges;

  return (
    
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h2 className={`${styles['ptitle']} ${inter['className']}`}>
                      <span className={styles.ptitlecolor}>
                      PORTFOLIO
                        </span></h2>
                      <h5> Make-up and hair to suit every occasion </h5>
                    <div className={styles.card_section}>
                        {/* <InstaCard/> */}
                        
                        {
                          
                            main_data.filter(d => d.media_type === "IMAGE").map((curElem) => {
                                return <InstaCard key={curElem.id} {...curElem} />
                            })
                        }
                    </div>
                </div>
                <Link className='btn btn-github'                 href="https://www.instagram.com/blusshhlife"
                                 

>
View more on Instagram
<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 33 33"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.0001 4.65479H11.3334C7.65152 4.65479 4.66675 7.63956 4.66675 11.3215V21.9881C4.66675 25.67 7.65152 28.6548 11.3334 28.6548H22.0001C25.6819 28.6548 28.6667 25.67 28.6667 21.9881V11.3215C28.6667 7.63956 25.6819 4.65479 22.0001 4.65479ZM26.3334 21.9881C26.3261 24.3783 24.3902 26.3141 22.0001 26.3215H11.3334C8.94321 26.3141 7.0074 24.3783 7.00008 21.9881V11.3215C7.0074 8.93125 8.94321 6.99544 11.3334 6.98812H22.0001C24.3902 6.99544 26.3261 8.93125 26.3334 11.3215V21.9881ZM23.0001 11.6548C23.7365 11.6548 24.3334 11.0578 24.3334 10.3215C24.3334 9.58508 23.7365 8.98812 23.0001 8.98812C22.2637 8.98812 21.6667 9.58508 21.6667 10.3215C21.6667 11.0578 22.2637 11.6548 23.0001 11.6548ZM16.6667 10.6548C13.353 10.6548 10.6667 13.3411 10.6667 16.6548C10.6667 19.9685 13.353 22.6548 16.6667 22.6548C19.9805 22.6548 22.6667 19.9685 22.6667 16.6548C22.6703 15.0624 22.0393 13.5342 20.9133 12.4082C19.7873 11.2822 18.2591 10.6512 16.6667 10.6548ZM13.0001 16.6548C13.0001 18.6799 14.6417 20.3215 16.6667 20.3215C18.6918 20.3215 20.3334 18.6799 20.3334 16.6548C20.3334 14.6297 18.6918 12.9881 16.6667 12.9881C14.6417 12.9881 13.0001 14.6297 13.0001 16.6548Z"
                    fill="white"
                  />
                </svg>


 </Link>
            </section>   

    
  )
}

export default Movie

// export const getStaticProps = async () => {

//     const url = `https://graph.instagram.com/me?fields=id,caption,media_url,timestamp,media_type,permalink,username&access_token=${process.env.INSTAGRAM_KEY}`;
//     const data = await fetch(url);
//     const feed = await data.json();

//     console.log(feed);
// }
