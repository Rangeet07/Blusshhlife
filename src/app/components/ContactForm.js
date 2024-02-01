'use client'
import React, { useState } from 'react'
import styles from "@/app/styles/contact.module.css"
import data from "../../../data/index.json";

import { MdEmail, MdVoiceChat, MdForum, MdCall, MdLocationCity, MdLocationOn } from "react-icons/md";

// import { useForm } from 'react-hook-form'
import ContactCard from './ContactCard'
import Link from 'next/link';


const ContactForm = () => {
 
    // const {register, handleSubmit, reset, formState:{errors}} = useForm()
    // const [status, setStatus] = useState(null);

    // const[user, setUser] = useState({
    //     usern: "",
    //     lastn:"",
    //     email: "",
    //     phonenumber: "",
    //     message: ""
    // })

    //  async function submitHandler(data){
    // console.log(data);

    // try{
      
    //   const res = await fetch("/api/sheet",{
    //     method:'POST',
    //     body:JSON.stringify(data),
    //     headers:{
    //         'Content-Type': 'application/json'
    //     }
    // })
    //   if(res.status === 200){
    //     setStatus('success');
    //   }else {
    //     setStatus('error');
    //   }

    // } catch(error){
    //   console.log(error)
    // }

      
    //     reset()
    // }
    
  return (
    <>

    <section id="contact" className={styles.contactsection}>
    <div>
      <p className="sub-title">Get In Touch</p>
      <h2>Contact Me</h2>
      {/* <p className="text-lg">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, odit.
      </p> */}

    </div>
    <div className={styles.contact_info}>

      <div className={styles.card}>
      <i><MdEmail/></i>
      <p className="text-md"> rupsha.nandy007@gmail.com</p>
      </div>

      <div className={styles.card}>
      <i><MdCall/></i>
      <p className="text-md">0405820704</p>

      </div>

      <div className={styles.card}>
      <i><MdLocationOn/></i>
      <p className="text-md">Perth, Western Austrailia</p>
      </div>



      

    </div>





    {/* <div className={styles.contact_info}>

      <div className={styles.card}>
      <i><MdEmail/></i>
      <p className="text-md"> rupsha.nandy007@gmail.com</p>
      </div>


      <div className={styles.card}>
      <i><MdCall/></i>
      <p className="text-md">0405820704</p>
      </div>


      <div className={styles.card}>
      <i><MdLocationOn/></i>
      <p className="text-md">Perth, Western Austrailia</p>
      </div>


    </div> */}
    <div>
    <h2>OR</h2>
<p className='sub-title'>Get in touch via Instagram</p>
<hr className={styles.line} />
    </div>


<div >

<Link className='btn btn-github'                 href="https://www.instagram.com/blusshhlife"
>
  Contact on Instagram
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

</div>


   
  </section>  











  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d865839.2723623787!2d115.30210844663144!3d-32.03719285699937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32966cdb47733d%3A0x304f0b535df55d0!2sPerth%20WA%2C%20Australia!5e0!3m2!1sen!2sin!4v1703145581994!5m2!1sen!2sin" width={100} height={450} style={{border: 0}} allowFullScreen="" loading="lazy" className={styles.mapping}
        referrerPolicy="no-referrer-when-downgrade"></iframe>
  </>
  )
}

export default ContactForm