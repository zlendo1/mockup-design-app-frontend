import './Login.css'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'

import { callPost } from '../../utils/apiHandler.js'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [isLoggedIn, setIsLoggedIn] = useState(!!Cookies.get('jwt'))

    useEffect(() => {
        setIsLoggedIn(!!Cookies.get('jwt'))
    }, [])

    if (isLoggedIn) {
        window.location.reload()
    }

    const handleLogin = (e) => {
        e.preventDefault()

        const requestBody = { username, password }

        callPost('/auth/login', requestBody)
            .then((data) => {
                Cookies.set('jwt', data.token)

                setIsLoggedIn(true)
            })
            .catch((error) => {
                alert('Error:' + error.message)
            })
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
                <button type="submit" className="login-button">
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login
