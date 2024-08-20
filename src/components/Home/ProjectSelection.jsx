import { useState } from 'react';

const ProjectSelection = ({ onCreateNewProject, onSelectProject }) => {
	const [newProjectName, setNewProjectName] = useState('');

	const handleCreateProject = () => {
		if (newProjectName.trim()) {
			onCreateNewProject(newProjectName.trim());
			setNewProjectName('');
		}
	};

	return (
		<div className="p-4">
			<h2 className="text-2xl font-semibold mb-4">Your Projects</h2>
			{/* Existing Projects */}
			<div className="mb-6">
				<h3 className="text-xl mb-2">Select an Existing Project</h3>
				{/* Map over user's projects here */}
				<button onClick={() => onSelectProject('Project 1')} className="bg-gray-200 p-2 rounded mb-2 w-full text-left">
					Project 1
				</button>
			</div>
			{/* Create New Project */}
			<div>
				<h3 className="text-xl mb-2">Create a New Project</h3>
				<input
					type="text"
					placeholder="Project Name"
					value={newProjectName}
					onChange={(e) => setNewProjectName(e.target.value)}
					className="border p-2 mb-2 w-full"
				/>
				<button onClick={handleCreateProject} className="bg-blue-600 text-white p-2 rounded w-full">
					Create Project
				</button>
			</div>
		</div>
	);
};

export default ProjectSelection;
