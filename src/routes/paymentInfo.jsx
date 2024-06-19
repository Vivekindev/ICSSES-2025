import React from 'react';
import Navabar from '../components/navbar/navabar'
import {  useLocation } from "react-router-dom"
import { MdOutlineCopyright } from "react-icons/md"
import RegistrationForm from './registerForm';
import "../css/paymentInfo.css";


export default function PaymentInfo() {
    const data = useLocation();
    const num = data.state.number;
    if (num === 1) {
        return (
            <div className='payment-info-main-container'>
                <Navabar />
                <div className='details'>
                    <RegistrationForm />
                </div>
                <div className="google-form-main-container">
                    <h2 className="payment-make-head">Registration</h2>
                    <ul className='reg-step-details'>
                        <li className="step-detail">Once you have completed the payment.</li>
                        <li className="step-detail">Fill the Google Form. <a href="https://forms.gle/fypuM3dxdYuQGwNC7" target='blank'>https://forms.gle/fypuM3dxdYuQGwNC7</a></li>
                    </ul>
                </div>
                <div className='footer'>
                    <MdOutlineCopyright className='copyright' />
                    <h2>Copyrights by IEEE SIT SB</h2>
                </div>
            </div>
        )
    }
    else if (num === 2) {
        return (
            <div className='payment-info-main-container'>
                <Navabar />
                <div className='details'>
                    <RegistrationForm />
                </div>
                <div className="google-form-main-container">
                    <h2 className="payment-make-head">Registration</h2>
                    <ul className='reg-step-details'>
                        <li className="step-detail">Once you have completed the payment.</li>
                        <li className="step-detail">Fill the Google Form. <a href="https://forms.gle/hGwmJsdLHG9zFa9L8" target='blank'>https://forms.gle/hGwmJsdLHG9zFa9L8</a></li>
                    </ul>
                </div>
                {/* <iframe className='gform' src="https://docs.google.com/forms/d/e/1FAIpQLSfOuWE1IDdlJYppIl-0xX3w9p-DThboHhRUGNDb-UgdUlWiEw/viewform?embedded=true" width="640" height="1499" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
                <div className='footer'>
                    <MdOutlineCopyright className='copyright' />
                    <h2>Copyrights by IEEE SIT SB</h2>
                </div>
            </div>
        )
    }
    else if (num === 3) {
        return (
            <div className='payment-info-main-container'>
                <Navabar />
                <div className='details'>
                    <RegistrationForm />
                </div>
                <div className="google-form-main-container">
                    <h2 className="payment-make-head">Registration</h2>
                    <ul className='reg-step-details'>
                        <li className="step-detail">Once you have completed the payment.</li>
                        <li className="step-detail">Fill the Google Form. <a href="https://forms.gle/oG54FnvXDwNrsg3T8" target='blank'>https://forms.gle/oG54FnvXDwNrsg3T8</a></li>
                    </ul>

                    {/* <iframe className='gform' src="https://docs.google.com/forms/d/e/1FAIpQLSfOuWE1IDdlJYppIl-0xX3w9p-DThboHhRUGNDb-UgdUlWiEw/viewform?embedded=true" width="640" height="1499" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
                </div>
                <div className='footer'>
                    <MdOutlineCopyright className='copyright' />
                    <h2>Copyrights by IEEE SIT SB</h2>
                </div>
            </div>
        )
    }
    else if (num === 4) {
        return (
            <div className='payment-info-main-container'>
                <Navabar />
                <div className='details'>
                    <RegistrationForm />
                </div>
                <div className="google-form-main-container">
                    <h2 className="payment-make-head">Registration</h2>
                    <ul className='reg-step-details'>
                        <li className="step-detail">Once you have completed the payment.</li>
                        <li className="step-detail">Fill the Google Form. <a href="https://forms.gle/i9jZpEKPCCowAfgt6" target='blank'>https://forms.gle/i9jZpEKPCCowAfgt6</a></li>
                    </ul>

                    {/* <iframe className='gform' src="https://docs.google.com/forms/d/e/1FAIpQLSfOuWE1IDdlJYppIl-0xX3w9p-DThboHhRUGNDb-UgdUlWiEw/viewform?embedded=true" width="640" height="1499" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
                    {/* <iframe className='gform' src="https://docs.google.com/forms/d/e/1FAIpQLSfOuWE1IDdlJYppIl-0xX3w9p-DThboHhRUGNDb-UgdUlWiEw/viewform?embedded=true" width="640" height="1499" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
                </div>
                <div className='footer'>
                    <MdOutlineCopyright className='copyright' />
                    <h2>Copyrights by IEEE SIT SB</h2>
                </div>
            </div>
        )
    }
    else if (num === 5) {
        return (
            <div className='payment-info-main-container'> 
                <Navabar />
                <div className='details'>
                    <RegistrationForm />
                </div>

                <div className="google-form-main-container">
                    <h2 className="payment-make-head">Registration</h2>
                    <ul className='reg-step-detailss'>
                        <li className="step-detail">Once you have completed the payment.</li>
                        <li className="step-detail">Fill the Google Form. <a href="https://forms.gle/WPg4XhmD2gGTZg9g9" target='blank'>https://forms.gle/WPg4XhmD2gGTZg9g9</a></li>
                    </ul>

                    {/* <iframe className='gform' src="https://docs.google.com/forms/d/e/1FAIpQLSfOuWE1IDdlJYppIl-0xX3w9p-DThboHhRUGNDb-UgdUlWiEw/viewform?embedded=true" width="640" height="1499" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
                    {/* <iframe className='gform' src="https://docs.google.com/forms/d/e/1FAIpQLSfOuWE1IDdlJYppIl-0xX3w9p-DThboHhRUGNDb-UgdUlWiEw/viewform?embedded=true" width="640" height="1499" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
                    {/* <iframe className='gform' src="https://docs.google.com/forms/d/e/1FAIpQLSfOuWE1IDdlJYppIl-0xX3w9p-DThboHhRUGNDb-UgdUlWiEw/viewform?embedded=true" width="640" height="1499" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
                </div>
                <div className='footer'>
                    <MdOutlineCopyright className='copyright' />
                    <h2>Copyrights by IEEE SIT SB</h2>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='payment-info-main-container'>
                <Navabar />
                <div className='details'>
                    <RegistrationForm />
                </div>
                <div className="google-form-main-container">
                    <h2 className="payment-make-head">Instructions to make the Registration.</h2>
                    <ul className='reg-step-details'>
                        <li className="step-detail">Once you have completed the payment.</li>
                        <li className="step-detail">Fill the Google Form. <a href="https://forms.gle/Z9m1LjtD7tziABWV9" target='blank'>https://forms.gle/Z9m1LjtD7tziABWV9</a></li>
                    </ul>

                    {/* <iframe className='gform' src="https://docs.google.com/forms/d/e/1FAIpQLSfOuWE1IDdlJYppIl-0xX3w9p-DThboHhRUGNDb-UgdUlWiEw/viewform?embedded=true" width="640" height="1499" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
                    {/* <iframe className='gform' src="https://docs.google.com/forms/d/e/1FAIpQLSfOuWE1IDdlJYppIl-0xX3w9p-DThboHhRUGNDb-UgdUlWiEw/viewform?embedded=true" width="640" height="1499" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
                    {/* <iframe className='gform' src="https://docs.google.com/forms/d/e/1FAIpQLSfOuWE1IDdlJYppIl-0xX3w9p-DThboHhRUGNDb-UgdUlWiEw/viewform?embedded=true" width="640" height="1499" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}

                    {/* <iframe className='gform' src="https://docs.google.com/forms/d/e/1FAIpQLSfOuWE1IDdlJYppIl-0xX3w9p-DThboHhRUGNDb-UgdUlWiEw/viewform?embedded=true" width="640" height="1499" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
                </div>
                <div className='footer pay-footer'>
                    <MdOutlineCopyright className='copyright' />
                    <h2>Copyrights by IEEE SIT SB</h2>
                </div>
            </div>
        )
    }
}