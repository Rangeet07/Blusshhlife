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





// const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink,username&access_token=${process.env.INSTAGRAM_KEY}`;
// // const a = 'https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink,username&access_token=IGQWROQlg3OG9TU04wMEhicGFleko4R0hEN0JxTDFuamFsamVoZAUc5YnJOd3k4NGFjcDJjZA24tQjRKWlBtdGR6RURGTWxuRWdLbkJnd01qYi1kbWtsdHJDVXN0XzRpbThNSm5DN2NYNlFKU1kxMTRWWmZA0aXJadVEZD'
// const response = await fetch(url,{
//     cache: "force-cache"
// });
//     const feed = await response.json();
// const main_data = feed.data;
// console.log(main_data);



const url = process.env.RAPID_KEY;
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '55e6e4d453msh2c3a9c82acd732cp141c8fjsn580ec8d16f01',
    'X-RapidAPI-Host': 'instagram130.p.rapidapi.com'
  }
};

const res = await fetch(url, options);
const data = await res.json()
const main_data = data.edges;

  return (
    <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Portfolio</h1>
                    <div className={styles.card_section}>
                        {/* <InstaCard/> */}
                        
                        {
                            main_data.map((curElem) => {
                                return <InstaCard key={curElem.id} {...curElem} />
                            })
                        }
                    </div>
                </div>
            </section>    
    </>
  )
}

export default Movie

// export const getStaticProps = async () => {

//     const url = `https://graph.instagram.com/me?fields=id,caption,media_url,timestamp,media_type,permalink,username&access_token=${process.env.INSTAGRAM_KEY}`;
//     const data = await fetch(url);
//     const feed = await data.json();

//     console.log(feed);
// }
