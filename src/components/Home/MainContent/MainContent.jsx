import Selection from './Selection/Selection.jsx'
import Workspace from './ProjectEditor/Workspace.jsx'

import PropTypes from 'prop-types'

const MainContent = ({
	selectedProject,
	onCreateNewProject,
	onSelectProject,
	onSave,
}) => {
	return (
		<div className="flex flex-grow p-4">
			{selectedProject ? (
				<Workspace project={selectedProject} onSave={onSave} />
			) : (
				<Selection
					onCreateNewProject={onCreateNewProject}
					onSelectProject={onSelectProject}
				/>
			)}
		</div>
	)
}

MainContent.propTypes = {
	selectedProject: PropTypes.object,
	onCreateNewProject: PropTypes.func.isRequired,
	onSelectProject: PropTypes.func.isRequired,
	onSave: PropTypes.func.isRequired,
}

export default MainContent
