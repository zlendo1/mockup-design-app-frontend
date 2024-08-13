import { useState } from 'react';
import './Register.css';
import { Link } from "react-router-dom";

const Register = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const handleRegister = (e) => {
		e.preventDefault();
		// Add your registration logic here
		if (password === confirmPassword) {
			console.log('Username:', username);
			console.log('Email:', email);
			console.log('Password:', password);
		} else {
			alert('Passwords do not match!');
		}
	};

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
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
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
