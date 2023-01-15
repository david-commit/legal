import React, { useState, useEffect } from 'react';
import '../style/ClientCreateDispute.css';
import ClientSidebar from './ClientSidebar';

function ClientCreateDispute({ userClient }) {
  const [field, setField] = useState('');
  const [allFields, setAllFields] = useState([]);
  const [singleField, setSingleField] = useState([]);
  const [selectedAdvocate, setSelectedAdvocate] = useState('');
  const [disputeInfo, setDisputeInfo] = useState('');
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    fetch('/api/dispute_categories')
      .then((r) => r.json())
      .then((d) => setAllFields(d));
  }, []);

  const hello = useEffect(() => {
    if (field) {
      fetch(`/api/dispute_categories/${field}`)
        .then((r) => r.json())
        .then((d) => setSingleField(d));
    }
    // https://stackoverflow.com/questions/70960769/react-make-a-second-api-call-based-on-a-state-set-by-a-first-api-call
  }, [field]);

  const handleDisputeSubmit = (e) => {
    e.preventDefault();
    fetch(`/api/disputes/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_id: userClient.id,
        advocate_id: selectedAdvocate,
        dispute_category_id: singleField.id,
        dispute_info: disputeInfo,
      }),
    }).then((response) => {
      if (response.ok) {
        response.json().then((r) => alert('Dispute created successfully'));
      } else {
        response.json().then((err) => setErrors(err.errors));
      }
    });
    setSelectedAdvocate('');
    setDisputeInfo('');
    window.location.reload();
  };

  return (
    <div className='client-create-disputes-main-container'>
      <ClientSidebar />
      <div className='client-create-disputes-details-dash-section'>
        <h1>Create A Dispute</h1>
        <p>Start your case with an Advocate of your choice</p>
        <br />
        <br />
        <form id='dispute-form' onSubmit={handleDisputeSubmit}>
          <label>Select dispute category</label>
          <br />
          <select onChange={(e) => setField(e.target.value) && hello()}>
            <option hidden>Select Field</option>
            {allFields &&
              allFields.map((f) => {
                return (
                  <option value={f.id} key={f.id}>
                    {f.category_name}
                  </option>
                );
              })}
          </select>
          <br />
          <br />
          {field ? (
            <>
              <label htmlFor=''>Select Advocate</label>
              <br />
              <select onChange={(e) => setSelectedAdvocate(e.target.value)}>
                <option hidden>Select Advocate</option>
                {Array.isArray(singleField.advocates) &&
                  singleField.advocates.map((f) => {
                    return (
                      <>
                        {console.log(f.name)}
                        <option value={f.id} key={f.id}>
                          {f.name}
                        </option>
                      </>
                    );
                  })}
              </select>
            </>
          ) : (
            <em>Select Field</em>
          )}
          <br />
          <br />
          <label>
            Provide information on the case details <br />
            <br />
            <textarea
              id='case-details'
              value={disputeInfo}
              onChange={(e) => setDisputeInfo(e.target.value)}
            ></textarea>
          </label>
          <br />
          <br />
          <button type='submit' id='dispute-submit'>
            Submit
          </button>
        </form>
        <br />
        {Array.isArray(errors) &&
          errors.map((error) => {
            return (
              <>
                <li style={{ color: 'red', padding: '3px 0' }}>{error}</li>
              </>
            );
          })}
      </div>
    </div>
  );
}

export default ClientCreateDispute;
