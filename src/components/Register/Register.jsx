import { useState } from 'react';
import './Register.css';
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Register = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleRegister = (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			alert('Passwords do not match!');

			return;
		}

		const requestBody = { username, password };

		fetch(import.meta.env.BACKEND_URL + '/auth/register', {
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
		<div className="register-container">
			<h2>Register</h2>
			<form onSubmit={handleRegister}>
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
				<div className="form-group">
					<label htmlFor="confirm-password">Confirm Password:</label>
					<input
						type="password"
						id="confirm-password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
					/>
				</div>
				<p className="login-link">
					{/* eslint-disable-next-line react/no-unescaped-entities */}
					Already have an account? <Link to="/login">Login</Link>
				</p>
				<button type="submit" className="register-button">Register</button>
			</form>
		</div>
	);
};

export default Register;
