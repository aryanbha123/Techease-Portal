import React from 'react'
import { Link } from 'react-router-dom'
import { Button, IconButton } from '@mui/material'
import { Label, Search  ,Menu} from '@mui/icons-material'
export default function Header() {
  return (
    <header className='shadow-xl h-[85px] relative w-full bg-white py-3 text-[#1d1d1d] font-[Lato]' >
      <nav className='max-w-[100vw] flex  w-full  items-center fixed h-[85px] bg-white top-0 shadow-xl z-[2000] px-7 left-0 md:w-full  justify-between' >
        <div className='flex gap-4 items-center' >
          <img className='h-12' src="/assets/logo.png" alt="" />
          <span className='lg:flex hidden relative items-center w-72 h-13'>
            <input type="text" className='border-black border-[1px] w-full px-5 py-2 rounded-3xl' placeholder='Search' name="" id="" />
            <Search className='absolute right-5' />
          </span>
          
        </div>
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
        <span className='lg:hidden flex' >
            <IconButton>
              <Menu />
            </IconButton>
          </span>
      </nav>
    </header>
  )
}
