import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Cookies from 'js-cookie'

import { callGet } from '../../../../utils/apiHandler.js'

const Selection = ({ onCreateNewProject, onSelectProject }) => {
	const [newProjectName, setNewProjectName] = useState('')
	const [projects, setProjects] = useState([])

	const handleCreateProject = () => {
		if (newProjectName.trim()) {
			onCreateNewProject(newProjectName.trim())
			setNewProjectName('')
		}
	}

	useEffect(() => {
		callGet('/project/names', Cookies.get('jwt')).then(projects => {
			setProjects(projects)
		})
	}, [])

	return (
		<div className="ml-auto mr-auto w-1/2 p-4">
			<h2 className="mb-4 text-2xl font-semibold">Your Projects</h2>
			<div className="mb-6">
				<h3 className="mb-2 text-xl">Select an Existing Project</h3>
				{projects.map(project => (
					<button
						key={project.id}
						onClick={() => onSelectProject(project.id)}
						className="mb-2 w-full rounded bg-gray-200 p-2 text-left"
					>
						{project.name}
					</button>
				))}
			</div>
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

Selection.propTypes = {
	onCreateNewProject: PropTypes.func.isRequired,
	onSelectProject: PropTypes.func.isRequired,
}

export default Selection
