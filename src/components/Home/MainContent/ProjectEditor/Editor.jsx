import PropTypes from 'prop-types'
import { useState } from 'react'

import LeftSidebar from './LeftSidebar/LeftSidebar.jsx'
import RightSidebar from './RightSidebar/RightSidebar.jsx'
import Canvas from './Canvas/Canvas.jsx'

const Editor = ({ project }) => {
	const [width, setWidth] = useState('') // State for width
	const [height, setHeight] = useState('') // State for height

	return (
		<div className="flex flex-grow">
			<LeftSidebar projectName={project.name} />
			<Canvas />
			<RightSidebar
				height={height}
				width={width}
				setHeight={setHeight}
				setWidth={setWidth}
			/>
		</div>
	)
}

Editor.propTypes = {
	project: PropTypes.object.isRequired,
}

export default Editor
