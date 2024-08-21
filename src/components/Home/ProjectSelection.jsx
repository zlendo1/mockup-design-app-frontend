import { useState } from 'react'
import PropTypes from 'prop-types'

const ProjectSelection = ({ onCreateNewProject, onSelectProject }) => {
	const [newProjectName, setNewProjectName] = useState('')

	const handleCreateProject = () => {
		if (newProjectName.trim()) {
			onCreateNewProject(newProjectName.trim())
			setNewProjectName('')
		}
	}

	return (
		<div className="p-4">
			<h2 className="mb-4 text-2xl font-semibold">Your Projects</h2>
			{/* Existing Projects */}
			<div className="mb-6">
				<h3 className="mb-2 text-xl">Select an Existing Project</h3>
				{/* Map over user's projects here */}
				<button
					onClick={() => onSelectProject('Project 1')}
					className="mb-2 w-full rounded bg-gray-200 p-2 text-left"
				>
					Project 1
				</button>
			</div>
			{/* Create New Project */}
			<div>
				<h3 className="mb-2 text-xl">Create a New Project</h3>
				<input
					type="text"
					placeholder="Project Name"
					value={newProjectName}
					onChange={e => setNewProjectName(e.target.value)}
					className="mb-2 w-full border p-2"
				/>
				<button
					onClick={handleCreateProject}
					className="w-full rounded bg-blue-600 p-2 text-white"
				>
					Create Project
				</button>
			</div>
		</div>
	)
}

ProjectSelection.propTypes = {
	onCreateNewProject: PropTypes.func.isRequired,
	onSelectProject: PropTypes.func.isRequired,
}

export default ProjectSelection
