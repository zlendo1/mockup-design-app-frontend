import PropTypes from 'prop-types'
import { createContext, useState } from 'react'
import { Editor, Frame, Element } from '@craftjs/core'

import LeftSidebar from './LeftSidebar/LeftSidebar.jsx'
import RightSidebar from './RightSidebar/RightSidebar.jsx'
import Canvas from './Canvas/Canvas.jsx'
import Viewport from './Canvas/Viewport.jsx'

// eslint-disable-next-line no-unused-vars
export const SaveContext = createContext(_ => {})

const Workspace = ({ project, onSave }) => {
	const [width, setWidth] = useState('') // State for width
	const [height, setHeight] = useState('') // State for height

	return (
		<SaveContext.Provider value={onSave}>
			<Editor
				resolver={{
					Canvas,
				}}
			>
				<div className="relative flex flex-1 overflow-hidden">
					<LeftSidebar projectName={project.name} />
					<Viewport>
						<Frame>
							<Element is={Canvas} id="ROOT" canvas></Element>
						</Frame>
					</Viewport>
					<RightSidebar
						height={height}
						width={width}
						setHeight={setHeight}
						setWidth={setWidth}
					/>
				</div>
			</Editor>
		</SaveContext.Provider>
	)
}

Workspace.propTypes = {
	project: PropTypes.object.isRequired,
	onSave: PropTypes.func.isRequired,
}

export default Workspace
