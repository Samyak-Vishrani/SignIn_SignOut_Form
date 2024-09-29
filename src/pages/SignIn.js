import React from 'react';
import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Button } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';


const SignIn = () => {

    const location = useLocation();
    const { state } = location;
    const formData = state?.formData || {};
    const navigate = useNavigate();

    const [errors, setErrors] = useState('');

    const [enteredData, setEnteredData] = useState({
        email: '',
        password: ''
    })

    const enteredEmail = (e) => {
        e.preventDefault();
        let val = e.target.value;

        setEnteredData({
            ...enteredData, email: val
        });
    }

    const enteredPass = (e) => {
        e.preventDefault();
        let val = e.target.value;

        setEnteredData({
            ...enteredData, password: val
        });
    }

    const validateData = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!(enteredData.email === formData.email) || !(enteredData.password === formData.password)) {
            // newErrors = "Incorrect Email or Password";
            alert("Incorrect Email or Password");
        }
        // setErrors(newErrors);
        else {
            navigate("/");
            alert("Successfully logged in");
        }


    }

    const handleSubmit = (e) => {
        e.preventDefault();
        validateData(e);
        console.log(formData);
    }

    const [theme, setTheme] = useState('black');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'black' ? 'white' : 'black'));
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

            <section className={theme}>
                <div className="main-div">

                    <h1>Sign In</h1>

                    <form className="signup-form">
                        <div className="input-box">
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="text"
                                id="email"
                                // className='input-box'
                                placeholder="Enter E-mail"
                                onChange={enteredEmail}
                            />
                            <Button startIcon={<MailIcon />}className='icon'></Button>
                            </div>
                        <div className="input-box">
                            <label htmlFor="pass">Password</label>
                            <input
                                type="password"
                                id="pass"
                                // className='input-box'
                                placeholder="Enter Password"
                                onChange={enteredPass}
                            />
                            <Button startIcon={<LockIcon />}className='icon'></Button>
                        </div>

                        <button
                            type="submit"
                            className='submit'
                            aria-label="Submit data"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                        <div className="signup-link linking">
                            <p>Don't have an account?</p>
                            <Link to="/signup" className="link">Sign Up</Link>
                        </div>

                    </form>
                </div>
            </section>

        </main>

    )
}

export default SignIn;