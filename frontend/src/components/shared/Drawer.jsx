import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemText, IconButton } from "@mui/material";
import { Home, MenuBook, ShoppingCart, Quiz, Logout, PowerSettingsNew } from "@mui/icons-material";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUser } from "../../store/api/UserApi";
import { logout } from '../../store/reducers/userSlice'

export default function CustomMiniDrawer({ open, setOpen, menuItems }) {
    const [isHovered, setIsHovered] = useState(false);
    const dispacth = useDispatch();


    const handleLogout = async () => {
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/auth/logout`, {}, { withCredentials: true });
            dispacth(logout());
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: isHovered ? 240 : 60,
       
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    marginTop: "89px",
                    borderRadius:"10px",
                    marginBottom: "15px",
                    marginLeft:"20px",
                    width: isHovered ? 240 : 60,
                    transition: 'width 0.3s',
                    backgroundColor: '#fff',
                    borderRight: '1px solid #e0e0e0',
                },
            }}
            open
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <List sx={{
                margin: "0px 0 0 0"
            }} >
                {menuItems.map((item, index) => (
                    <Link key={index} to={item.to} >
                        <ListItem
                            className="cursor-pointer"
                            sx={{ cursor: "pointer" }}
                         
                            key={index}
                            onClick={() => console.log(`Navigating to ${item.text}`)}
                        >
                            <span className="" >
                                <IconButton >
                                    {item.icon}
                                </IconButton>
                            </span>
                            {isHovered && (
                                <span className="text-nowrap  text-md pl-5" >{item.text}</span>
                            )}
                        </ListItem>
                    </Link>
                ))}
            </List>

            {/* Logout Button */}
            <ListItem sx={{ cursor: "pointer" }}  onClick={handleLogout}>
                <IconButton>
                    <PowerSettingsNew />
                </IconButton>
                {isHovered && <span className="text-sm pl-5" >Logout</span>}
            </ListItem>
        </Drawer>
    );
}
