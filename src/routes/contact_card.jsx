import React from "react";
import "../css/contact_card.css"
function Contacts() {
  return (
    <div className='contact-cards-main-container'>
      <div className="about-conf-heading">
        <h2>Contact Details</h2>
      </div>
      <div className="contact-cards-container">
        <div className="contact-card">
          <h2 className="track-num">Track 1</h2>
          <h2 className='track-head'>Dr. Dhruvakumar T</h2>
          <h2 className="track-desig">Assistant Professor</h2>
          <h2 className="track-dept">Electronics and Communication Engineering</h2>
          <h2 className="track-phnum">+91 94484 16732</h2>
        </div>
        <div className="contact-card">
          <h2 className="track-num">Track 2</h2>
          <h2 className='track-head'>Dr. Aparanji V M</h2>
          <h2 className="track-desig">Assistant Professor</h2>
          <h2 className="track-dept"> Electronics and Communication Engineering</h2>
          <h2 className="track-phnum">+91 87480 41234</h2>
        </div>
        <div className="contact-card">
          <h2 className="track-num">Track 3</h2>
          <h2 className='track-head'>Dr. Mallikarjun B C</h2>
          <h2 className="track-desig">Associate Professor</h2>
          <h2 className="track-dept"> Electronics and Telecommunication Engineering</h2>
          <h2 className="track-phnum">+91 99806 80753</h2>
        </div>
        <div className="contact-card">
          <h2 className="track-num">Track 4</h2>
          <h2 className='track-head'>Mrs. Rajeshwari B S</h2>
          <h2 className="track-desig">Assistant Professor</h2>
          <h2 className="track-dept"> Electronics and Instrumentation Engineering</h2>
          <h2 className="track-phnum">+91 94492 38899</h2>
        </div>
        <div className="contact-card">
          <h2 className="track-num">Track 5</h2>
          <h2 className='track-head'>Mrs. Rajeshwari B S</h2>
          <h2 className="track-desig">Assistant Professor</h2>
          <h2 className="track-dept"> Electronics and Instrumentation Engineering</h2>
          <h2 className="track-phnum">+91 94492 38899</h2>
        </div>
      </div>
    </div>
  )
}
export default Contacts;