import React from 'react';
import "../css/registerForm.css";
import "../pages/registrationInfo/registrationInfo";
import ImportantDetails from "../components/imp-details/imp-details";

export default function RegistrationForm() {
    return (
        <section className='payment-page-main-container'>
            <div>
                <div className="steps">
                <h2 className="payment-make-head" style={{paddingTop:"10rem"}}>Payment</h2>
                    <ul className='payment-step-details'>
                        <li className="step-detail">Vist the payment website: http://erp.sit.ac.in/external.aspx</li>
                        <li className="step-detail">Please put your paper id in the Any id no</li>
                        <li className="step-detail">Select the ICSSES 2023 from the Select Fee Header</li>
                        <li className="step-detail">Select the participant type in Select Fee Component</li>
                        <li className="step-detail">Click on confirm to proceed with the payment</li>
                        <li className="step-detail">As soon as you complete the payment please take a note of  the 14 digit transaction reference number which looks like "YUR31719819120"(first 3 digit is always alphabets)</li>
                        <li className="step-detail">Website Link : <a href="http://erp.sit.ac.in/external.aspx" target='blank'>http://erp.sit.ac.in/external.aspx</a> </li>
                    </ul>
                    <br />
                </div>
                <ImportantDetails/>
            </div>
        </section>
    )
}
