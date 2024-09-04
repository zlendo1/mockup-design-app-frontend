import { useState } from 'react'
import PropTypes from 'prop-types'

import Hierarchy from './Hierarchy/Hierarchy.jsx'
import Styling from './Styling/Styling.jsx'

const RightSidebar = ({ height, width, setHeight, setWidth }) => {
	const [activeTab, setActiveTab] = useState('hierarchy')

	return (
		<aside className="w-1/4 bg-gray-100 p-4">
			<div className="mb-4 flex border-b">
				<button
					className={`flex-1 p-2 text-center ${activeTab === 'hierarchy' ? 'bg-white' : 'bg-gray-200'}`}
					onClick={() => setActiveTab('hierarchy')}
				>
					Component Hierarchy
				</button>
				<button
					className={`flex-1 p-2 text-center ${activeTab === 'styling' ? 'bg-white' : 'bg-gray-200'}`}
					onClick={() => setActiveTab('styling')}
				>
					Component Styling
				</button>
			</div>

			{activeTab === 'hierarchy' && <Hierarchy />}
			{activeTab === 'styling' && (
				<Styling
					getHeight={() => height}
					getWidth={() => width}
					onSetHeight={setHeight}
					onSetWidth={setWidth}
				/>
			)}
		</aside>
	)
}

RightSidebar.propTypes = {
	height: PropTypes.number.isRequired,
	width: PropTypes.number.isRequired,
	setHeight: PropTypes.func.isRequired,
	setWidth: PropTypes.func.isRequired,
}

export default RightSidebar
