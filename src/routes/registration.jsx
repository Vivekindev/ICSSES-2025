import React from 'react';
// import ImportantDetails from '../components/imp-details/imp-details.jsx'
import "../css/registration.css";
import "../pages/registrationInfo/registrationInfo";
import Navabar from '../components/navbar/navabar'
import RegistrationInfo from '../pages/registrationInfo/registrationInfo';
import { MdOutlineCopyright } from "react-icons/md"
// import Questions from '../pages/questions/questions';
export default function Registration() {
    return (
        <section className='registration-page-main-container'>
            <div className='registration-page-hero-container'>
                <Navabar />
        
                <RegistrationInfo />
                <p className="reg-closed-1"></p>
                {/* <Questions /> */}

                
                <div className='footer'>
                    <MdOutlineCopyright className='copyright' />
                    <h2>Copyrights by IEEE SIT SB</h2>
                </div>
            </div>
        </section>
    )
}
