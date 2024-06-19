import React, { useState } from 'react'
// import { NavLink } from "react-router-dom"
// import { motion } from "framer-motion"
import "./questions.css"
import Marquee from 'react-fast-marquee'
import downloadPDFTrack1 from "../../assets/letterhead1_schedule_icsses2023_ECE1.pdf";
import downloadPDFTrack2 from "../../assets/letterhead1_schedule_icsses2023_ETE.pdf";
import downloadPDFTrack3 from "../../assets/letterhead1_schedule_icsses2023_EIE.pdf";
import downloadPDFTrack4 from "../../assets/letterhead1_schedule_icsses2023_EEE.pdf";
// import { HiOutlineArrowSmRight } from "react-icons/hi"
function Questions() {
  const [register, setRegister] = useState(false);
  // const [indianAuthor, setIndianAuthor] = useState(false);
  // const [academic, setAcademic] = useState(false);
  // const [industry, setIndustry] = useState(false);
  // const [foreign, setForeign] = useState(false);
  // const [flag, setFlag] = useState(false);
  // const [flag1, setFlag1] = useState(false);
  // const [attendee, setAttendee] = useState(false);
  // const [ieeeMember, setIeeemember] = useState(false);
  return (
    <div>
      <div className='reg-info-div'>
        {/* <h3 className='registration-tag'>For Registration</h3>
        <HiOutlineArrowSmRight size="4rem" /> */}
        <button className='register-here' onClick={() => setRegister(!register)}>DOWNLOAD TRACK SCHEDULE</button>
      </div>
      <div className={register === true ? 'show-div' : 'no-show'}>
        <ul className='participation-type'>
          <li className='tracks'><a href={downloadPDFTrack1} download="ICSSES_Track_1_2.pdf" target="_blank" rel="noreferrer">FOR TRACK 1 AND TRACK 2 CLICK HERE</a></li>
          <li className='tracks'><a href={downloadPDFTrack2} download="ICSSES_Track_3.pdf" target="_blank" rel="noreferrer">FOR TRACK 3 CLICK HERE</a></li>
          <li className='tracks'><a href={downloadPDFTrack3} download="ICSSES_Track_4.pdf" target="_blank" rel="noreferrer">FOR TRACK 4 CLICK HERE</a></li>
          <li className='tracks'><a href={downloadPDFTrack4} download="ICSSES_Track_5.pdf" target="_blank" rel="noreferrer">FOR TRACK 5 CLICK HERE</a></li>
        </ul>
      </div>
      <Marquee gradient={false} speed={40} pauseOnHover={true}>
                <div className="questions-confrence-type-marquee-container">
                  <p> If your Paper Title is not found in a particular track, check whether your paper title is present in other track. </p>
                  <p> If you did not find your paper title in any tracks, please contact <a href="mailto:veena.karjigi@sit.ac.in"> 
                  veena.karjigi@sit.ac.in </a></p>
                </div>
              </Marquee>
    </div>
  )
}
export default Questions;