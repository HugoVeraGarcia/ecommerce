import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewUserThunk, loginThunk } from '../redux/actions';
import '../styles/loginmodal.css';

const LoginModal = ({ isLoginOpen, setIsLoginOpen }) => {

    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    
    const [isSign, setIsSign] = useState(false)
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newpassword, setNewPassword] = useState('');
    const [phone, setPhone] = useState('');


    const dispatch = useDispatch();

    const useTest = () => {
        setEmail('hugo3@gmail.com')
        setPassword('hugohugo')
    }
    const login = e => {
        e.preventDefault();
        if(!isSign){
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
            setErrorMsg(error.response.data.message)
        });
        }else{
            const user = {
                firstName: firstName,
                lastName: lastName,
                email: newEmail,
                password: newpassword,
                phone: phone,
                role: "admin"
            }
            
            dispatch(addNewUserThunk(user))
            .then(res => {
                //localStorage.setItem("token", res.data.data.token);
                setErrorMsg('');
                setIsSign(false);
            })
            .catch(error => {
                setErrorMsg(error.response.data.message)
                console.log('error', error.response.data.message)
            });
    
        }
    }

    const logout = () => {
        localStorage.removeItem('token');
        setIsLoginOpen(false);
    }

    const close = ()=>{
        setIsLoginOpen(false);
        setIsSign(false);
    }

    return (
        <div>

            {   <div>
                    <form onSubmit={login} className={`login ${isLoginOpen ? 'open' : '' }`} >

                        {
                            localStorage.getItem('token') ? 
                            
                            
                            <div className="logout_container">
                                <i 
                                    className="fa-solid fa-arrow-right-from-bracket icon"
                                    onClick={logout}
                                ></i>
                            <i 
                                className="fa-solid fa-xmark icon m4rem"
                                onClick={()=>setIsLoginOpen(false)}
                                >
                            </i>

                            </div>
                            :
                            
                            <>



                                <div className="modal"> 

                                    <i className="fa-solid fa-face-grin icon size" ></i>
                                    

                                    { !isSign &&
                                        
                                    

                                    <div className="test">
                                        <p> <strong>Test</strong></p>
                                        <div className="test_data">
                                            <i className="fa-solid fa-envelope icon"></i>
                                            <p>hugo3@gmail.com</p>
                                            <i className="fa-solid fa-key icon"></i>
                                            <p>hugohugo</p>
                                        </div>
                                        <button
                                            onClick={useTest}
                                            type='button'
                                            className='buttonTest'
                                        >Use this</button>
                                    </div>
                                    }

                                    { !isSign &&

                                    <input 
                                    type="email" 
                                    placeholder='email'
                                    className='input'
                                    value={email}
                                    onChange={(e)=> setEmail(e.target.value)}
                                    />
                                    }
                                    { !isSign &&
                                    <input 
                                    type="password" 
                                    placeholder='password'
                                    className='input'
                                    value={password}
                                    onChange={(e)=> setPassword(e.target.value)}
                                    />
                                    }
                                    { !isSign &&
                                    <button
                                        className='button'
                                    >
                                        Submit
                                    </button>
                                    }
                                    { !isSign &&
                                    <button 
                                        onClick={()=> setIsLoginOpen(false) }
                                        className='button'
                                        type='button'
                                    >
                                        Cancel</button>
                                    }
                                    { !isSign &&
                                        
                                        <p
                                        onClick={()=>setIsSign(true)}
                                        className='link'
                                    >
                                        Don't have an account? Sign up</p>

                                    }
                                    { !isSign &&
                                    <p className='error'>{errorMsg}</p>
                                    }


                                    { isSign &&
                                    <label htmlFor="email">Email</label>
                                    }
                                    { isSign &&
                                    <input type="email" id='email' className='input' onChange={e=>setNewEmail(e.target.value)}/>
                                    }
                                    { isSign &&
                                        <label htmlFor="name">First Name</label>
                                    }
                                    { isSign &&
                                        <input type="text" id='name' className='input'onChange={e=>setFirstName(e.target.value)}/>
                                    }
                                    { isSign &&
                                        <label htmlFor="last">Last Name</label>
                                    }
                                    { isSign &&
                                        <input type="text" id='last' className='input' onChange={e=>setLastName(e.target.value)}/>
                                    }
                                    { isSign &&
                                        <label htmlFor="password">Password</label>
                                    }
                                    { isSign &&
                                        <input type="password" id='password' className='input'onChange={e=>setNewPassword(e.target.value)}/>
                                    }
                                    { isSign &&
                                        <label htmlFor="phone">Phone number(10 characters)</label>
                                    }
                                    { isSign &&
                                        <input type="text" id='phone' className='input' onChange={e=>setPhone(e.target.value)}/>
                                    }
                                    { isSign &&
                                        <button
                                            className='button'
                                        >
                                            Sign Up</button>
                                    }
                                    { isSign &&
                                        <button
                                            className='button'
                                            type='button'
                                            onClick={close}
                                        >
                                            Cancel</button>
                                    }
                                    { isSign &&
                                    <p
                                        onClick={()=>setIsSign(false)}
                                        className='link'
                                    >
                                        Have an account? Log in</p>
                                    }
                                    { isSign &&
                                    <p className='error'>{errorMsg}</p>
                                    }

                                </div>
                            </>
                        

                            
                        }

                    </form>
                </div>
            
            }
            
        </div>
    );
};

export default LoginModal;
