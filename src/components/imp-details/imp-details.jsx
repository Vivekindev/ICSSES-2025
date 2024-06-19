import React from 'react';
import "./imp-details.css";
// import downloadPDFReg from "../../assets/registrations.pdf";
// import downloadPDFToBeConfirm from "../../assets/toBeConfirmed.pdf";

export default function ImpDetails() {

// const [schedule,setSchedule]=useState(false);
    return (
        // <div className="imp-details-confenrence-container">
        //     <div className="imp-para-container">
        //         <div className="imp-confrence-para-1">
        //             <p>
        //                 Authors of the accepted papers are hearby informed to complete the following by 2nd June 2023
        //                 <ol className='level-1-list'>
        //                     <li>Camera Ready Paper</li>
        //                     <ul className='level-2-list'>
        //                         <li>Log in to your microsoft CMT account</li>
        //                         <li>Click on the edit camera ready submission link</li>
        //                         <li>Upload the camera ready paper</li>
        //                     </ul>
        //                 </ol>
        //                 <br />
        //                 <ol className='level-1-list'>
        //                     <li>IEEE Copyright File</li>
        //                     <ul className='level-2-list'>
        //                         <li>Log in to your microsoft CMT account</li>
        //                         <li>Click on the IEEE Copyright Form</li>
        //                         <li>Follow the instructions given on the page</li>
        //                     </ul>
        //                 </ol>
        //                 <br />
        //                 <ol className='level-1-list'>
        //                     <li>Payment</li>
        //                     <ul className='level-2-list'>
        //                         <li>Pay the prescribed amount mentioned depending on the category</li>
        //                         <li>Note the transaction ID</li>
        //                     </ul>
        //                 </ol>
        //                 <br />
        //                 <ol className='level-1-list'>
        //                     <li>Camera Ready Paper</li>
        //                     <ul className='level-2-list'>
        //                         <li>Fill the google form</li>
        //                     </ul>
        //                 </ol>
        //             </p>
        //         </div>
        //     </div>
            <div className="imp-page-buttons">
                <a href="https://drive.google.com/drive/folders/1IfgNpVPjQy-8mxVhlQnPVuZebkVF5ODJ?usp=sharing" target="_blank" rel="noreferrer">
                    <button className='download-btn'>CONFIRMED REGISTRATIONS</button>
                </a>
            
                {/* <a href={downloadPDFToBeConfirm} download="Example-PDF-document" target="_blank" rel="noreferrer">
                    <button className='download-btn'>Registrations to be Confirmed</button>
                </a> */}
                {/* <button className="show-schedule" onClick={()=>setSchedule(!schedule)}>CLICK HERE FOR TRACK SCHEDULE</button> */}
                {/* <div className={schedule===true?"schedule-pdfs":"no-show"}>
        
                   <a href="../src/scheduledFiles/letterhead1_schedule_icsses2023_ECE1.pdf">FOR TRACK 1 AND TRACK 2 CLICK HERE</a>
                   <br></br>
                    <a href="../src/scheduledFiles/letterhead1_schedule_icsses2023_ETE.pdf">FOR TRACK 3 CLICK HERE</a>
                    <br></br>
                    <a href="../src/scheduledFiles/letterhead1_schedule_icsses2023_EIE.pdf">FOR TRACK 4 CLICK HERE</a>
                    <br></br>
                    <a href="../src/scheduledFiles/letterhead1_schedule_icsses2023_EEE.pdf">FOR TRACK 5</a>
                    <br></br>
        
                </div> */}
            </div>
    )
}
