import PropTypes from 'prop-types'

const Styling = ({ getWidth, onSetWidth, getHeight, onSetHeight }) => {
	return (
		<div>
			<h3 className="mb-4 text-xl">Component Styling</h3>
			{/* Styling options for selected component */}
			<div>
				<label className="mb-2 block">Size</label>
				<div className="mb-4 flex items-center">
					<input
						type="text"
						value={getWidth()}
						onChange={e => onSetWidth(e.target.value)}
						className="w-full border p-2"
						placeholder="Width"
					/>
					<span className="mx-2">x</span>
					<input
						type="text"
						value={getHeight()}
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
	getWidth: PropTypes.func.isRequired,
	onSetWidth: PropTypes.func.isRequired,
	getHeight: PropTypes.func.isRequired,
	onSetHeight: PropTypes.func.isRequired,
}

export default Styling
