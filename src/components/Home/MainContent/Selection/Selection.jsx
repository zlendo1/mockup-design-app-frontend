import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Cookies from 'js-cookie'
import { Trash2 } from 'lucide-react'

import { callDelete, callGet } from '@/utils/apiHandler.js'
import { classMerger } from '@/utils/cssClassHandler.js'

const Selection = ({ onCreateNewProject, onSelectProject }) => {
	const [newProjectName, setNewProjectName] = useState('')
	const [projects, setProjects] = useState([])

	const [loadingProjects, setLoadingProjects] = useState(true)
	const [deletingProjectId, setDeletingProjectId] = useState(false)

	const token = () => Cookies.get('jwt')

	useEffect(() => {
		callGet('/project/names', token()).then(projects => {
			setLoadingProjects(false)

			setProjects(projects)
		})
	}, [])

	const handleCreateProject = () => {
		if (newProjectName.trim()) {
			onCreateNewProject(newProjectName.trim())
			setNewProjectName('')
		}
	}

	const handleDeleteProject = projectId => {
		if (deletingProjectId) {
			return
		}

		setDeletingProjectId(projectId)

		callDelete(`/project/${projectId}`, token()).then(() => {
			setProjects(projects.filter(project => project.id !== projectId))

			setDeletingProjectId(null)
		})
	}

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
							<div
								key={project.id}
								className="mb-2 flex items-center"
							>
								<button
									onClick={() => onSelectProject(project.id)}
									className="flex-grow rounded-lg bg-gray-100 p-3 text-left hover:bg-gray-200"
								>
									{project.name}
								</button>
								<button
									onClick={() =>
										handleDeleteProject(project.id)
									}
									className={classMerger(
										'ml-2 rounded-lg bg-red-600 p-3 text-white hover:bg-red-700',
										deletingProjectId === project.id
											? 'opacity-25'
											: ''
									)}
								>
									<Trash2 />
								</button>
							</div>
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
