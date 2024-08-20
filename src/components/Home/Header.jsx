const Header = ({ username, onLogout, onProjectSelect, onSave }) => {
	return (
		<header className="flex justify-between items-center p-4 bg-blue-600 text-white">
			<div className="flex items-center">
				<span className="mr-4">Welcome, {username}</span>
				<button onClick={onProjectSelect} className="bg-blue-700 px-4 py-2 rounded">Select Project</button>
			</div>
			<div className="flex items-center">
				<button onClick={onSave} className="bg-green-600 px-4 py-2 rounded mr-4">Save</button>
				<button onClick={onLogout} className="bg-red-600 px-4 py-2 rounded">Logout</button>
			</div>
		</header>
	);
};

export default Header;
