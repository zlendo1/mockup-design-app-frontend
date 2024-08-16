import './Home.css'

import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { useEffect, useState } from 'react';
import Cookies from "js-cookie";

const Home = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(!!Cookies.get('jwt'));

	useEffect(() => {
		setIsLoggedIn(!!Cookies.get('jwt'));
	}, []);

	if (!isLoggedIn) {
		window.location.reload();
	}

	return (
		<div className="home-container">
			<Header />
			<div className="main-content">
				<Sidebar />
				<div className="content">
					{children}
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Home;
