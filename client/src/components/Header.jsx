import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-slate-600'>
      <div className='flex justify-between items-center mx-auto p-4'>
        <Link to='/'>
        <h1 className='font-bold'>
          <span className='text-slate-800'>Sahand</span>
          <span className='text-slate-1000'>Estate</span>
        </h1>
        </Link>
      <div>
      <form className='bg-slate-200 rounded p-2'>
        <input placeholder='Search...' className='bg-transparent w-34 sm:w-64 focus:outline-none'/>
      </form>
      </div>
<div>
  <ul className='flex gap-5'>
    <Link to='/'>
    <li>Home</li>
    </Link>
    <Link to='/about'>
    <li>About</li>
    </Link>
    <Link to='/sign-in'>
    <li>SignIn</li>
    </Link>
  </ul>
</div>

      </div>
    </header>
  )
}

export default Header