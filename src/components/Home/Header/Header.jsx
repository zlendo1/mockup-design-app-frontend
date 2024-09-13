import PropTypes from 'prop-types'

const Header = ({ username, onLogout, onProjectSelect }) => {
	return (
		<header className="flex items-center justify-between border-b bg-white p-4">
			<div className="flex items-center space-x-4">
				<span className="text-lg font-semibold text-black">
					Welcome, {username}
				</span>
			</div>
			<div className="flex space-x-4">
				<button
					onClick={onProjectSelect}
					className="rounded bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-600"
				>
					Select Project
				</button>
				<button
					onClick={onLogout}
					className="rounded bg-red-500 px-4 py-2 text-white transition duration-300 hover:bg-red-600"
				>
					Logout
				</button>
			</div>
		</header>
	)
}

Header.propTypes = {
	username: PropTypes.string.isRequired,
	onLogout: PropTypes.func.isRequired,
	onProjectSelect: PropTypes.func.isRequired,
}

export default Header
