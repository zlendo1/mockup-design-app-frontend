import PropTypes from 'prop-types'

const LeftSidebar = ({ projectName }) => {
	return (
		<aside className="w-1/4 bg-gray-100 p-4">
			<h3 className="mb-4 text-xl">{projectName} - Canvas</h3>
			<h3 className="mb-4 text-xl">UI Components</h3>
			<div className="mb-2 rounded bg-white p-2">Button</div>
			<div className="mb-2 rounded bg-white p-2">Input Field</div>
			{/* Add more UI components here */}
		</aside>
	)
}

LeftSidebar.propTypes = {
	projectName: PropTypes.string.isRequired,
}

export default LeftSidebar
