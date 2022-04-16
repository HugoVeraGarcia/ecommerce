import React, { useState } from 'react';
import '../styles/navbar.css';
import logo from "../assets/logo.png"
import LoginModal from './LoginModal';
import { Link, useNavigate } from 'react-router-dom';
import Cart from '../pages/Cart';
import { useDispatch } from 'react-redux';
import { getPurchasesThunk, getUserCartThunk } from '../redux/actions';

const NavBar = () => {

    const [isLoginOpen, setIsLoginOpen] =useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const openPurchases = ()=>{
        if(localStorage.getItem('token')){
            dispatch(getPurchasesThunk());
            navigate("/purchases");
        } else {
            setIsLoginOpen(true);
        }
    }

    const openCart = ()=>{
        if(localStorage.getItem('token')){
            setIsCartOpen(!isCartOpen);
            dispatch(getUserCartThunk());    
        }else{
            setIsLoginOpen(true);
        }

    }

    return (
        <div>
            <nav className='navbar'>
                <div className='logo_container'> 
                <Link to="/">
                    <img className='logo' src={logo} alt="logo" />
                </Link>
                </div>
                    <div className='icons_main_container'>
                        <div className='icon_container'>
                            <i 
                                onClick={()=>setIsLoginOpen(!isLoginOpen)} 
                                className="fa-solid fa-user icon">
                            </i>
                        </div>
                        <div className='icon_container'>
                            <i 
                                className="fa-solid fa-box-archive icon"
                                onClick={openPurchases}
                            >
                            </i>
                        </div>
                        <div className='icon_container'>
                            <i 
                                className="fa-solid fa-cart-shopping icon"
                                onClick={openCart}
                            >
                            </i>
                        </div>
                </div>
            </nav>
            <LoginModal isLoginOpen={isLoginOpen} setIsLoginOpen={setIsLoginOpen}/>
            <Cart isCartOpen = { isCartOpen} />
        </div>
    );
};

export default NavBar;
