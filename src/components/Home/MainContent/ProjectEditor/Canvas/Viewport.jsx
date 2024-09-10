import PropTypes from 'prop-types'

const Viewport = ({ children }) => {
	return (
		<div className="viewport w-full overflow-y-auto overflow-x-hidden">
			<div className="craftjs-renderer h-full w-full flex-1">
				{children}
			</div>
		</div>
	)
}

Viewport.propTypes = {
	children: PropTypes.node,
}

export default Viewport
