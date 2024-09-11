import PropTypes from 'prop-types'
import { useState } from 'react'
import { Editor } from '@craftjs/core'

import LeftSidebar from './LeftSidebar/LeftSidebar.jsx'
import RightSidebar from './RightSidebar/RightSidebar.jsx'
import Canvas from './Canvas/Canvas.jsx'
import Viewport from './Canvas/Viewport.jsx'
import Container from '../../../nodes/Container.jsx'

const Workspace = ({ project, onSave }) => {
	const [width, setWidth] = useState('') // State for width
	const [height, setHeight] = useState('') // State for height

	return (
		<Editor
			resolver={{
				Container,
			}}
		>
			<div className="relative flex flex-1 overflow-hidden">
				<LeftSidebar projectName={project.name} />
				<Viewport>
					<div className="page-container h-full w-full p-4">
						<Canvas project={project} onSave={onSave}></Canvas>
					</div>
				</Viewport>
				<RightSidebar
					height={height}
					width={width}
					setHeight={setHeight}
					setWidth={setWidth}
				/>
			</div>
		</Editor>
	)
}

Workspace.propTypes = {
	project: PropTypes.object.isRequired,
	onSave: PropTypes.func.isRequired,
}

export default Workspace
