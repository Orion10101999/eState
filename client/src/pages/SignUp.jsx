import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const SignUp = () => {
  const [formData ,setFormData] = useState({})
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id] : e.target.value
    })
  }
  const submitHandler = async (e) =>{
    e.preventDefault()
    await axios.post('/api/auth/signup',formData)
    .then((res)=>{
      console.log(res);
    }).catch((error)=>{
      console.log(error);
    })
  }
  return (
    <div> <h1 className='text-center m-5 text-xl font-bold'>
      Sign Up </h1>
      <form onSubmit={submitHandler} className='flex flex-col gap-4 m-4'>
        <input onChange={handleChange} id='username' placeholder='username' className='rounded-lg border p-3' />
        <input onChange={handleChange} id='email' placeholder='email' className='rounded-lg border p-3' />
        <input onChange={handleChange} id='password' placeholder='password' className='rounded-lg border p-3' />
        <button className='bg-slate-700 text-white p-3 '>Sign Up</button>
      </form>
      <div className='flex m-5'>
        <p>Having an account ? </p>
        <Link to={"/sign-in"}>
          <button type='submit' className='text-bold text-blue-600 mx-5'>Sign In</button>
        </Link>
      </div>
    </div>
  )
}

export default SignUp