import React from 'react';
import '../style/AdvocateClients.css';
import AdvocateSidebar from './AdvocateSidebar';

function AdvocateClients({ userAdvocate }) {
  console.log(userAdvocate);
  const clientList = userAdvocate.disputes.map((dispute) => {
    return (
      <>
        <li>{dispute.client_name}</li>
      </>
    );
  });
  return (
    <div className='advocate-main-container'>
      <AdvocateSidebar />
      <div className='advocate-details-dash-section'>
        <h1>Your Clients</h1>
        <br />
        <br />
        <ol>{clientList}</ol>
      </div>
    </div>
  );
}

export default AdvocateClients;
