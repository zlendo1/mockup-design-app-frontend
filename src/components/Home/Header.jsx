import PropTypes from 'prop-types'

const Header = ({
	username,
	onLogout,
	onProjectSelect,
	onSave,
	selectedProject,
}) => {
	return (
		<header className="flex items-center justify-between bg-gray-200 p-4">
			<div className="flex space-x-4">
				<span className="text-lg font-semibold">
					Welcome, {username}
				</span>
				<button
					onClick={onProjectSelect}
					className="rounded bg-blue-500 px-4 py-2 text-white"
				>
					Select Project
				</button>
			</div>
			<div className="flex space-x-4">
				{selectedProject && (
					<button
						onClick={onSave}
						className="rounded bg-green-500 px-4 py-2 text-white"
					>
						Save
					</button>
				)}
				<button
					onClick={onLogout}
					className="rounded bg-red-500 px-4 py-2 text-white"
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
	selectedProject: PropTypes.object.isRequired,
}

export default Header
