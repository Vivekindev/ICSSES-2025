import React, { useState } from 'react';
import "../css/registerForm.css";
import '../components/imp-details/imp-details.css';
import ImportantDetails from "../components/imp-details/imp-details";

export default function GuidelinesForm() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    return (
        <section className='registration-form-container'>
             <div className="content-wrapper">
                <h2 className="payment-header">Template Download </h2>
                <ul className='payment-step-details'>
                    <li className="step-detail">Download paper template (Microsoft Word)  <a href="https://www.ieee.org/content/dam/ieee-org/ieee/web/org/conferences/conference-template-a4.docx" target='_blank' rel="noopener noreferrer">Click Here</a></li>
                    <li className="step-detail">Download paper template (LaTex) <a href="https://www.ieee.org/content/dam/ieee-org/ieee/web/org/conferences/conference-latex-template.zip" target='_blank' rel="noopener noreferrer">Click Here</a></li>

             </ul>
              
            </div>

            <div className="content-wrapper">
                <h2 className="payment-header">Guidelines</h2>
                <ul className='payment-step-details'>
                    <li className="step-detail">Submit original, unpublished research papers in English.</li>
                    <li className="step-detail">Papers should be 4-8 pages, following the provided template.</li>
                    <li className="step-detail">Submit through CMT Microsoft; avoid multiple submissions.</li>
                    <li className="step-detail">Papers will be peer-reviewed (double-blind).</li>
                    <li className="step-detail">Plagiarism must not exceed 30%, including references.</li>
              </ul>
                
                <div className="checkbox-container">
                    <label>
                        <input 
                            type="checkbox" 
                            onChange={handleCheckboxChange} 
                            checked={isChecked} 
                        />
                       <span > I have read all the guidelines</span>
                    </label>
                </div>

                <center>
                    <a 
                        href="https://cmt3.research.microsoft.com/ICSSES2025" 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <button 
                            className='download-btn' 
                            disabled={!isChecked}
                        >
                            Proceed to CMT Login
                        </button>
                    </a>
                </center>
            </div>
        </section>
    );
}
