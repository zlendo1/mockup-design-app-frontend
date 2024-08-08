import './Login.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = (e) => {
		e.preventDefault();
		// Add your login logic here
		console.log('Email:', email);
		console.log('Password:', password);
	};

	return (
		<div className="login-container">
			<h2>Login</h2>
			<form onSubmit={handleLogin}>
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
