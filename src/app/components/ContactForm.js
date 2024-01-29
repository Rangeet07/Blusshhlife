'use client'
import React, { useState } from 'react'
import styles from "@/app/styles/contact.module.css"
import { MdEmail, MdVoiceChat, MdForum, MdCall, MdLocationCity, MdLocationOn } from "react-icons/md";

// import { useForm } from 'react-hook-form'
import ContactCard from './ContactCard'


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
      <p className="text-lg">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, odit.
      </p>
    </div>

    <div className={styles.contact_info}>

      <div className={styles.card}>
      <i><MdEmail/></i>
      <p className="text-lg"> rupsha.nandy007@gmail.com</p>
      </div>
      <div className={styles.card}>
      <i><MdCall/></i>
      <p className="text-lg">0405820704</p>
      </div>
      <div className={styles.card}>
      <i><MdLocationOn/></i>
      <p className="text-lg">Perth, Western Austrailia</p>
      </div>


    </div>



   
  </section>  
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d865839.2723623787!2d115.30210844663144!3d-32.03719285699937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32966cdb47733d%3A0x304f0b535df55d0!2sPerth%20WA%2C%20Australia!5e0!3m2!1sen!2sin!4v1703145581994!5m2!1sen!2sin" width={100} height={450} style={{border: 0}} allowFullScreen="" loading="lazy" className={styles.mapping}
        referrerPolicy="no-referrer-when-downgrade"></iframe>
  </>
  )
}

export default ContactForm