import React from 'react'

const Navbar = () => {

  const navOptions = <>
  <a href="#home" className='hover:text-[#ff3232]  px-3'>Home</a>
  <a href="#about" className='hover:text-[#ff3232] px-3'>About Me</a>
  <a href="#service" className='hover:text-[#ff3232] px-3'>Services</a>
  <a href="#project" className='hover:text-[#ff3232] px-3'>Projects</a>
  <a href="#contact" className='hover:text-[#ff3232] px-3'>Contact</a>
  </>
  return (
 



<div className="navbar bg-[#000000] text-[#b0b0b0]">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content rounded-box z-[1] mt-5 w-52 p-2 shadow  bg-[#000000] text-[#b0b0b0]">
        {navOptions}
      </ul>
    </div>
    
    <a className="btn btn-ghost text-xl  hover:text-[#ff3232] font-bold">SAGAR</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal ">
    {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
  <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
    transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect Me</button>
  </div>
</div>
    
  )
}

export default Navbar