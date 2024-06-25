import React from 'react'
import "../css/contactus.css"
import { MdOutlineCopyright } from "react-icons/md"
import { motion } from "framer-motion"
// import logo from "../assets/images/sit logo.png";
import Navabar from '../components/navbar/navabar'
function Contactus() {
  return (
    <section className='contact-page-main-container'>
      <div className="contact-page-hero-container">
        <Navabar />
        <div className="contact-page-heading-container">
        <div className="contact-wrapper">
        {/* this code is same as home.jsx */}
        <div className="contact-containers">
          <div className="contact-card-wrappers">
            <motion.div
              // animate={{y:"0px"}}
              // transition={{type:"tween",duration:1.25}}
              // initial={{y:"-9rem"}}
              className="contact-card-container contact1">
              <div className="contact-name">
                <p>Dr. Vinayaka K. U.</p>
              </div>
              <div className="contact-details">
                <ul>
                  <li className='asp'>Assistant Professor</li>
                  <li>Dept. of EEE</li>
                  <li>SIT, Tumkur</li>
                  <li className='decor asp'>+91 9538539591</li>
                  <li className='decor asp'>icsses@sit.ac.in</li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              // animate={{y:"0px"}}
              // transition={{type:"tween",duration:1.25}}
              // initial={{y:"-9rem"}} 
              className="contact-card-container contact2">
              <div className="contact-name">
                <p>Dr. Madhu B. M.</p>
              </div>
              <div className="contact-details">
                <ul>
                  <li className='asp'>Assistant Professor</li>
                  <li>Dept. of EEE</li>
                  <li>SIT, Tumkur</li>
                  <li className='decor asp'>+91 9986163831</li>
                  <li className='decor asp'>madhubm@sit.ac.in</li>
                </ul>
              </div>
            </motion.div>

          </div>


        </div>
      </div>
        </div>
      </div>
      <div className='footer'>
        <MdOutlineCopyright className='copyright' />
        <h2>2025 ICSSES (Last Updated: 25<sup>th</sup> Jun 2024)</h2>
      </div>
    </section>
  )
}

export default Contactus