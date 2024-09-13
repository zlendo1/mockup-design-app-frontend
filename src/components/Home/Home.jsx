import Header from './Header/Header.jsx'
import MainContent from './MainContent/MainContent.jsx'
import { callGet, callPost } from '../../utils/apiHandler.js'

import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

const Home = () => {
	const token = () => Cookies.get('jwt')

	const [isLoggedIn, setIsLoggedIn] = useState(!!token())

	useEffect(() => {
		setIsLoggedIn(!!token())
	}, [])

	if (!isLoggedIn) {
		window.location.reload()
	}

	const [selectedProject, setSelectedProject] = useState(null) // Track the selected project

	const handleLogout = () => {
		Cookies.remove('jwt')
		localStorage.removeItem('username')

		window.location.reload()
	}

	const handleProjectSelect = () => {
		setSelectedProject(null)
	}

	const handleCreateNewProject = projectName => {
		const newProject = {
			name: projectName,
		}

		setSelectedProject(newProject)
	}

	const handleSave = (serialized, callBack = () => {}) => {
		const updatedProject = {
			...selectedProject,
			serialized: serialized,
		}

		callPost('/project', updatedProject, token())
			.then(project => {
				setSelectedProject(project)

				callBack()
			})
			.catch(error => {
				alert('Error: ' + error.message)
			})
	}

	const handleSelectProject = projectId => {
		callGet(`/project/${projectId}`, token())
			.then(project => {
				setSelectedProject(project)
			})
			.catch(error => {
				alert('Error: ' + error.message)
			})
	}

	return (
		<div className="flex min-h-full min-w-full flex-col">
			<Header
				username={localStorage.getItem('username')}
				onLogout={handleLogout}
				onProjectSelect={handleProjectSelect}
			/>
			<MainContent
				selectedProject={selectedProject}
				onCreateNewProject={handleCreateNewProject}
				onSelectProject={handleSelectProject}
				onSave={handleSave}
			/>
		</div>
	)
}

export default Home
