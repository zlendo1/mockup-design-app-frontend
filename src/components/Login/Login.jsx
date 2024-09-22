import './Login.css'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'

import { callPost } from '@/utils/apiHandler.js'
import { classMerger } from '@/utils/cssClassHandler.js'

const Login = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const [isLoggedIn, setIsLoggedIn] = useState(!!Cookies.get('jwt'))
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setIsLoggedIn(!!Cookies.get('jwt'))
	}, [])

	useEffect(() => {
		if (isLoggedIn) {
			window.location.reload()
		}
	}, [isLoggedIn])

	const handleLogin = e => {
		e.preventDefault()

		if (loading) {
			return
		}

		const requestBody = { username, password }

		setLoading(true)

		callPost('/auth/login', requestBody)
			.then(data => {
				Cookies.set('jwt', data.token)
				localStorage.setItem('username', requestBody.username)

				setLoading(false)
				setIsLoggedIn(true)
			})
			.catch(error => {
				setLoading(false)

				alert('Error: ' + error.message)
			})
	}

	return (
		<div className="login-container w-80">
			<h2 className="mb-5 mt-5 text-2xl font-bold">Login</h2>
			<form onSubmit={handleLogin}>
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
				<p className="register-link mb-4 mt-4">
					Don&apos;t have an account?{' '}
					<Link
						to="/register"
						className="text-blue-500 hover:underline"
					>
						Register
					</Link>
				</p>
				<button
					type="submit"
					className={classMerger(
						'login-button',
						loading ? 'opacity-25' : ''
					)}
				>
					Login
				</button>
			</form>
		</div>
	)
}

export default Login
