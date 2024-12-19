import React from 'react'
import { Link } from 'react-router-dom'
import { Button, IconButton } from '@mui/material'
import { Label, Search, Menu, Close, ArrowRight, Lock } from '@mui/icons-material'
export default function Header() {
  return (
    <header className='shadow-xl h-[85px] relative w-full bg-white py-1 lg:py-3 text-[#1d1d1d] font-[Lato]' >
      <nav className='max-w-[100vw] flex  w-full  items-center fixed h-[85px] bg-white top-0 shadow-xl z-[2000] px-7 left-0 md:w-full  justify-between' >
        <div className='flex gap-4 items-center' >
          {/* Logo Image - uploaded to /frontend/public/assets/ */}
          <img className='h-12' src="/assets/logo.png" alt="" />
          {/* Search Container */}
          {/* <span className='lg:flex hidden relative items-center w-72 h-13'>
            <input type="text" className='border-black border-[1px] w-full px-5 py-2 rounded-3xl' placeholder='Search' name="" id="" />
            <Search onClick={()=> {alert('Search Disabled')}} className='absolute cursor-pointer right-5' />
          </span> */}

        </div>
        {/* Large Screen Nav Items */}
        <ul className='xl:flex hidden items-center gap-7' >
          <Link>About</Link>
          <Link>Education</Link>
          <Link>Plans & Pricing</Link>
          <Link>Documentation</Link>
          <Link>Contact Us</Link>
          <div className='flex gap-1' >
            <Button variant='outlined' color='black' >Login</Button>
            <Button variant='contained' sx={{
              backgroundColor: '#1d1d1d',
              color: '#fff',
            }} >Sign up</Button>
          </div>

          <button></button>
        </ul>
        {/* Small Screen Hamburger Button */}
        <span className='lg:hidden flex' >
          <IconButton>
            <Menu />
          </IconButton>
        </span>
      </nav>

      {/* Mobile Navigation */}
      {/* Mobile Navigation */}
      <nav>
        {/* Overlay for the mobile nav */}
        <div class="bg-black bg-opacity-60 fixed top-0 left-0 w-full h-screen z-[2001]" id="mobile-nav-overlay"></div>

        {/* Mobile navigation panel */}
        <section class="bg-[#ffffff] py-8 px-6 shadow-lg w-[250px] h-screen fixed top-0 left-0 z-[2002] rounded-tr-[20px] rounded-br-[20px]" id="mobile-nav">

          {/* Company Logo */}
          <div class="text-center mb-8">
            <div class="text-3xl font-bold text-[#333]">Techease</div>
            <div class="text-sm text-[#666]">Empowering your tech journey</div>
          </div>

          {/* Navigation Links */}
          <ul class="flex flex-col gap-6">
            <li>
              <Link class="text-lg font-medium text-[#333] py-3 px-5 rounded-lg hover:bg-[#F0F0F0] hover:text-[#000] transition duration-300 ease-in-out">
                About
              </Link>
            </li>
            <li>
              <Link class="text-lg font-medium text-[#333] py-3 px-5 rounded-lg hover:bg-[#F0F0F0] hover:text-[#000] transition duration-300 ease-in-out">
                Education
              </Link>
            </li>
            <li>
              <Link class="text-lg font-medium text-[#333] py-3 px-5 rounded-lg hover:bg-[#F0F0F0] hover:text-[#000] transition duration-300 ease-in-out">
                Contact
              </Link>
            </li>
            <li>
              <Link class="text-lg font-medium text-[#333] py-3 px-5 rounded-lg hover:bg-[#F0F0F0] hover:text-[#000] transition duration-300 ease-in-out">
                FAQs
              </Link>
            </li>
            <li>
              <Link class="text-lg font-medium text-[#333] py-3 px-5 rounded-lg hover:bg-[#F0F0F0] hover:text-[#000] transition duration-300 ease-in-out">
                Services
              </Link>
            </li>
          </ul>

          {/* Action Buttons */}
          <div class="flex flex-col gap-6 mt-10">
            <Button variant="contained" color="primary" sx={{
              backgroundColor: '#2c3e50',
              color: '#fff',
              padding: '12px 18px',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              '&:hover': {
                backgroundColor: '#34495e'
              }
            }}>Login</Button>

            <Button variant="contained" color="primary" sx={{
              backgroundColor: '#2980b9',
              color: '#fff',
              padding: '12px 18px',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              '&:hover': {
                backgroundColor: '#3498db'
              }
            }}>SignUp</Button>
          </div>
        </section>
      </nav>



    </header>
  )
}
