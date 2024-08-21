import PropTypes from 'react'

const Header = ({ username, onLogout, onProjectSelect, onSave }) => {
	return (
		<header className="flex items-center justify-between bg-blue-600 p-4 text-white">
			<div className="flex items-center">
				<span className="mr-4">Welcome, {username}</span>
				<button
					onClick={onProjectSelect}
					className="rounded bg-blue-700 px-4 py-2"
				>
					Select Project
				</button>
			</div>
			<div className="flex items-center">
				<button
					onClick={onSave}
					className="mr-4 rounded bg-green-600 px-4 py-2"
				>
					Save
				</button>
				<button
					onClick={onLogout}
					className="rounded bg-red-600 px-4 py-2"
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
	onSave: PropTypes.func.isRequired,
}

export default Header
