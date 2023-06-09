import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import background from './images/proimage.jpg';
import './Login.css';

export const Login = (props) => {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [serial, setSerial] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
    }
    const navigate = useNavigate();
    

    return (
        <><div>
           
          
            <h1 className="heading">KIMS HEALTH CARE CENTER</h1>
            <p className="text">The power of community to create health is far greater than <br />{'\n'}any physician, clinic or hospital.</p>
            
        </div><div className="auth-form-container">
                <h2>KIMS HCC SURGEON'S PROFILE</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="serialno">Serial no</label>
                    <input value={serial} name="serial" onChange={(e) => setSerial(e.target.value)} id="serial" placeholder="Serial no" />
                    <label htmlFor="name">Name</label>
                    <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Name" />
                    <label htmlFor="password">Password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                    <button type="submit" onClick={() => navigate('/main')}>Log In</button>
                    
                </form>
                <button className="link-btn" onClick={() => navigate('register')}>New SURGEON? Register here.</button>
            </div></>
    )
}

export default Login;