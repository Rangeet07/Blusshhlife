'use client'
import React, { useState } from 'react'
import styles from "@/app/styles/contact.module.css"
import { useForm } from 'react-hook-form'


const ContactForm = () => {
 
    const {register, handleSubmit, reset, formState:{errors}} = useForm()

    // const[user, setUser] = useState({
    //     usern: "",
    //     lastn:"",
    //     email: "",
    //     phonenumber: "",
    //     message: ""
    // })

     function submitHandler(data){
    console.log(data);

        fetch("/api/sheet",{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        })


        // e.preventDefault();

        // try {
        //     const response = await fetch('/api/contact', {
        //         method:'POST',
        //         headers:{"Content_Type":"application/json"},
        //         body: JSON.stringify({
        //             usern:user.usern,
        //             lastn:user.lastn,
        //             email:user.email,
        //             phonenumber:user.phonenumber,
        //             message:user.message
        //         })
        //     })
        //     // Set the status based on the response from the API route
        //     if (response.status === 200) {
        //         setUser({
        //             usern: "",
        //             lastn:"",
        //             email: "",
        //             phonenumber: "",
        //             message: ""
        //         })
        //         setStatus('success');
        //     } else {
        //         setStatus('error');
        //     }

        // }catch (error) {
        //     console.log(error)
        // }
        //  fetch('/api/sheet', {
        //     method:'POST',
        //     headers:{"Content_Type":"application/json"},
        //     // body: JSON.stringify({
        //     //     username:user.username,
        //     //     email:user.email,
        //     //     phone:user.phone,
        //     //     message:user.message
        //     // })
        //     body:JSON.stringify(data)
        // })
        reset()
    }
    
  return (
    <section id="contact" className={styles.contactsection}>
    <div>
      <p className="sub-title">Get In Touch</p>
      <h2>Contact Me</h2>
      <p className="text-lg">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, odit.
      </p>
    </div>
    <form className={`${styles['contactformcontainer']} ${'form'}`} name='submit-to-google-sheet' autoComplete='off' onSubmit={handleSubmit(submitHandler)}>
      <div className={styles.container}>
        <label htmlFor="first-name" className={styles.contactlabel}>
          <span className="text-md">First Name </span>
          <input
            type="text"
            className={`${styles['contact-input']} ${'text-md'}`}
            name="firstn"
            id="first-name"
            required
            {...register('firstn',{required:'Please Enter firstname'})}
          />
            {errors.firstn && errors.firstn.message}
        </label>
        <label htmlFor="last-name" className={styles.contactlabel}>
          <span className="text-md">Last Name</span>
          <input
            type="text"
            className={`${styles['contact-input']} ${'text-md'}`}

            name="lastn"
            id="last-name"
            required
            {...register('lastn',{required:'Please Enter lastname'})}
          />
             {errors.lastn && errors.lastn.message}

        </label>
        <label htmlFor="email" className={styles.contactlabel}>
          <span className="text-md">Email</span>
          <input
            type="email"
            className={`${styles['contact-input']} ${'text-md'}`}
            name="email"
            id="email"
            required
            {...register('email',{required:'Please Enter email'})}

          />
            {errors.email && errors.email.message}

        </label>
        <label htmlFor="phone-number" className={styles.contactlabel}>
          <span className="text-md">phone-number</span>
          <input
            type="number"
            className={`${styles['contact-input']} ${'text-md'}`}
            name="phonenumber"
            id="phone-number"
            required
            {...register('phonenumber',{required:'Please Enter phoneno'})}
          />
            {errors.phonenumber && errors.phonenumber.message}

        </label>
      </div>
      <label htmlFor="choose-topic" className={styles.contactlabel}>
        <span className="text-md">Choose a topic</span>
        <select id="choose-topic"   className={`${styles['contact-input']} ${'text-md'}`}
>
          <option>Select One...</option>
          <option>Item 1</option>
          <option>Item 2</option>
          <option>Item 3</option>
        </select>
      </label>
      <label htmlFor="message" className={styles.contactlabel}>
        <span className="text-md">Message</span>
        <textarea
          className={`${'text-md'} ${styles['contact-input']} `}
          id="message"
          rows="8"
          placeholder="Type your message..."
          name="message"
          {...register('message',{required:'Please Enter details'})}

        />
                    {errors.message && errors.message.message}

      </label>
      <label htmlFor="checkbox" className={styles.checkboxlabel}>
        <input type="checkbox" required name="checkbox" id="checkbox" className={styles.chckbx} />
        <span className="text-sm">I accept the terms</span>
      </label>
      <div>
        <button className={`${'btn'} ${'btn-primary'} ${styles['contact-form-btn']}`} type='submit' >Submit</button>
      </div>
    </form>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d865839.2723623787!2d115.30210844663144!3d-32.03719285699937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32966cdb47733d%3A0x304f0b535df55d0!2sPerth%20WA%2C%20Australia!5e0!3m2!1sen!2sin!4v1703145581994!5m2!1sen!2sin" width={100} height={450} style={{border: 0}} allowFullScreen="" loading="lazy" className={styles.mapping}
        referrerPolicy="no-referrer-when-downgrade"></iframe>
  </section>  
  )
}

export default ContactForm