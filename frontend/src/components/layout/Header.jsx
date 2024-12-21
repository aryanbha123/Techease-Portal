import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, IconButton } from '@mui/material';
import { Menu, Close } from '@mui/icons-material';

export default function Header() {
  // State to handle the mobile navigation visibility
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const navigate = useNavigate();
  // Function to toggle the mobile navigation
  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  // Function to close the mobile navigation
  const closeMobileNav = () => {
    setMobileNavOpen(false);
  };


  const handelLogin = () => {
    navigate('/login');
  }
  const handelSignup = () => {
    navigate('/signup');
  }

  return (
    <header className="shadow-sm h-[75px] relative w-full bg-white py-1 lg:py-3 text-[#1d1d1d] font-[Lato]">
      <nav className="max-w-[100vw] flex w-full items-center fixed h-[75px] bg-white top-0 shadow-md z-[2000] px-7 left-0 md:w-full justify-between">
        <div className="flex gap-4 items-center">
          {/* Logo Image */}
          <img className="h-10 lg:h-12" src="/assets/logo.png" alt="" />
        </div>

        {/* Large Screen Nav Items */}
        <ul className="xl:flex hidden items-center gap-7">
          <Link to={'/'} >Home</Link>
          <Link>About</Link>
          <Link>Education</Link>
          <Link>Plans & Pricing</Link>
          <Link>Documentation</Link>
          <Link>Contact Us</Link>
          <div className="flex gap-1">
            <Button onClick={handelLogin} variant="outlined" color="black">
              Login
            </Button>
            <Button
              onClick={handelSignup}
              variant="contained"
              sx={{
                backgroundColor: '#1d1d1d',
                color: '#fff',
              }}
            >
              Sign up
            </Button>
          </div>
        </ul>

        {/* Small Screen Hamburger Button */}
        <span className="lg:hidden flex">
          <IconButton onClick={toggleMobileNav}>
            <Menu />
          </IconButton>
        </span>
      </nav>

      {/* NAV 2 */}
      <div className="bg-black w-full flex justify-center">

      </div>

      {/* Mobile Navigation */}
      {/* {isMobileNavOpen && ( */}
      <>
        {/* Overlay for the mobile nav */}
        <div
          className={`${isMobileNavOpen ? '  ' : 'hidden z-0'}z-[2002] bg-black bg-opacity-60 fixed top-0 left-0 w-full h-screen `}
          onClick={closeMobileNav}
        ></div>

        {/* Mobile navigation panel */}
        <section className={`${isMobileNavOpen ? 'translate-x-0 ' : '-translate-x-full '} z-[2002]   duration-300 transition-all bg-[#ffffff] py-8 px-6 shadow-lg w-[250px] h-screen fixed top-0 left-0 rounded-tr-[20px] rounded-br-[20px]`}>
          {/* Company Logo */}
          <div className="text-center mb-8">
            <div className="text-3xl font-bold text-[#333]">Techease</div>
            <div className="text-sm text-[#666]">Empowering your tech journey</div>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col gap-6">
            <li>
              <Link className="text-lg font-medium text-[#333] py-3 px-5 rounded-lg hover:bg-[#F0F0F0] hover:text-[#000] transition duration-300 ease-in-out">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-lg font-medium text-[#333] py-3 px-5 rounded-lg hover:bg-[#F0F0F0] hover:text-[#000] transition duration-300 ease-in-out">
                About
              </Link>
            </li>
            <li>
              <Link className="text-lg font-medium text-[#333] py-3 px-5 rounded-lg hover:bg-[#F0F0F0] hover:text-[#000] transition duration-300 ease-in-out">
                Education
              </Link>
            </li>
            <li>
              <Link className="text-lg font-medium text-[#333] py-3 px-5 rounded-lg hover:bg-[#F0F0F0] hover:text-[#000] transition duration-300 ease-in-out">
                Plans & Pricing
              </Link>
            </li>
            <li>
              <Link className="text-lg font-medium text-[#333] py-3 px-5 rounded-lg hover:bg-[#F0F0F0] hover:text-[#000] transition duration-300 ease-in-out">
                Documentation
              </Link>
            </li>
            <li>
              <Link className="text-lg font-medium text-[#333] py-3 px-5 rounded-lg hover:bg-[#F0F0F0] hover:text-[#000] transition duration-300 ease-in-out">
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Action Buttons */}
          <div className="flex flex-col gap-6 mt-10">
            <Button
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: '#2c3e50',
                color: '#fff',
                padding: '12px 18px',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  backgroundColor: '#34495e',
                },
              }}
              onClick={handelLogin}
            >
              Login
            </Button>

            <Button
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: '#2980b9',
                color: '#fff',
                padding: '12px 18px',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  backgroundColor: '#3498db',
                },
              }}
              onClick={handelSignup}
            >
              SignUp
            </Button>
          </div>
        </section>
      </>
      {/* )} */}
    </header>
  );
}
