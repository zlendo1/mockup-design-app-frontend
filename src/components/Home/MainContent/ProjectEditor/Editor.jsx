import PropTypes from 'prop-types'
import { useState } from 'react'

import LeftSidebar from './LeftSidebar/LeftSidebar.jsx'
import RightSidebar from './RightSidebar/RightSidebar.jsx'

const Editor = ({ projectName }) => {
	const [width, setWidth] = useState('') // State for width
	const [height, setHeight] = useState('') // State for height

	return (
		<div className="flex flex-grow">
			<LeftSidebar projectName={projectName} />
			<div className="flex-grow border bg-white p-4">
				<div className="h-full border-2 border-dashed border-gray-400">
					{/* Drop components here */}
				</div>
			</div>
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
	projectName: PropTypes.string.isRequired,
}

export default Editor
