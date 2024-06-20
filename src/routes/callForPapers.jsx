import React,{useState} from 'react';
import "../css/about.css"
// import "../pages/registrationInfo/registrationInfo"
import "../css/callForPapers.css"
// import Navabar from '../components/navbar/navabar'
import {NavLink} from "react-router-dom"
import {motion} from "framer-motion"
import callForPapersBanner from "../assets/images/Call-For-Papers-Banner.png"
import {MdOutlineCopyright} from "react-icons/md"
import {HiOutlineArrowSmRight} from "react-icons/hi"


export default function Papersubmission() {
    const [navVisible, setNavVisible] = useState(false);
    // const [isClicked, setisClicked] = useState(false)
    
    //animation code to make navbar have color grey
    //when the screen is scrolled more than 15vh
    const changeBackground = ()=>{
        let step = (window.innerHeight)*(1/100)
        if(window.scrollY>=step){
            setNavVisible(true);
        }
        else{
            setNavVisible(false)
        }
    };
    window.addEventListener("scroll",changeBackground)
    return (
        
        <>
            <div className='call-for-papers-main-container'>
                {/* <Navabar/> */}

                <div className='navbar-container' >
            
                    <motion.nav
                    animate={{y:navVisible?"0rem":"0rem"}}
                    transition={{type:"tween"}}
                    className={navVisible?"call-for-papers-navbar_main-container navbar_active":"call-for-papers-navbar_main-container"} >

                        <ul className='navbar_menu-link-wrapper'>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/Committees">Committees</NavLink></li>
                            <li><NavLink to="/call-for-papers">Call for papers</NavLink></li>
                            <li><NavLink to="/Registration">Registration</NavLink></li>
                            <li><NavLink to='/Contact-us'>Contact Us</NavLink></li>
                            <li><NavLink to='/about'>About Us</NavLink></li>
                        </ul>

                    </motion.nav>
            
                </div>

                <div className="call-for-papers-banner">
                    <img src={callForPapersBanner} alt="" />
                </div>
                <div className="call-for-papers-about-cfp-wrapper">
                    <div className="call-for-papers-about-cfp-container">
                        <h3>Call For Papers</h3>
                        <p style={{fontSize:"2rem"}}>
                            3<sup>rd</sup> International Conference on Smart Systems for applications in Electrical Sciences (ICSSES) will be organized on 
                             7<sup>th</sup> and 8<sup>th</sup> March, 2025 at Siddaganga Institute of Technology, Tumkur, Karnataka. The main objective of the conference 
                            is to decipher advances and innovations in the field of 6G, IoT, Automation and Automotive Electronics. Original contributions 
                            based on theoretical, experimental, design, development, simulation, application, test, measurement and similar studies covering topics (not restricted to) 
                            in the following areas are invited for oral and poster presentations. 
                        </p>
                    </div>
                    <div className="call-for-papers-about-cfp-container">
                        <h3>Paper Submission</h3>
                        <p style={{fontSize:"2rem"}}>
                        Papers intended for ICSSES - 2025 should be up to six pages of text. Paper submission must conform to the 
                        format defined in the paper presentation guidelines on the conference webpage. Papers must be submitted via online 
                        paper submission system.
                        </p>
                    </div>
                    
                </div>
                {/* <div className="call-for-papers-buttons-container">
                    <div className="call-for-papers-col">
                        <h3>Paper Template</h3>
                        <HiOutlineArrowSmRight size="4rem"/>
                        <a 
                            href="https://www.ieee.org/conferences/publishing/templates.html"
                            target="_blank"
                            rel="noreferrer"
                            >
                            <button>Click Here</button>
                        </a>
                    </div>
                    <div className="call-for-papers-col">
                        <h3>Paper Submission Link</h3>
                        <HiOutlineArrowSmRight size="4rem"/>
                        <a 
                            href="https://cmt3.research.microsoft.com/ICSSES2023"
                            target="_blank"
                            rel="noreferrer"
                            >
                            <button>Click Here</button>
                        </a>
                    </div>
                </div> */}

                <div className="call-for-papers-track-details-wrapper">
                    <h3>Track Details</h3>
                    <div className="call-for-papers-track-details-container">
                        <ul style={{fontSize:"2rem"}}>
                            <li>Wireless Communication</li>
                            <li>AI and ML applications</li>
                            <li>Secure Communication</li>
                            <li>Signal Processing</li>
                            <li>IoT/Industry 4.0</li>
                            <li>Autonomous Vehicles</li>
                            <li>Power Systems, Control and Electric Vehicles</li>
                            <li>Smart Sensors and Process Automation</li>
                            <li>VLSI Design</li>
                            <li>Materials</li>
                        </ul>
                    </div>
                </div>  
                <div className='footer'>
                    <MdOutlineCopyright className='copyright'/> 
                    <h2>2025 ICSSES (Last Updated: 19<sup>th</sup> Jun 2024)</h2>
                </div>
            </div>
            
                
        </>
    )
}
