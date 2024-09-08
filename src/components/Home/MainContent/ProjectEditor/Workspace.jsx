import PropTypes from 'prop-types'
import { useState } from 'react'

import LeftSidebar from './LeftSidebar/LeftSidebar.jsx'
import RightSidebar from './RightSidebar/RightSidebar.jsx'
import Canvas from './Canvas/Canvas.jsx'

const Workspace = ({ project, onSave }) => {
	const [width, setWidth] = useState('') // State for width
	const [height, setHeight] = useState('') // State for height

	return (
		<div className="flex flex-grow">
			<LeftSidebar projectName={project.name} />
			<Canvas onSave={onSave} />
			<RightSidebar
				height={height}
				width={width}
				setHeight={setHeight}
				setWidth={setWidth}
			/>
		</div>
	)
}

Workspace.propTypes = {
	project: PropTypes.object.isRequired,
	onSave: PropTypes.func.isRequired,
}

export default Workspace
