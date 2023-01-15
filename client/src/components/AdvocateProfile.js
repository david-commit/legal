import React from 'react';
import '../style/AdvocateProfile.css';
import AdvocateSidebar from './AdvocateSidebar';

function AdvocateProfile({ userAdvocate }) {
  return (
    <div className='advocate-main-container'>
      <AdvocateSidebar />
      <div className='advocate-details-dash-section'>
        <h1>Hi {userAdvocate.name},</h1>
        <br />
        <br />
        <div className='advocate-details-section'>
          <p className='advocate-details-title'>
            <span>Phone:</span> +254 {userAdvocate.phone}
          </p>
          <p className='advocate-details-title'>
            <span>Email:</span> {userAdvocate.email}
          </p>
          <p className='advocate-details-title'>
            <span>Years of Practice:</span> {userAdvocate.years_of_practice}
          </p>
          <p className='advocate-details-title'>
            <span>Pin Number:</span> {userAdvocate.pin_number}
          </p>
          <p className='advocate-details-title'>
            <span>Active disputes:</span> {userAdvocate.disputes.length}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdvocateProfile;
