import PropTypes from 'prop-types'

const Styling = ({ width, onSetWidth, height, onSetHeight }) => {
	return (
		<div>
			<h3 className="mb-4 text-xl">Component Styling</h3>
			{/* Styling options for selected component */}
			<div>
				<label className="mb-2 block">Size</label>
				<div className="mb-4 flex items-center">
					<input
						type="text"
						value={width}
						onChange={e => onSetWidth(e.target.value)}
						className="w-full border p-2"
						placeholder="Width"
					/>
					<span className="mx-2">x</span>
					<input
						type="text"
						value={height}
						onChange={e => onSetHeight(e.target.value)}
						className="w-full border p-2"
						placeholder="Height"
					/>
				</div>
				<label className="mb-2 block">Color</label>
				<input type="color" className="mb-4 w-full border p-2" />
				<label className="mb-2 block">Background Color</label>
				<input type="color" className="mb-4 w-full border p-2" />
			</div>
		</div>
	)
}

Styling.propTypes = {
	width: PropTypes.string.isRequired,
	onSetWidth: PropTypes.func.isRequired,
	height: PropTypes.string.isRequired,
	onSetHeight: PropTypes.func.isRequired,
}

export default Styling
