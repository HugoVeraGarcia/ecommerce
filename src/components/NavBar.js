import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../redux/actions';
import '../styles/navbar.css';
import logo from "../assets/logo.png"

const NavBar = () => {

    const [isLoginOpen, setIsLoginOpen] =useState(false);
    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const dispatch = useDispatch();

    const login = e => {
        e.preventDefault();
        const credentials = {
            email,
            password
        }
        
        dispatch(loginThunk(credentials))
        .then(res => {
            localStorage.setItem("token", res.data.data.token);
            setErrorMsg('');
            setIsLoginOpen(false);
        })
        .catch(error => {
//            console.log('error',error.response);
//            console.log('error',error.response.data.message);
            setErrorMsg(error.response.data.message)
        });
    }

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('Token');
        setIsLoginOpen(false);
    }

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
            {   <div>
                    <form onSubmit={login} className={`login ${isLoginOpen ? 'open' : '' }`} >

                        {
                            localStorage.getItem('token') ? 
                            
                            
                            <div className="logout_container">
                                <i 
                                    class="fa-solid fa-arrow-right-from-bracket icon"
                                    onClick={logout}
                                ></i>
                            </div>
                            :
                            
                            <>



                                <div className="modal"> 

                                    <i className="fa-solid fa-face-grin icon" ></i>

                                    <div className="test">
                                        <p> <strong>Test</strong></p>
                                        <div className="test_data">
                                            <i className="fa-solid fa-envelope icon"></i>
                                            <p>john@gmail.com</p>
                                            <i className="fa-solid fa-key icon"></i>
                                            <p>john1234</p>
                                        </div>
                                    </div>

                                    <input 
                                    type="email" 
                                    placeholder='email'
                                    className='input'
                                    value={email}
                                    onChange={(e)=> setEmail(e.target.value)}
                                    />
                                    <input 
                                    type="password" 
                                    placeholder='password'
                                    className='input'
                                    value={password}
                                    onChange={(e)=> setPassword(e.target.value)}
                                    />
                                    <button
                                        className='button'
                                    >
                                        Submit
                                    </button>
                                    <button 
                                        onClick={()=> setIsLoginOpen(false) }
                                        className='button'
                                    >
                                        Cancel</button>
                                    <p className='error'>{errorMsg}</p>
                                </div>
                            </>
                            

                            
                        }

                    </form>
                </div>
            
            }
            
        </div>
    );
};

export default NavBar;