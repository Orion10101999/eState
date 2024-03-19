import React from 'react'
import { Link } from 'react-router-dom';
const SignIn = () => {
  return (
    <div>
      <p>If you don't have account ?</p>
      <Link to='/sign-up' className='btn btn-primary'>
      <button>Sign Up</button>
      </Link>
    </div>
  )
}

export default SignIn