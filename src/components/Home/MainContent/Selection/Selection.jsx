import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Cookies from 'js-cookie'

import { callGet } from '@/utils/apiHandler.js'

const Selection = ({ onCreateNewProject, onSelectProject }) => {
	const [newProjectName, setNewProjectName] = useState('')
	const [projects, setProjects] = useState([])

	const [loadingProjects, setLoadingProjects] = useState(true)

	const handleCreateProject = () => {
		if (newProjectName.trim()) {
			onCreateNewProject(newProjectName.trim())
			setNewProjectName('')
		}
	}

	useEffect(() => {
		callGet('/project/names', Cookies.get('jwt')).then(projects => {
			setLoadingProjects(false)
			setProjects(projects)
		})
	}, [])

	return (
		<div className="container mx-auto flex w-2/5 p-6">
			<div className="m-auto w-full rounded-lg bg-white p-6 shadow-md">
				<h2 className="mb-6 text-center text-3xl font-bold">
					Your Projects
				</h2>
				<div className="mb-8">
					<h3 className="mb-4 text-2xl font-semibold">
						Select an Existing Project
					</h3>
					{(loadingProjects && <p>Loading...</p>) ||
						(projects.length === 0 && <p>No projects found.</p>) ||
						projects.map(project => (
							<button
								key={project.id}
								onClick={() => onSelectProject(project.id)}
								className="mb-2 w-full rounded-lg bg-gray-100 p-3 text-left hover:bg-gray-200"
							>
								{project.name}
							</button>
						))}
				</div>
				<div>
					<h3 className="mb-4 text-2xl font-semibold">
						Create a New Project
					</h3>
					<input
						type="text"
						placeholder="Project Name"
						value={newProjectName}
						onChange={e => setNewProjectName(e.target.value)}
						className="mb-4 w-full rounded-lg border border-gray-300 p-3"
					/>
					<button
						onClick={handleCreateProject}
						className="w-full rounded-lg bg-blue-600 p-3 text-white hover:bg-blue-700"
					>
						Create Project
					</button>
				</div>
			</div>
		</div>
	)
}

Selection.propTypes = {
	onCreateNewProject: PropTypes.func.isRequired,
	onSelectProject: PropTypes.func.isRequired,
}

export default Selection
