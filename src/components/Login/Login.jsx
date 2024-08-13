import './Login.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleLogin = (e) => {
		e.preventDefault();

		const requestBody = { username, password };

		fetch(import.meta.env.BACKEND_URL + '/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		})
		.then(async response => {
			if (response.ok) {
				return response.json();
			} else {
				const data = await response.json();

				throw new Error(data.message);
			}
		})
		.then(data => {
			Cookies.set('jwt', data.token);

			setIsLoggedIn(true);
		})
		.catch(error => {
			alert('Error:' + error.message);
		});
	};

	if (isLoggedIn) {
		window.location.reload();
	}

	return (
		<div className="login-container">
			<h2>Login</h2>
			<form onSubmit={handleLogin}>
				<div className="form-group">
					<label htmlFor="username">Username:</label>
					<input
						type="text"
						id="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<p className="register-link">
					{/* eslint-disable-next-line react/no-unescaped-entities */}
					Don't have an account? <Link to="/register">Register</Link>
				</p>
				<button type="submit" className="login-button">Login</button>
			</form>
		</div>
	);
};

export default Login;
