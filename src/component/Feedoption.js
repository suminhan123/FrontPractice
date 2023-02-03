import React, { useState } from "react";
import './Feedoption.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Search } from "@mui/icons-material";
import ModeIcon from '@mui/icons-material/Mode';
import Modal from 'react-modal';

export  default function Feedoption() {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className="feedOption">
            <div className='feedFilter'>
                <div className="feedOrder">
                    <ExpandMoreIcon />
                    <h5>최근등록순</h5>
                </div>
                
                <div className='feedSearch'>
                    <input className='feedInput' type="text" placeholder="search"/>
                    <Search />
                </div>
            </div>
            
            <div className="feedCreate">
                <button onClick={() => setOpenModal(true)}><ModeIcon />글 쓰기</button>
                    {/*<Modal isOpen={openModal} onRequestClose={() => setOpenModal(false)}
                        style={{
                            overlay: {
                                width: 700,
                                height: 600,
                                zIndex: '1000',
                                top:'50%',
                                left:'50%',
                                marginTop: '-300px',
                                marginLeft:'-350px',
                            }
                        }}>

                    </Modal>*/}
            </div>
        </div>
    );
}