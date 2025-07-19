import React from 'react';
import "../css/registerForm.css";
import ImportantDetails from "../components/imp-details/imp-details";

export default function RegistrationForm() {
    return (
        <section className='registration-form-container'>
            <div className="content-wrapper">
                <h2 className="payment-header">Payment Instructions</h2>
                <ul className='payment-step-details'>
                    <li className="step-detail">Visit the payment website: <a href="http://erp.sit.ac.in/external.aspx" target='_blank' rel="noopener noreferrer">http://erp.sit.ac.in/external.aspx</a></li>
                    <li className="step-detail">Enter your paper ID in the "Any ID No" field.</li>
                    <li className="step-detail">Select "ICSSES 2023" from the "Select Fee Header".</li>
                    <li className="step-detail">Choose the appropriate participant type in "Select Fee Component".</li>
                    <li className="step-detail">Click "Confirm" to proceed with the payment.</li>
                    <li className="step-detail">After completing the payment, make a note of the 14-digit transaction reference number (e.g., "YUR31719819120"). The first 3 digits are always alphabets.</li>
                </ul>
                <ImportantDetails />
            </div>

            <div className="content-wrapper">
                <h2 className="payment-header">Registration</h2>
                <ul className='payment-step-details'>
                    <li className="step-detail">Once you have completed the payment.</li>
                    <li className="step-detail">Fill the Google Form <a href="https://forms.gle/fypuM3dxdYuQGwNC7" target='_blank' rel="noopener noreferrer">https://forms.gle/fypuM3dxdYuQGwNC7</a></li>

             </ul>
              
            </div>
        </section>




    );
}
