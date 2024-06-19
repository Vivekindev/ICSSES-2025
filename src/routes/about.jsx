import React from 'react';
import logo from "../assets/images/sit logo.png";
import "../css/about.css"
import Navabar from '../components/navbar/navabar'
import { MdOutlineCopyright } from "react-icons/md"

export default function about() {
    return (
        <section className='about-page-main-container'>
            <div className="about-page-hero-container">
                <Navabar />
                <div className="about-page-heading-container">
                    {/* <h1 className="about-us-heading">  <span className='about-highlight'>About</span> Us</h1> */}
                    <div className="sit-image-container">
                        <img src={logo} alt="sit" />
                    </div>
                    <div className="about-us-text-container">
                        <p className="about-us-text">
                            Siddaganga Institute of Technology, Tumkur popularly known as SIT was established in the year 1963. It was founded and nurtured by His Holiness Dr. Sree Sree Shivakumara Swamiji. The present president of Sree Siddaganga Education Society Sree Sree Siddalinga Swamiji is providing directional guidelines. The college is an autonomous institution affiliated to Visvesvaraya Technological University (VTU), Belagavi, Karnataka, approved by AICTE, New Delhi and Programmes accredited by NBA, New Delhi. The institute is accredited by NAAC with ‘A++’ grade and awarded Diamond College rating by QS I-Gauge. At present, the institute offers 14 undergraduate programmes and 9 post graduate programmes and 15 research centers of the institute are recognized by VTU to offer Ph.D. and M.Sc. (Engg.) by research. The institute has well qualified, experienced, and competent faculty members. SIT is ranked one among top hundred institutions in India by National Institute of Ranking Framework since 2016.
                        </p>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <MdOutlineCopyright className='copyright' />
                <h2>Copyrights by IEEE SIT SB</h2>
            </div>
        </section>
    )
}
