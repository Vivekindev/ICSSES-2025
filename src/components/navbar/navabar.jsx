import React,{useState} from 'react'
import "../navbar/navabar.css"
import {NavLink} from "react-router-dom"
import {motion} from "framer-motion"
// import {GiHamburgerMenu} from "react-icons/gi"

function Navabar() {
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
        <div className='navbar-container' >
            
            <motion.nav
            animate={{y:navVisible?"0rem":"0rem"}}
            transition={{type:"tween"}}
            className={navVisible?"navbar_main-container navbar_active":"navbar_main-container"} >

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
        
    )
}

export default Navabar