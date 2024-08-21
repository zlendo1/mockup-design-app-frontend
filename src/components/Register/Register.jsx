import './Register.css'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'

import { callPost } from '../../utils/apiHandler.js'

const Register = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	const [isLoggedIn, setIsLoggedIn] = useState(!!Cookies.get('jwt'))

	useEffect(() => {
		setIsLoggedIn(!!Cookies.get('jwt'))
	}, [])

	if (isLoggedIn) {
		window.location.reload()
	}

	const handleRegister = e => {
		e.preventDefault()

		if (password !== confirmPassword) {
			alert('Passwords do not match!')

			return
		}

		const requestBody = { username, password }

		callPost('/auth/register', requestBody)
			.then(data => {
				Cookies.set('jwt', data.token)
				localStorage.setItem('username', requestBody.username)

				setIsLoggedIn(true)
			})
			.catch(error => {
				alert('Error:' + error.message)
			})
	}

	return (
		<div className="register-container w-80">
			<h2 className="mb-5 mt-5 text-2xl font-bold">Register</h2>
			<form onSubmit={handleRegister}>
				<div className="form-group">
					<label htmlFor="username">Username:</label>
					<input
						className="p-1"
						type="text"
						id="username"
						value={username}
						onChange={e => setUsername(e.target.value)}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password:</label>
					<input
						className="p-1"
						type="password"
						id="password"
						value={password}
						onChange={e => setPassword(e.target.value)}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="confirm-password">Confirm Password:</label>
					<input
						className="p-1"
						type="password"
						id="confirm-password"
						value={confirmPassword}
						onChange={e => setConfirmPassword(e.target.value)}
						required
					/>
				</div>
				<p className="login-link mb-4 mt-4">
					Already have an account? <Link to="/login">Login</Link>
				</p>
				<button type="submit" className="register-button">
					Register
				</button>
			</form>
		</div>
	)
}

export default Register
