import React from "react";
import Header from "./Header";
import './Mypage.css';
import Userbar from "./Userbar";
import Userinfo from "./Userinfo";

export default function Mypage(){
    return (
        <div className="myPage">
            <Header />
            <div className="myPageContent">
                <Userbar />
                <Userinfo />
            </div>
        </div>
    );
}