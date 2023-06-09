import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [serialno, setSerial] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <><div>
        <h1 className="newheading">KIMS HEALTH CARE CENTER</h1>
        <p className="para">Thank you for choosing to be a part of our surgical department</p>
        </div><div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <label htmlFor="serial">Serial no</label>
            <input value={serialno} name="serial" onChange={(e) => setSerial(e.target.value)} id="serial" placeholder="Serial no" />
        
            <Link to="/">
      <button className="wide-button">Log In</button>
    </Link>
            </form>
        <Link to="/login" className="link-btn" >Already have an account? Login here.</Link>
        </div></>
    
    )
}

export default Register;