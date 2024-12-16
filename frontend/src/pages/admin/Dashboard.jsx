import React, { useEffect, useState } from 'react';
import CustomMiniDrawer from '../../components/shared/Drawer';
import { Article, MenuBook, Person, Quiz, Home, Settings } from '@mui/icons-material';
import { AppBar, Toolbar, Box, CssBaseline, IconButton, Menu, MenuItem, Avatar } from '@mui/material';
import { useSelector } from 'react-redux';

export default function Dashboard({ children }) {
    const [open, setOpen] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null); // State for Avatar Menu
    const user = useSelector((s)=> s.auth.user);
    useEffect(() => {
        document.title = `${user.name} Dashboard`

    } ,[])
    // Menu items for the drawer
    const menuItems = [
        { to: '/admin/', text: "Home", icon: <Home color='inheri' /> },
        { to: '/admin/manage/course', text: "Courses", icon: <MenuBook  color='inherit' /> },
        { to: '/admin/manage/quiz', text: "Quizzes", icon: <Quiz  color='inherit' /> },
        { to: '/admin/manage/results', text: "Results", icon: <Article  color='inherit' /> },
        { to: '/admin/manage/users', text: "Users", icon: <Person  color='inherit' /> },
        { to: '/admin/settings', text: "Settings", icon: <Settings  color='inherit' /> },
    ];

    // Handlers for Avatar Menu
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {/* Apply baseline styles */}
            <CssBaseline />

            {/* Main Layout */}
                {/* AppBar */}
                <section className="h-[70px] relative px-5 py-2 top-0  " style={{zIndex:"2000"}}>
                    <nav className="bg-[#fff] rounded-[15px] text-white flex items-center px-6 md:px-5 justify-between w-[calc(100%-40px)]  h-[70px] fixed shadow-md z-50">
                        {/* Menu Button */}
                        <img src="/assets/logo.png" className='h-10' alt="" />
                    </nav>
                </section>


                {/* Drawer */}
                <CustomMiniDrawer open={open} setOpen={setOpen} menuItems={menuItems} />
                <main className="pl-[90px] pr-5 font-['Poppins'] text-lg py-5">
                {children}
            </main>
            
        </>
    );
}
