import React, { useState } from 'react'
import CustomMiniDrawer from '../../components/shared/Drawer';
import { Article, MenuBook, Person, Quiz  , Home} from '@mui/icons-material';

export default function Dashboard({ wrrapedComponent }) {
    const [open, setOpen] = useState(true);
    const menuItems = [
        { to: '/admin/', text: "Home", icon: <Home /> },
        { to: '/admin/course', text: "Courses", icon: <MenuBook /> },
        // { to: '/admin/purchases', text: "", icon: <ShoppingCart /> },
        { to: '/admin/manage/quiz', text: "Quizes", icon: <Quiz /> },
        { to: '/admin/manage/results', text: "Results", icon: <Article /> },
        { to: '/admin/manage/users', text: "Manage Users", icon: <Person /> },
    ];
    return (
        <>
            <CustomMiniDrawer open={open} setOpen={setOpen} menuItems={menuItems} />
            {wrrapedComponent}
        </>
    )
}
