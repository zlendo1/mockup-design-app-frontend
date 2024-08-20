const ProjectEditor = ({ projectName }) => {
    return (
        <div className="flex h-full">
            {/* Left Sidebar: UI Components */}
            <aside className="w-1/4 bg-gray-100 p-4">
                <h3 className="mb-4 text-xl">UI Components</h3>
                {/* List of draggable components */}
                <div className="mb-2 rounded bg-white p-2">Button</div>
                <div className="mb-2 rounded bg-white p-2">Input Field</div>
                {/* Add more UI components here */}
            </aside>

            {/* Canvas */}
            <main className="flex-grow border bg-white p-4">
                <h3 className="mb-4 text-xl">{projectName} - Canvas</h3>
                {/* Canvas where components can be dropped */}
                <div className="h-full border-2 border-dashed border-gray-400">
                    {/* Drop components here */}
                </div>
            </main>

            {/* Right Sidebar: Hierarchy and Styling */}
            <aside className="w-1/4 bg-gray-100 p-4">
                <h3 className="mb-4 text-xl">Component Hierarchy</h3>
                {/* Hierarchy of components inside the canvas */}
                <ul>
                    <li>Button</li>
                    <li>Input Field</li>
                    {/* Add more components here */}
                </ul>
                <h3 className="mb-4 mt-6 text-xl">Component Styling</h3>
                {/* Styling options for selected component */}
                <div>
                    <label className="mb-2 block">Size</label>
                    <input
                        type="text"
                        className="mb-4 w-full border p-2"
                        placeholder="Width x Height"
                    />
                    <label className="mb-2 block">Color</label>
                    <input type="color" className="mb-4 w-full border p-2" />
                    <label className="mb-2 block">Background Color</label>
                    <input type="color" className="mb-4 w-full border p-2" />
                </div>
            </aside>
        </div>
    )
}

export default ProjectEditor
