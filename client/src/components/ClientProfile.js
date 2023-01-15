import React from 'react';
import '../style/ClientProfile.css';
import ClientSidebar from './ClientSidebar';

function ClientProfile({ userClient }) {
 
  return (
    <div className='client-profile-main-container'>
      <ClientSidebar />
      <div className='client-profile-details-dash-section'>
        <h1>Hi {userClient.name}, </h1>
        <p>See your personal details below</p>
        <br />
        <br />
        <div className='advocate-details-section'>
          <p className='advocate-details-title'>
            <span>Email:</span> {userClient.email}
          </p>
          <p className='advocate-details-title'>
            <span>Phone:</span> +254 {userClient.phone}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ClientProfile;
