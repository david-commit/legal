import React, { useEffect } from 'react';
import { useState } from 'react';
import "../style/AdvocateSignup.css"

function AdvocateSignUp({ setUserAdvocate }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [field, setField] = useState('');
  const [experience, setExperience] = useState(0);
  const [pin, setPin] = useState(0);
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [selectedAdvocate, setSelectedAdvocate] = useState("")

  const [allFields, setAllFields] = useState([]);
  const [singleField, setSingleField] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(field);
  console.log(singleField);

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

  function handleAdvocateSignup(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch('/api/advocates/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
        password_confirmation: cPassword,
        phone,
        dispute_category_id: field,
        years_of_practice: experience,
        pin_number: pin,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => setUserAdvocate(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div className='advocate-signup-container'>
      <form onSubmit={handleAdvocateSignup} className='advocate-signup-form'>
        <br />
        <br />
        <h1>Advocate SignUp</h1>
        <br />
        <label htmlFor='name'>Name</label>
        <br />
        <input
          type='text'
          name='name'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label>Email</label>
        <br />
        <input
          type='email'
          name='email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <label>Phone</label>
        <br />
        <input
          type='tel'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <br />
        <label>Field of Specialization</label>
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

        {/* <select name='' id=''>
          <optgroup label='group'>
            <option value=''>sec</option>
            <option value=''>sth</option>
            <option value=''>seff</option>
          </optgroup>
        </select> */}

        {/* {field ? (
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
        )} */}

        {/* {field ? (
          <select onChange={(e) => setSingleField(e.target.value)}>
            <option hidden>Select Advocate</option>
            {Array.isArray(singleField) &&
              singleField.map((f) => {
                return (
                  <option value={f.id} key={f.id}>
                    {f.advocates.map((advocate) => {
                      return(
                        console.log(advocate.name)
                      )
                    })}
                  </option>
                );
              })}
          </select>
        ) : (
          <em>Select Field</em>
        )} */}

        <label>Years of Practice</label>
        <br />
        <input
          type='number'
          min='3'
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
        <br />
        <br />
        <label>Pin Number</label>
        <br />
        <input
          type='number'
          value={pin}
          onChange={(e) => setPin(e.target.value)}
        />
        <br />
        <br />
        <label>Password</label>
        <br />
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <label>Confirm Password</label>
        <br />
        <input
          type='password'
          value={cPassword}
          onChange={(e) => setCPassword(e.target.value)}
        />
        <br />
        <br />
        <button type='submit'>{isLoading ? 'Loading..' : 'Sign Up'}</button>
      </form>
      {errors && errors.map((err) => <li key={err}>{err}</li>)}
      <br />
      <br /> <br />
      <br />
    </div>
  );
}

export default AdvocateSignUp;
