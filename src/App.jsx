import './App.css'

import { useState, useEffect } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Cookies from 'js-cookie'

import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'
import Home from './components/Home/Home.jsx'

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(!!Cookies.get('jwt'))

	useEffect(() => {
		setIsLoggedIn(!!Cookies.get('jwt'))
	}, [])

	return (
		<Router basename="/">
			<div className="App">
				<Routes>
					<Route
						path="/login"
						element={isLoggedIn ? <Home /> : <Login />}
					/>
					<Route
						path="/register"
						element={isLoggedIn ? <Home /> : <Register />}
					/>
					<Route
						path="/"
						element={isLoggedIn ? <Home /> : <Login />}
					/>
				</Routes>
			</div>
		</Router>
	)
}

export default App
