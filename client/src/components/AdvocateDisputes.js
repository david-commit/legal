import React from 'react';
import '../style/AdvocateDisputes.css';
import AdvocateSidebar from './AdvocateSidebar';

function AdvocateDisputes({ userAdvocate }) {
  const reload = () => window.location.reload();

  return (
    <div className='advocate-disputes-main-container'>
      <AdvocateSidebar />
      <div className='advocate-disputes-details-dash-section'>
        <h1>Your Disputes</h1>
        <br />
        <table>
          <tbody>
            <tr>
              <th>SNo.</th>
              <th>Client Name</th>
              <th>Dispute Category</th>
              <th>Dispute Info</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            {userAdvocate.disputes.length > 0 ? (
              userAdvocate.disputes.map((dispute, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{dispute.client_name} </td>
                    <td>{dispute.dispute_category_name}</td>
                    <td id='dispute-info'>{dispute.dispute_info}</td>
                    <td>
                      <i class='fa-solid fa-pen-to-square' id='edit'></i>
                    </td>
                    <td>
                      <i
                        class='fa-solid fa-trash'
                        id='delete'
                        onClick={() => {
                          fetch(`/api/disputes/${dispute.id}`, {
                            method: 'DELETE',
                          });
                          reload()
                        }}
                      ></i>
                    </td>
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

export default AdvocateDisputes;
