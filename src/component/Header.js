import React from "react";
import './Header.css';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from "@mui/material";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

export default function Header() {
    return (
        <div className="header">
            <div className="headerLogo">
                <HomeIcon />
            </div>
            <div className="headerOptions">
                <NotificationsActiveIcon className="headerIcon"/>
                <Avatar />
                <div className="headerSearch">
                    <input className="headerSearchInput" type="text" placeholder="Search" />
                    <SearchIcon className="headerSearchIcon"/>
                </div>
                <h5>username 님</h5>
            </div>
        </div>
    );
}