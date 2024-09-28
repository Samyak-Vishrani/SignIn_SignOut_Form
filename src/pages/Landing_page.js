import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Landing_page = () => {

    const [theme, setTheme] = useState('blue');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'blue' ? 'green' : 'blue'));
        console.log(theme);
    };


    const navigate = useNavigate();

    return (

        <nav className="navbar">
            <div className="nav-container">
                <button onClick={() => navigate({ state: { theme } })}>Change Theme</button>
                <button onClick={() => navigate('/signin')} className="nav-button sign-in" >Sign In</button>
                <button onClick={() => navigate('/signup')} className="nav-button sign-up">Sign Up</button>
            </div>
        </nav>
    )
}

export default Landing_page