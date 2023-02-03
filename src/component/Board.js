import React from "react";
import './Board.css';
import Navbar from "./Navbar";
import Feed from './Feed';
import Header from "./Header";

export default function Board() {
    return (
        <div className="board">
            <Header />
            <div className="boardContent">
                <Navbar />
                <Feed />
            </div>
            
        </div>
    );
}