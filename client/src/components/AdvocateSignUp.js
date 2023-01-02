import React from 'react'
import { useState } from 'react'

function AdvocateSignUp({ setUserAdvocate }) {
 const [name, setName] = useState("")
  return(
   <>
   <form>
    <br /><br /><br />
    <h1>Advocate SignUp</h1>
    <label htmlFor="name">Name</label><br />
    <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
   </form>
   </>
  )
}

export default AdvocateSignUp