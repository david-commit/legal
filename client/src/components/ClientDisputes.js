import React, { useEffect } from 'react'
import "../style/ClientDisputes.css"
import ClientSidebar from './ClientSidebar';

function ClientDisputes({ userClient }) {

  return (
    <div className='client-disputes-main-container'>
      <ClientSidebar />
      <div className='client-disputes-details-dash-section'>
        <h1>Active Disputes</h1>
        <p>See your ongoing dispute details below</p>
        <br />
        <br />
        <table>
          <tbody>
            <tr>
              <th>SNo.</th>
              <th>Advocate  Name</th>
              <th>Dispute Category</th>
              <th>Dispute Description</th>
              <th>Dispute Info</th>
              <th>Created</th>
            </tr>
            {userClient.disputes.length > 0 ? (
              userClient.disputes.map((dispute, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{dispute.advocate_name} </td>
                    <td>{dispute.dispute_category_name}</td>
                    <td id='dispute-info'>{dispute.dispute_description}</td>
                    <td id='dispute-info'>{dispute.dispute_info}</td>
                    <td>{dispute.created}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={6} id='empty'>
                  No Active disputes
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ClientDisputes