import React from "react";
import "../css/home.css";
// import {styles} from 'react'
import { motion } from "framer-motion";
import Navabar from "../components/navbar/navabar";
import Marquee from "react-fast-marquee";
import { BsCalendarCheck } from "react-icons/bs";
import { MdOutlineCopyright } from "react-icons/md";
import month from "../assets/images/ce5634d2307b4c27aa12d315b1329394.jpg";
import sitLogo from "../assets/images/sit-removebg-preview.png";
import siddagngaSwamiji from "../assets/images/Shivakumara-Swamy-Tribute-removebg-preview.png";
import sitCampus from "../assets/images/1626788029037.jpg";
// import Questions from '../pages/questions/questions';
// import ImportantDetails from "../components/imp-details/imp-details";
// import Contacts from '../routes/contact_card'
import PreviousConference from "./PreviousConference";

function Home() {
  return (
    <div>
      <div className="home_hero-wrapper">
        <div className="home_hero-container">
          <Navabar />

          <div className="home_conference-details-wrapper">
            <div className="home_conference-details-container">
              <div className="home-confrence-type-marquee-container">
                <Marquee gradient={false} speed={50} pauseOnHover={true}>
                    <h3></h3>
                   
                </Marquee>
              </div>

              <div className="collage-images-container">
                <div className="h_sit-logo-wrapper">
                  <img src={sitLogo} alt="" />
                </div>
                <div className="h_swamiji-wrapper">
                  <img src={siddagngaSwamiji} alt="" />
                </div>
              </div>

              <div className="home_collage-name">
                <div className="name-wrapper">
                  <div className="collage-details">
                    <h2>Siddaganga Institute of Technology, Tumakuru</h2>
                    <h3>Association of Electrical Sciences</h3>
                  </div>
                </div>
                <div className="home_conference-name">
                  <h2>
                    3<sup>rd</sup> International Conference on Smart Systems for
                    applications in Electrical Sciences (ICSSES-2025)
                  </h2>
                </div>
                <div className="home_date-container">
                  <BsCalendarCheck className="calender-icon" />
                  <p>
                    7<sup>th</sup> & 8<sup>th</sup> March, 2025
                  </p>
                </div>
                <div className="web-link">
                  {/* <p className='center-design'>ICSSES is listed in the IEEE Conference Search/Call for Papers:</p> */}
                  {/* <a target='_blank' rel="noreferrer" id='ic-link' href="https://conferences.ieee.org/conferences_events/conferences/conferencedetails/58299">https://conferences.ieee.org/conferences_events/conferences/conferencedetails/58299</a> */}
                  <h3 className="center-align-text-data">
                    Upload camera Ready paper{" "}
                    <a
                      href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2F"
                      target="_blank"
                    >
                      CMT Login
                    </a>
                    .
                  </h3>
                  <h3 className="center-align-text-data">
                    Registration Link{" "}
                    <a
                      href="http://erp.sit.ac.in/external.aspx"
                      target="_blank"
                    >
                      Fee Payment
                    </a>
                    .
                  </h3>
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>               
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
 </div>
              </div>
              <div>
              <div className="home-confrence-type-marquee-container">
              <Marquee gradient={false} speed={40} pauseOnHover={true}>
                
                  <h3>
                    All accepted papers that are registered and presented in the
                    conference will be sent for possible inclusion in IEEE
                    Xplore.
                  </h3>
               
              </Marquee>
</div>
              </div>
              <br />

              {/* <Marquee gradient={false} speed={40} pauseOnHover={true}>
                <div className="home-confrence-type-marquee-container">
                  <p> Registration is now open. </p>
                </div>
              </Marquee> */}

              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="home-notifications">
        {/* <div className="reg-closed">
          <p>REGISTRATIONS CLOSED!!!</p>
        </div> */}
        {/* <ImportantDetails /> */}
        {/* <Questions /> */}
        {/* <Contacts /> */}
      </div>

      <div className="sit-image-wrapper">
        <div className="sit-wrapper">
          <div className="sit-campus-container">
            <h2>SIT Campus</h2>
          </div>
          <div className="sit-image-container">
            <img src={sitCampus} alt="" />
          </div>
        </div>
      </div>

      <div className="about-the-confenrence-wrapper">
        <div className="about-the-confenrence-container">
          <div className="about-conf-heading">
            <h2>About Conference</h2>
          </div>
          {/* <div className="conf-url">
                <a href="">ICSSES is listed in the IEEE Conference Search/Call for Papers: </a>
              </div> */}
          <div className="conf-para-container">
            <div className="confrence-para-1">
              <p>
                3<sup>rd</sup> International Conference on Smart systems for
                applications in Electrical Sciences, addresses many diversified
                specialized areas like Autonomous Vehicles, Wireless
                Communication, AI and ML applications, Secure Communication,
                IoT/Industry 4.0, Networks & Security, VLSI & FPGA, High
                Voltage, Power Systems, Drives & Control, Biomedical, Robotics
                Systems, Signal & Image processing, Control & Automation,
                Materials, etc.
              </p>
            </div>
            <div className="confrence-para-2">
              <p>
                It will be held during 7<sup>th</sup> and 8<sup>th</sup> March,
                2025. The conference will feature plenary talks by distinguished
                researchers and technologists as well as contributed papers from
                academics and industry professionals. ICSSES 2025 is a platform
                for technologists and researchers from academia and industry
                across the globe to share their ideas on emerging technologies
                and newer solutions that can guide and lead towards a better
                tomorrow. Authors can present the papers in hybrid mode.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="home_tracks-wrapper">
        <div className="track-heading">
          <h2>Tracks</h2>
        </div>
        <div className="home_tracks-containers">
          <div className="tracks-card-wrappers">
            <motion.div
              // animate={{y:"0px"}}
              // transition={{type:"tween",duration:1.25}}
              // initial={{y:"-9rem"}}
              className="track-container track1"
            >
              <div className="track-name">
                <p>Track 1: Wireless Communication</p>
              </div>
              <div className="track-details">
                <ul>
                  <li>5G, 6G and beyond communication systems</li>
                  <li>Software defined wireless networks</li>
                  <li>
                    Cognitive radio energy harvesting and green communications
                  </li>
                  <li>Satellite, Space and Optical Communication</li>
                  <li>Antenna and RF technologies</li>
                </ul>
              </div>
            </motion.div>
            <div className="track-container track4">
              <div className="track-name">
                <p>Track 2: Signal Processing</p>
              </div>
              <div className="track-details">
                <ul>
                  <li>Signal Processing and Smart Systems</li>
                  <li>
                    Machine Learning and Deep Learning in Signal Processing
                  </li>
                  <li>Image and Biomedical Signal Processing</li>
                  <li>Satellite, Space and Optical Communication</li>
                  <li>Signal Processing for Communication</li>
                </ul>
              </div>
            </div>

            <div className="track-container track9">
              <div className="track-name">
                <p>Track 3: VLSI Design</p>
              </div>
              <div className="track-details">
                <ul>
                  <li>Analog and Mixed signal Circuits & Systems</li>
                  <li>Digital Integrated Circuits & Systems</li>
                  <li>Nano electronics</li>
                  <li>RF Integrated Circuits & Systems</li>
                  <li>Analog & Digital Mixed VLSI Design</li>
                  <li>VLSI Design and testing</li>
                  <li>VLSI Devices & System</li>
                </ul>
              </div>
            </div>

            <div className="track-container track6">
              <div className="track-name">
                <p>Track 4: Autonomous Vehicles</p>
              </div>
              <div className="track-details">
                <ul>
                  <li>Real time attack detection</li>
                  <li>
                    Applications of cryptography in autonomous vehicle driving
                    systems
                  </li>
                  <li>Socio-economic impact of self driving cars</li>
                  <li>
                    Software and hardware and architecture of self driving cars
                  </li>
                  <li>Security in autonomous driving</li>
                  <li>Sign detection in self driving cars</li>
                </ul>
              </div>
            </div>

            <div className="track-container track5">
              <div className="track-name">
                <p>Track 5: IoT/Industry 4.0</p>
              </div>
              <div className="track-details">
                <ul>
                  <li>Electronic Circuit Design</li>
                  <li>Software architecture design and development</li>
                  <li>Real Time operating system</li>
                  <li>Hardware-Software Co design</li>
                  <li>Embedded Security</li>
                  <li>Data center and cloud networks</li>
                  <li>Sensor and adhoc networks</li>
                  <li>Industry 4.0</li>
                </ul>
              </div>
            </div>

            <div className="track-container track7">
              <div className="track-name">
                <p>Track 6: Power Systems, Control and Electric Vehicles</p>
              </div>
              <div className="track-details">
                <ul>
                  <li>AI applications to Power systems</li>
                  <li>Reliability, stability and protection</li>
                  <li>DC to DC converter design</li>
                  <li>MLS Design and analysis</li>
                  <li>Battery management system</li>
                </ul>
              </div>
            </div>

            <div className="track-container track8">
              <div className="track-name">
                <p>Track 7: Smart Sensors and Process Automation</p>
              </div>
              <div className="track-details">
                <ul>
                  <li>Safety in Automation using robotics</li>
                  <li>Intelligent Transportation technological & systems</li>
                  <li>
                    Application of Automation-control & supervision systems.
                  </li>
                  <li>
                    Control application-Power systems, Agriculture, Energy
                  </li>
                  <li>Robotics</li>
                  <li>
                    Linear & Nonlinear control, optimal control, advanced
                    process control.
                  </li>
                  <li>PLC & DCS</li>
                </ul>
              </div>
            </div>

            <motion.div
              // animate={{y:"0px"}}
              // transition={{type:"tween",duration:1.25}}
              // initial={{y:"-9rem"}}
              className="track-container track2"
            >
              <div className="track-name">
                <p>Track 8: AI and ML applications </p>
              </div>
              <div className="track-details">
                <ul>
                  <li>Machine learning and artificial intellegence</li>
                  <li>Big data networks</li>
                  <li>Data analytics for social impact</li>
                  <li>Data mining and management</li>
                  <li>Data Science</li>
                  <li>Data driven climate science</li>
                </ul>
              </div>
            </motion.div>

            <div className="track-container track3">
              <div className="track-name">
                <p>Track 9: Secure Communication</p>
              </div>
              <div className="track-details">
                <ul>
                  <li>Ad hoc networks</li>
                  <li>Mobile edge computing</li>
                  <li>Encryption and decryption</li>
                  <li>Wireless Sensor Networks</li>
                  <li>Self Organized networks</li>
                  <li>Security in cloud services </li>
                </ul>
              </div>
            </div>

            <div className="track-container track3">
              <div className="track-name">
                <p>Track 10: Materials</p>
              </div>
              <div className="track-details">
                <ul>
                  <li>Functional Materials</li>
                  <li>Thin Films</li>
                  <li>Polymeric Materials</li>
                  <li>Energy Materials</li>
                  <li>Micro or Nano Materials</li>
                  <li>Bio-materials</li>
                  <li>Smart Materials</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="important-dates-container">
        <div className="imp-dates-details">
          <div className="imp-date-heading">
            <h2>Important Dates</h2>
          </div>
          <ul>
            <li>
              Submission Portal Opens: 1<sup>st</sup> November 2024
            </li>
            {/* <li>Full Paper Submission Deadline: 17th May 2024<span className='hard-dline'> Hard Deadline</span></li> */}
            <li>
              Full Paper Submission Deadline:{" "} 15<sup>th</sup> January 2025
              
            </li>
            {/* <li>Full Paper Submission Deadline: 3<sup>rd</sup> Feburary 2024</li> */}
            {/* <li className='reg-details'>Full Paper Submission Deadline:  <span className='animate-notify'> Extended to 18<sup>th</sup> Feburary 2024 </span> </li> */}
            {/* <li>Acceptance/Rejection Notification <span className="phase">(PHASE-1)</span> : 3<sup>rd</sup> March 2024</li> */}
            <li>
              Acceptance/Rejection Notification : 18<sup>th</sup> February 2025
            </li>
            {/* <li>Submission of camera ready paper <span className="phase">(PHASE-1)</span> : 3<sup>rd</sup> April 2024</li> */}
            <li>
              Submission of camera ready paper : 22<sup>nd</sup>  February 2025
            </li>
            {/* <li>Payment and Registration Deadline : 14<sup>th</sup> June 2024<span className='hard-dline'> Hard Deadline</span></li> */}
            <li>
              Payment and Registration Deadline : 26<sup>th</sup> February 2025{" "}
            </li>
            <li>
              Conference dates: 7<sup>th</sup>& 8<sup>th</sup> MARCH 2025
            </li>
          </ul>
          {/* Photos section for previous years */}
          {/* <PreviousConference /> */}
        </div>

        <div className="imp-image-container">
          <img src={month} alt="" />
        </div>
      </div>

      <div className="footer">
        <MdOutlineCopyright className="copyright" />
        <h2>Copyrights by IEEE SIT SB</h2>
      </div>
    </div>
  );
}

export default Home;
