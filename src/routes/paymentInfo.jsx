import React from 'react';
import Navabar from '../components/navbar/navabar';
import { useLocation } from "react-router-dom";
import { MdOutlineCopyright } from "react-icons/md";
import RegistrationForm from './registerForm';
import "../css/paymentInfoSep.css";

export default function PaymentInfo() {
    const data = useLocation();
    //const num = data.state.number;
    const num = 1;

    if (num === 1) {
        return (
            <div className='pay-info-main-container'>
                <Navabar />
                <div className='pay-info-details'>
                    <RegistrationForm />
                </div>
             
                <div className='pay-info-footer'>
                    <MdOutlineCopyright className='pay-info-copyright' />
                    <h2>Copyrights by IEEE SIT SB</h2>
                </div>
            </div>
        );


        
    }
    else if (num === 2) {
        return (
            <div className='pay-info-main-container'>
                <Navabar />
                <div className='pay-info-details'>
                    <RegistrationForm />
                </div>
                <div className="pay-info-google-form-container">
                    <h2 className="pay-info-payment-head">Registration</h2>
                    <ul className='pay-info-step-details'>
                        <li className="pay-info-step-detail">Once you have completed the payment.</li>
                        <li className="pay-info-step-detail">Fill the Google Form. <a href="https://forms.gle/hGwmJsdLHG9zFa9L8" target='blank'>https://forms.gle/hGwmJsdLHG9zFa9L8</a></li>
                    </ul>
                </div>
                <div className='footer'>
                <MdOutlineCopyright className='copyright' />
                <h2>2025 ICSSES (Last Updated: 04<sup>th</sup> Oct 2024)</h2>
            </div>
            </div>
        );
    }
    // Similar changes for num === 3, num === 4, etc.
}
