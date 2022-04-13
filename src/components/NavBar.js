import React, { useState } from 'react';
import '../styles/navbar.css';
import logo from "../assets/logo.png"
import Modal from './Modal';

const NavBar = () => {

    const [isLoginOpen, setIsLoginOpen] =useState(false);

    return (
        <div>
            <nav className='navbar'>
                <div className='logo_container'> 
                    <img className='logo' src={logo} alt="logo" />
                </div>
                    <div className='icons_main_container'>
                        <div className='icon_container'>
                            <i 
                                onClick={()=>setIsLoginOpen(!isLoginOpen)} 
                                className="fa-solid fa-user icon">
                            </i>
                        </div>
                        <div className='icon_container'>
                            <i className="fa-solid fa-box-archive icon"></i>
                        </div>
                        <div className='icon_container'>
                            <i className="fa-solid fa-cart-shopping icon"></i>
                        </div>
                </div>
            </nav>
            <Modal isLoginOpen={isLoginOpen} setIsLoginOpen={setIsLoginOpen}/>
        </div>
    );
};

export default NavBar;
