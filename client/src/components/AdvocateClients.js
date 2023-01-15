import React from 'react';
import '../style/AdvocateClients.css';
import AdvocateSidebar from './AdvocateSidebar';

function AdvocateClients({ userAdvocate }) {
  return (
    <div className='advocate-clients-main-container'>
      <AdvocateSidebar />
      <div className='advocate-clients-details-dash-section'>
        <h1>Your Clients</h1>
        <br />
        <table>
          <tbody>
            <tr>
              <th>SNo.</th>
              <th>Name</th>
            </tr>
            {userAdvocate.disputes.length > 0 ? (
              userAdvocate.disputes?.map((dispute, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{dispute.client_name}</td>
                  </tr>
                );
              })
            ) : (
              <h3>You dont have any clients</h3>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdvocateClients;
