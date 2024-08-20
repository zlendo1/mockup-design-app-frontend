const ProjectEditor = ({ projectName }) => {
	return (
		<div className="flex h-full">
			{/* Left Sidebar: UI Components */}
			<aside className="w-1/4 bg-gray-100 p-4">
				<h3 className="text-xl mb-4">UI Components</h3>
				{/* List of draggable components */}
				<div className="bg-white p-2 mb-2 rounded">Button</div>
				<div className="bg-white p-2 mb-2 rounded">Input Field</div>
				{/* Add more UI components here */}
			</aside>

			{/* Canvas */}
			<main className="flex-grow bg-white p-4 border">
				<h3 className="text-xl mb-4">{projectName} - Canvas</h3>
				{/* Canvas where components can be dropped */}
				<div className="border-dashed border-2 border-gray-400 h-full">
					{/* Drop components here */}
				</div>
			</main>

			{/* Right Sidebar: Hierarchy and Styling */}
			<aside className="w-1/4 bg-gray-100 p-4">
				<h3 className="text-xl mb-4">Component Hierarchy</h3>
				{/* Hierarchy of components inside the canvas */}
				<ul>
					<li>Button</li>
					<li>Input Field</li>
					{/* Add more components here */}
				</ul>
				<h3 className="text-xl mt-6 mb-4">Component Styling</h3>
				{/* Styling options for selected component */}
				<div>
					<label className="block mb-2">Size</label>
					<input type="text" className="border p-2 mb-4 w-full" placeholder="Width x Height" />
					<label className="block mb-2">Color</label>
					<input type="color" className="border p-2 mb-4 w-full" />
					<label className="block mb-2">Background Color</label>
					<input type="color" className="border p-2 mb-4 w-full" />
				</div>
			</aside>
		</div>
	);
};

export default ProjectEditor;
