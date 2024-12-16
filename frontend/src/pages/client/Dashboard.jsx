import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { Article, Home, Menu, MenuBook, Person, Quiz, ShoppingCart } from "@mui/icons-material";
import CustomMiniDrawer from "../../components/shared/Drawer";


export default function Dashboard({ WrapperComponent , children }) {
    const [open, setOpen] = useState(true);  // Initially open
    const menuItems = [
        { to: '/user/', text: "Home", icon: <Home /> },
        { to: '/user/course', text: "Courses", icon: <MenuBook /> },
        { to: '/user/purchases', text: "My Purchases", icon: <ShoppingCart /> },
        { to: '/user/quiz', text: "Quizes", icon: <Quiz /> },
        { to: '/user/results', text: "Results", icon: <Article /> },
        { to: '/user/profile', text: "Profile", icon: <Person /> },
    ];

    return (
        <>
            {/* Navbar */}
            <section className="h-[70px] relative px-5 py-2 top-0  " style={{zIndex:"2000"}}>
                    <nav className="bg-[#fff] rounded-[15px] text-white flex items-center px-6 md:px-5 justify-between w-[calc(100%-40px)]  h-[70px] fixed shadow-md z-50">
                        {/* Menu Button */}
                        <img src="/assets/logo.png" className='h-10' alt="" />
                    </nav>
                </section>

            {/* Mini Drawer */}
            <CustomMiniDrawer menuItems={menuItems} open={open} setOpen={setOpen} />
            <main className="pl-[70px] font-['Poppins'] text-lg py-5">
                {children}
            </main>
        </>
    );
}
