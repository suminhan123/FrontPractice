import React from "react";
import './Userinfo.css';
import Userpost from "./Userpost";
import AssignmentIcon from '@mui/icons-material/Assignment';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import StarIcon from '@mui/icons-material/Star';

export default function Userinfo() {
    return (
        <div className="userInfo">
            <div className="userinfo">
                <div className='userinfologo'>
                    <AssignmentIcon />
                    <h3>내가 쓴 글</h3>
                </div>
                <div className="userposts">
                    <Userpost />
                    <Userpost />
                </div>
            </div>

            <div className="userinfo">
                <div className='userinfologo'>
                    <ChatBubbleIcon />
                    <h3>댓글 단 글</h3>
                </div>
                <div className="userposts">
                    <Userpost />
                    <Userpost />
                </div>
            </div>

            <div className="userinfo">
                <div className='userinfologo'>
                    <StarIcon />
                    <h3>스크랩</h3>
                </div>
                <div className="userposts">
                    <Userpost />
                    <Userpost />
                </div>
            </div>


            
            
        </div>
    );
}