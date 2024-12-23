import React, { useEffect, useState } from 'react'
import {
  ArrowDropDown,
  BarChart,
  Close,
  DarkMode,
  Home,
  Leaderboard,
  LightMode,
  Logout,
  Menu,
  Person,
  Settings
} from '@mui/icons-material'
import { Avatar, Divider, IconButton } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import { dark } from '@mui/material/styles/createPalette'

export default function Dashboard ({ children }) {
  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const toggleMode = () => {
    document.getElementById('root').classList.toggle('dark')
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme === 'dark') {
      document.getElementById('root').classList.add('dark')
      setDarkMode(true)
    }
    setMenuOpen(false)
  }, [])
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return (
    <section className='h-screen  dark:bg-slate-800 bg-[#f5f5f5]'>
      <header className='relative bg-white dark:bg-slate-900 dark:text-[#f1f1f1] text-gray-700 w-full h-[70px]'>
        <nav className='bg-white  dark:bg-slate-900 fixed z-[1001] shadow-lg flex items-center px-6 justify-between w-full top-0 left-0 h-[70px]'>
          <div className='flex gap-3 items-center'>
            <IconButton
              onClick={() => {
                setMenuOpen(!menuOpen)
              }}
              color='inherit'
              aria-label='Toggle menu'
            >
              {menuOpen ? <Close color='inherit' /> : <Menu color='inherit' />}
            </IconButton>
            <h1 className='text-md'>Dashboard</h1>
          </div>
          <div className='flex items-center'>
            <Link to={'/'} className='mr-4'>
              Back to site
            </Link>
            <IconButton onClick={toggleMode} aria-label='Toggle dark mode'>
              {darkMode ? (
                <LightMode sx={{ color: '#F1F1F1' }} />
              ) : (
                <DarkMode color='inherit' />
              )}
            </IconButton>
            <IconButton color='inherit' aria-label='Logout'>
              <Logout color='inherit' />
            </IconButton>
            <Avatar />
          </div>
        </nav>
      </header>
      <UserDashboard darkMode={darkMode} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className='dark:bg-slate-800 p-5 bg-[#f5f5f5]'>{children}</main>
    </section>
  )
}

const UserDashboard = ({ menuOpen, darkMode , setMenuOpen }) => {
  const location = useLocation()

  const isActive = path => location.pathname === path

  const menuItems = [
    {
      label: 'Home',
      to: '/user',
      active: '/user',
      icon: <Home color='inherit' />
    },
    {
      label: 'Profile',
      to: '/user/profile',
      active: '/user/profile',
      icon: <Person color='inherit' />
    },
    {
      label: 'Learning',
      to: '/user/quiz',
      active: '/user/quiz',
      icon: <Leaderboard color='inherit' />
    },
    {
      label: 'Analytics',
      to: '/user/results',
      active: '/user/results',
      icon: <BarChart color='inherit' />
    },
    {
      label: 'Settings',
      to: '/user/settings',
      active: '/user/settings',
      icon: <Settings color='inherit' />
    }
  ]

  return (
    <>
      {menuOpen && (
        <div
          onClick={() => {
            setMenuOpen(false)
          }}
          className='fixed top-[70px] bg-black bg-opacity-55 h-screen w-full'
        ></div>
      )}
      <aside
        className={`flex text-gray-900 dark:text-[#f1f1f1] z-[1000] flex-col fixed dark:bg-slate-800 shadow-2xl bg-[#fff] w-[210px] h-[calc(100vh-70px)] ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-all duration-75 top-[70px]`}
      >
        <ul className='list-none flex flex-col text-lg py-8'>
          {menuItems.map((item, _) => {
            return (
              <>
                <Link
                  key={_}
                  to={item.to}
                  className={`flex ${
                    //   isActive(item.active)
                    //     ? 'dark:bg-slate-900 bg-sky-700 text-[#f1f1f1]'
                    //     : ''
                    ''
                  } rounded-lg text-gray-800 dark:text-[#cfcfcf] cursor-pointer flex gap-1 mx-8 items-center`}
                >
                  <IconButton color='inherit' >
                    <span>{item.icon}</span>
                  </IconButton>
                  <span className='text-base pt-2'>{item.label}</span>
                </Link>
                <Divider sx={{
                    mx: 3,
                    color:"#000",
                    marginTop:1
                }} />
              </>
            )
          })}
        </ul>
      </aside>
    </>
  )
}
