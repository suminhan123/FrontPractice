import React from 'react';
import { useState } from 'react';
import './Login.css';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import axios from 'axios';
import Modal from 'react-modal';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [username, setUsername] = useState('');
    const signIn = e => {
        e.preventDefault();
        const body = {
            email: email,
            password: password,
        };
        axios.post("http://localhost:8080/api/sign-in", body)
        .then((res) => {
            localStorage.setItem("Authorization", res.headers.authorization);
            localStorage.setItem("uid", res.data.id);
            localStorage.setItem('username', res.data.name);
            localStorage.setItem('email', res.data.email);
            let user = {
                uid: res.data.id,
                username: res.data.name,
                email: res.data.email,
            }
            //dispatch(setUser(user));
            window.alert("로그인되었습니다.");
            // 메인 페이지로 이동 => history
        }).catch((error) => {
            console.log(error);
            window.alert('로그인 실패하였습니다.');
        })
    }

    return (
        <div className="login">
                <h2 className="title">Login</h2>
                <h5>email</h5>
                <div className="login_input">
                    <PersonIcon />
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} 
                    placeholder="email" />
                </div>
                <h5>Password</h5>

                <div className="login_input">
                    <LockIcon />
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}
                    placeholder="password" />
                </div>
                
                <div className="login_button">
                    <button type="submit" onClick={signIn}>Login</button>
                </div>
                <h5>회원이 아니신가요?</h5>
                <div className="register_button">
                    
                    <button onClick={() => setOpenModal(true)}>Signup</button>
                    <Modal isOpen={openModal}>

                    </Modal>


                </div>
                <div className="login_kakao">
                    <h5>Or sign in with:</h5>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuH46zOirv7WWzS3R4ryFM8zJOa8erDQFySg&usqp=CAU"
                    alt=''/>
                </div>
        </div>
    );
}