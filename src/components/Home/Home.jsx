import Header from './Header'
import MainContent from './MainContent'

import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

const Home = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!Cookies.get('jwt'))

    useEffect(() => {
        setIsLoggedIn(!!Cookies.get('jwt'))
    }, [])

    if (!isLoggedIn) {
        window.location.reload()
    }

    const [username, setUsername] = useState('JohnDoe') // Placeholder for the logged-in user's name
    const [selectedProject, setSelectedProject] = useState(null) // Track the selected project

    const handleLogout = () => {
        // Logout logic here
    }

    const handleProjectSelect = () => {
        setSelectedProject(null)
    }

    const handleSave = () => {
        // Save project logic here
    }

    // TODO: Implement project creation logic
    const handleCreateNewProject = (projectName) => {
        setSelectedProject(projectName)
    }

    // TODO: Implement project selection logic by id
    const handleSelectProject = (projectName) => {
        setSelectedProject(projectName)
    }

    return (
        <div className="flex min-h-full min-w-full flex-col">
            <Header
                username={username}
                onLogout={handleLogout}
                onProjectSelect={handleProjectSelect}
                onSave={handleSave}
            />
            <MainContent
                selectedProject={selectedProject}
                onCreateNewProject={handleCreateNewProject}
                onSelectProject={handleSelectProject}
            />
        </div>
    )
}

export default Home
