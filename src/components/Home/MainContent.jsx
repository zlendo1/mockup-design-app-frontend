import ProjectSelection from './ProjectSelection'
import ProjectEditor from './ProjectEditor'

import PropTypes from 'prop-types'

const MainContent = ({
	selectedProject,
	onCreateNewProject,
	onSelectProject,
}) => {
	return (
		<div className="flex flex-grow p-4">
			{selectedProject ? (
				<ProjectEditor projectName={selectedProject} />
			) : (
				<ProjectSelection
					onCreateNewProject={onCreateNewProject}
					onSelectProject={onSelectProject}
				/>
			)}
		</div>
	)
}

MainContent.propTypes = {
	selectedProject: PropTypes.string,
	onCreateNewProject: PropTypes.func.isRequired,
	onSelectProject: PropTypes.func.isRequired,
}

export default MainContent
