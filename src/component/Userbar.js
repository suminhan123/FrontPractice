import React from "react";
import './Userbar.css';
import SettingsIcon from '@mui/icons-material/Settings';
import ForumIcon from '@mui/icons-material/Forum';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import StarIcon from '@mui/icons-material/Star';

export default function Userbar() {
    return (
        <div className="userbar">
            <div className="userbarprofile">
                <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973461__340.png' alt="" />
                <div className="userbarsetting">
                    <SettingsIcon />
                    <h5>프로필 수정</h5>
                </div>
                <h3>username 님</h3>
            </div>
            <div className="userbaricons">
                <div className='userbaricon'>
                    <ForumIcon />
                    <h5>쪽지 수</h5>
                </div>
                <div className="userbarcount">
                    <h5>5건</h5>
                </div>
            </div>

            <div className="userbaricons">
                <div className='userbaricon'>
                    <AssignmentIcon />
                    <h5>내가 쓴 글</h5>
                </div>
                <div className="userbarcount">
                    <h5>5건</h5>
                </div>
            </div>

            <div className="userbaricons">
                <div className='userbaricon'>
                    <ChatBubbleIcon />
                    <h5>댓글 단 글</h5>
                </div>
                <div className="userbarcount">
                    <h5>5건</h5>
                </div>
            </div>

            <div className="userbaricons">
                <div className='userbaricon'>
                    <StarIcon />
                    <h5>스크랩</h5>
                </div>
                <div className="userbarcount">
                    <h5>5건</h5>
                </div>
            </div>
        </div>
    );
}