import './App.css';
import Landing_page from './pages/Landing_page';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';



function App() {

    const [theme, setTheme] = useState("blue-theme");

    // const changeThemeGreen = ()=>{
    //     setTheme("green-theme");
    // }
    // const changeThemeBlue = ()=>{
    //     setTheme("blue-theme");
    // }

    const greenTheme = {
        input: {
            backgroundColor: "#e0f7fa",
            color: "#00796b",
        },
        button: {
            backgroundColor: "#388e3c",
            color: "green",
        },
    };

    const blueTheme = {
        input: {
            backgroundColor: "#e3f2fd",
            color: "#0d47a1",
        },
        button: {
            backgroundColor: "#1e88e5",
            color: "blue",
        },
    };

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === blueTheme ? greenTheme : blueTheme));
    };




    return (
        <div className="App">

            <Router>
                {/* <Landing_page /> */}
                <Routes>
                
                    <Route path='/' element={<Landing_page />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/signin' element={<SignIn />} />

                </Routes>
            </Router>



        </div>
    );
}

export default App;
