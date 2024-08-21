import PropTypes from 'prop-types'
import { useState } from 'react'

const ProjectEditor = ({ projectName }) => {
	const [activeTab, setActiveTab] = useState('hierarchy') // State to track the active tab

	return (
		<div className="flex flex-grow">
			{/* Left Sidebar: UI Components */}
			<aside className="w-1/4 bg-gray-100 p-4">
				<h3 className="mb-4 text-xl">{projectName} - Canvas</h3>
				<h3 className="mb-4 text-xl">UI Components</h3>
				{/* List of draggable components */}
				<div className="mb-2 rounded bg-white p-2">Button</div>
				<div className="mb-2 rounded bg-white p-2">Input Field</div>
				{/* Add more UI components here */}
			</aside>

			{/* Canvas */}
			<div className="flex-grow border bg-white p-4">
				{/* Canvas where components can be dropped */}
				<div className="h-full border-2 border-dashed border-gray-400">
					{/* Drop components here */}
				</div>
			</div>

			{/* Right Sidebar: Tabs for Hierarchy and Styling */}
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

				{activeTab === 'hierarchy' && (
					<div>
						<h3 className="mb-4 text-xl">Component Hierarchy</h3>
						{/* Hierarchy of components inside the canvas */}
						<ul>
							<li>Button</li>
							<li>Input Field</li>
							{/* Add more components here */}
						</ul>
					</div>
				)}

				{activeTab === 'styling' && (
					<div>
						<h3 className="mb-4 text-xl">Component Styling</h3>
						{/* Styling options for selected component */}
						<div>
							<label className="mb-2 block">Size</label>
							<input
								type="text"
								className="mb-4 w-full border p-2"
								placeholder="Width x Height"
							/>
							<label className="mb-2 block">Color</label>
							<input
								type="color"
								className="mb-4 w-full border p-2"
							/>
							<label className="mb-2 block">
								Background Color
							</label>
							<input
								type="color"
								className="mb-4 w-full border p-2"
							/>
						</div>
					</div>
				)}
			</aside>
		</div>
	)
}

ProjectEditor.propTypes = {
	projectName: PropTypes.string.isRequired,
}

export default ProjectEditor
