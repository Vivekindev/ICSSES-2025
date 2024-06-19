import React from 'react'
import "../registrationInfo/registrationInfo.css"
function RegistrationInfo() {
  return (
    <div className="detailsShower">
      <h1 className="reg-info-heading">
        <span className="reg-info-part">Registration Fee for Participants</span>
      </h1>
      <table className="reg-table-details">
        <tr>
          <th></th>
          <th></th>
          <th className='col-head'>IEEE Member</th>
          <th className='col-head'>Non IEEE Member</th>
        </tr>
        <tr>
          <td className='col-head two-row-col-headless text-head'>Indian Authors</td>
          <td>Students & Research Scholars</td>
          <td>Rs. 4000</td>
          <td>Rs. 6000</td>
        </tr>
        <tr>
          <td className='two-row-col-headless'></td>
          <td>Faculty</td>
          <td>Rs. 5000</td>
          <td>Rs. 7500</td>
        </tr>
        <tr>
          <td className='two-row-col-2'></td>
          <td>Industry Participants</td>
          <td>Rs. 6500</td>
          <td>Rs. 9500</td>
        </tr>
        <tr>
          <td className='col-head two-row-col-1 text-head f-aurth'>Foreign Authors</td>
          <td className='f-aurth-2'></td>
          <td>80 USD</td>
          <td>120 USD</td>
        </tr>
        <tr>
          <td className='col-head two-row-col-1 text-head'>Attendees</td>
          <td className='last-row'>Rs. 2000</td>
        </tr>
      </table>
    </div>
  )
}
export default RegistrationInfo;