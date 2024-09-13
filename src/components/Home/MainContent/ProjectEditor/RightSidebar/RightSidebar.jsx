import Hierarchy from './Hierarchy/Hierarchy.jsx'
import Styling from './Styling/Styling.jsx'
import { useState } from 'react'
import { classMerger } from '@/utils/cssClassHandler.js'

const RightSidebar = () => {
	const [activeTab, setActiveTab] = useState('styling')

	return (
		<aside className="flex w-80 flex-col border-l bg-white">
			<div className="flex w-full">
				<button
					className={classMerger(
						'text-md w-1/2 border-b bg-gray-200 px-4 py-2 text-left font-semibold transition-colors duration-200',
						(activeTab === 'styling' && 'border-b-2 bg-white') ||
							'hover:bg-gray-300'
					)}
					onClick={() => setActiveTab('styling')}
				>
					Styling
				</button>
				<button
					className={classMerger(
						'text-md w-1/2 border-b bg-gray-200 px-4 py-2 text-left font-semibold transition-colors duration-200',
						(activeTab === 'hierarchy' && 'border-b-2 bg-white') ||
							'hover:bg-gray-300'
					)}
					onClick={() => setActiveTab('hierarchy')}
				>
					Hierarchy
				</button>
			</div>
			<div className="p-2">
				{activeTab === 'styling' && <Styling />}
				{activeTab === 'hierarchy' && <Hierarchy />}
			</div>
		</aside>
	)
}

export default RightSidebar
