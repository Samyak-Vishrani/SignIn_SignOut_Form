import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Landing_page = () => {

    const [theme, setTheme] = useState('black');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'black' ? 'white' : 'black'));
        console.log(theme);
    };


    const navigate = useNavigate();

    return (

        <main>
            <nav className="navbar">
                <div className="nav-container">
                    <button onClick={toggleTheme} className="nav-button toggle-theme" style={{ backgroundColor: 'black' }}>Toggle Theme</button>
                    <button onClick={() => navigate('/signin')} className="nav-button sign-in" >Sign In</button>
                    <button onClick={() => navigate('/signup')} className="nav-button sign-up">Sign Up</button>
                </div>
            </nav>
            <div className="main-div">
                <h1>THIS IS LANDING PAGE</h1>
            </div>
        </main>
    )
}

export default Landing_page