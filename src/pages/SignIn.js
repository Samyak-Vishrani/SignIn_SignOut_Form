import React from 'react';
import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import mail from "../photos/mail.svg";
import password from "../photos/password.svg";


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
    }

    const [theme, setTheme] = useState('blue');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'blue' ? 'green' : 'blue'));
    };


    return (
        <main>

            <nav className="navbar">
                <div className="nav-container">
                    <button onClick={toggleTheme} className="nav-button toggle-theme">Toggle Theme</button>
                    <button onClick={() => navigate('/signin', { state: { formData } })} className="nav-button sign-in" >Sign In</button>
                    <button onClick={() => navigate('/signup')} className="nav-button sign-up">Sign Up</button>
                </div>
            </nav>

            <section>
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
                            <img className="icon" src={mail}></img>
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
                            <img className="icon" src={password}></img>
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