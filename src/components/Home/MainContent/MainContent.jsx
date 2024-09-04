import Selection from './Selection/Selection.jsx'
import Editor from './ProjectEditor/Editor.jsx'

import PropTypes from 'prop-types'

const MainContent = ({
	selectedProject,
	onCreateNewProject,
	onSelectProject,
}) => {
	return (
		<div className="flex flex-grow p-4">
			{selectedProject ? (
				<Editor projectName={selectedProject} />
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
	selectedProject: PropTypes.string,
	onCreateNewProject: PropTypes.func.isRequired,
	onSelectProject: PropTypes.func.isRequired,
}

export default MainContent
