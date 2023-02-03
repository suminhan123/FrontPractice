import React from 'react';
import './Navbar.css';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import CallIcon from '@mui/icons-material/Call';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbarOptions">
                <div className="navbarOption">
                    <PersonSearchIcon />
                    <h5>찾습니다</h5>
                </div>
                <div className="navbarOption">
                    <CallIcon />
                    <h5>제보합니다</h5>
                </div>
                <div className="navbarOption">
                    <AccountCircleIcon />
                    <h5>마이 페이지</h5>
                </div>
                <div className="navbarOption">
                    <LogoutIcon />
                    <h5>로그아웃</h5>
                </div>
            </div>
        </div>
    );
}