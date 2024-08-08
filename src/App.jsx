import { useState, useEffect } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Cookies from 'js-cookie';

import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import Home from "./components/Home/Home.jsx";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const jwtToken = Cookies.getItem('jwt');

        setIsLoggedIn(!!jwtToken);
    }, []);

    return (
        <Router basename='/'>
            <Routes>
                <Route path="/login" element={ isLoggedIn ? <Home /> : <Login /> } />
                <Route path="/register" element={ isLoggedIn ? <Home /> : <Register /> } />
                <Route path="/" element={ isLoggedIn ? <Home /> : <Login /> } />
            </Routes>
        </Router>
    );
}

export default App;
