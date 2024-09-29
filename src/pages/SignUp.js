import React from 'react'
import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import name from "../photos/name.png";
import username from "../photos/username.png";
import mail from "../photos/mail.png";
import phone from "../photos/phone.png";
import password from "../photos/password.png";



const SignUp = () => {
    const location = useLocation();
    const { state } = location;
    const navigate = useNavigate();    

    const [errors, setErrors] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        dob: '',
        phone: '',
        password: '',
        confirmPassword: ''
    })

    const addName = (e) => {
        e.preventDefault();
        let val = e.target.value;

        setFormData({
            ...formData, name: val
        });
    }

    const addUsername = (e) => {
        e.preventDefault();
        let val = e.target.value;

        setFormData({
            ...formData, username: val
        });
    }

    const addEmail = (e) => {
        e.preventDefault();
        let val = e.target.value;

        setFormData({
            ...formData, email: val
        });
    }

    const addDob = (e) => {
        e.preventDefault();
        let val = e.target.value;

        setFormData({
            ...formData, dob: val
        })
    }

    const addPhoneNo = (e) => {
        e.preventDefault();
        let val = e.target.value;

        setFormData({
            ...formData, phone: val
        });
    }

    const addPass = (e) => {
        e.preventDefault();
        let val = e.target.value;

        setFormData({
            ...formData, password: val
        });
    }

    const confirmPass = (e) => {
        e.preventDefault();
        let val = e.target.value;

        setFormData({
            ...formData, confirmPassword: val
        });
    }

    const validateData = () => {

        const newErrors = {};
        const regexName = /^[A-Za-z\s]{8,20}$/;
        const regexEmail = /^[A-Za-z0-9.+%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        const regexPass = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

        if (!regexName.test(formData.name)) {
            newErrors.name = "Name must have alphabetical characters only, min 8 chars, max 20 chars";
        }
        if (!regexEmail.test(formData.email)) {
            newErrors.email = "Enter valid Email";
        }
        if (!regexPass.test(formData.password)) {
            newErrors.pass = "Password must have min 8 chars, max 20 chars, at least one uppercase letter, one lowercase letter, one number and a special character";
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPass = "Password must match";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const err = await validateData();
        if (err) {
            alert("Login added");
        }
    }

    const [theme, setTheme] = useState('green');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'green' ? 'white' : 'green'));
    };



    return (

        <main className={theme}>

            <nav className="navbar">
                <div className="nav-container">
                    <button onClick={toggleTheme} className="nav-button toggle-theme">Toggle Theme</button>
                    <button onClick={() => navigate('/signin', { state: { formData } })} className="nav-button sign-in" >Sign In</button>
                    <button onClick={() => navigate('/signup')} className="nav-button sign-up">Sign Up</button>
                </div>
            </nav>

            <section>
                <div className="main-div">

                    <h1>Sign Up</h1>

                    <form className="signup-form">
                        <div className="input-box">
                            <label htmlFor="name">Name</label>
                            <input
                                autoFocus
                                type="text"
                                id="name"
                                // className='input-box'
                                placeholder="Enter Name"
                                value={formData.name}
                                onChange={addName}
                            />
                            {errors.name && <p className="error">{errors.name}</p>}
                            <img className="icon" src={name}></img>
                        </div>
                        <div className="input-box">
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="text"
                                id="email"
                                // className='input-box'
                                placeholder="Enter E-mail"
                                value={formData.email}
                                onChange={addEmail}
                            />
                            {errors.email && <p className="error">{errors.email}</p>}
                            <img className="icon" src={mail}></img>
                        </div>
                        <div className="input-box">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                // className='input-box'
                                placeholder="Enter Username"
                                value={formData.username}
                                onChange={addUsername}
                            />
                            <img className="icon" src={username}></img>
                        </div>
                        <div className="input-box">
                            <input
                                type="date"
                                id="dob"
                                // className='input-box'
                                placeholder="Enter DOB"
                                value={formData.dob}
                                onChange={addDob}
                            />
                        </div>
                        <div className="input-box">
                            <label htmlFor="phoneNo">Phone Number</label>
                            <input
                                type="number"
                                id="phoneNo"
                                // className='input-box'
                                placeholder="Enter Phone Number"
                                value={formData.phone}
                                onChange={addPhoneNo}
                            />
                            <img className="icon" src={phone}></img>
                        </div>
                        <div className="input-box">
                            <label htmlFor="pass">Password</label>
                            <input
                                type="password"
                                id="pass"
                                // className='input-box'
                                placeholder="Enter Password"
                                value={formData.password}
                                onChange={addPass}
                            />
                            {errors.pass && <p className="error">{errors.pass}</p>}
                            <img className="icon" src={password}></img>
                        </div>
                        <div className="input-box">
                            <label htmlFor="confirmPass">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPass"
                                // className='input-box'
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={confirmPass}
                            />
                            {errors.confirmPass && <p className="error">{errors.confirmPass}</p>}
                            <img className="icon" src={password}></img>
                        </div>

                        <button
                            className='submit'
                            type="submit"
                            aria-label="Submit data"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                        <div className="signin-link linking">
                            <p>Already have an account</p>
                            <Link to="/signin" className="link">Sign In</Link>
                        </div>

                    </form>
                </div>
            </section>

        </main>

    )
}

export default SignUp;


