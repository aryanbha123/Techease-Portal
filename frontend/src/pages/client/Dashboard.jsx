import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { Article, Home, Menu, MenuBook, Person, Quiz, ShoppingCart } from "@mui/icons-material";
import CustomMiniDrawer from "../../components/shared/Drawer";


export default function Dashboard({ WrapperComponent }) {
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
            <section className="h-[70px] relative">
                <nav className="bg-[#000000] text-white flex items-center px-6 md:px-5 justify-between w-full top-0 h-[70px] fixed shadow-md z-50">
                    {/* Menu Button */}
                    <IconButton color="inherit" onClick={() => setOpen(!open)} aria-label="Open Menu">
                        <Menu color="inherit" />
                    </IconButton>
                </nav>
            </section>

            {/* Mini Drawer */}
            <CustomMiniDrawer menuItems={menuItems} open={open} setOpen={setOpen} />
            <main className="pl-[70px] font-['Poppins'] text-lg py-5">
                {WrapperComponent}
            </main>
        </>
    );
}
