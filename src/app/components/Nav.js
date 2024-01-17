'use client'


// import React from 'react'
import styles from "@/app/styles/navbar.module.css"
// import {CgCloseR, CgMenu} from "react-icons/cg";
import Link from 'next/link'

import {useState,useEffect} from "react";
// import "@/app/styles/navbar.module.css"
import Image from 'next/image'
import { useRouter } from 'next/router'
import { usePathname } from 'next/navigation';



import React from 'react'
// import { Link } from "react-scroll";

const Nav = () => {
//     const router = useRouter();
// const currentRoute = router.pathname;
const currentRoute = usePathname();


    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);
      };
    
      const closeMenu = () => {
        setNavActive(false);
      };
    
      useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 500) {
            closeMenu;
          }
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
    
      useEffect(() => {
        if (window.innerWidth <= 1200) {
          closeMenu;
        }
      }, []);
    

  return (
    <nav className={`${styles['navbar']} ${styles[navActive ? "active" : ""]}` }>

{/* <nav className={`navbar ${navActive ? "active" : ""}`}> */}
    
      <div className={styles.navbar_brand}> 
        <Image src="/blifelogo.svg" alt="Logoipsum" width={150} height={70}/>   
      </div>
      <a
        className={`nav__hamburger ${styles[navActive ? "active" : ""]}`}
        onClick={toggleNav}>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      {/* <div className={`navbaritems ${navActive ? "active" : ""}`}> */}
      <div className={`${styles["navbaritems"]} ${styles[navActive ? "active" : ""]}`}>

        <ul>
          <li>
            <Link
              onClick={closeMenu}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              href="/"
              className={currentRoute === "/" 
       ? styles.navbaractivecontent
          :styles.navbarcontent}>
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              href="/portfolio"
              className={currentRoute === "/portfolio" 
              ? styles.navbaractivecontent
              :styles.navbarcontent}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              href="/about"
              className={currentRoute === "/about" 
              ? styles.navbaractivecontent
              :styles.navbarcontent}>
              About Me
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              href="/contact"
              className={currentRoute === "/contact" 
              ? styles.navbaractivecontent
              :styles.navbarcontent}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* <Link
        onClick={closeMenu}
        className={currentRoute === "/contact" 
        ? styles.navbaractivecontent
        :`${'btn'} ${'btn-outline-primary'} `}                                
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        href="/contact"
      >
        Contact Me
      </Link> */}
    </nav> 
     )
}

export default Nav