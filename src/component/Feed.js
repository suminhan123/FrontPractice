import React from "react";
import './Feed.css';
import Feedoption from "./Feedoption";
import Post from './Post';
import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';

export default function Feed() {
    return (
        <div className='feed'>
            <div className='feedTitle'>
                <AddToHomeScreenIcon />
                <h3>찾습니다</h3>
            </div>
            <div className='feedOptions'>
                <Feedoption />
                <div className='feedInfo'>
                    <Post />
                </div>
            </div>
        </div>
    );
}