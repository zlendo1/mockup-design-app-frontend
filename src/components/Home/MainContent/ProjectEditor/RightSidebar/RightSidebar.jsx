import { useState } from 'react'

import Hierarchy from './Hierarchy/Hierarchy.jsx'
import Styling from './Styling/Styling.jsx'

const RightSidebar = () => {
	const [activeTab, setActiveTab] = useState('hierarchy')

	return (
		<aside className="w-1/4 bg-gray-100 p-4">
			<div className="mb-4 flex gap-2 border-b">
				<button
					className={`flex-1 p-2 text-center ${activeTab === 'hierarchy' ? 'bg-white' : 'bg-gray-200'}`}
					onClick={() => setActiveTab('hierarchy')}
				>
					Hierarchy
				</button>
				<button
					className={`flex-1 p-2 text-center ${activeTab === 'styling' ? 'bg-white' : 'bg-gray-200'}`}
					onClick={() => setActiveTab('styling')}
				>
					Styling
				</button>
			</div>

			{activeTab === 'hierarchy' && <Hierarchy />}
			{activeTab === 'styling' && <Styling />}
		</aside>
	)
}

export default RightSidebar
