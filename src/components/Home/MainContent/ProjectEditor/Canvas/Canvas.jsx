import PropTypes from 'prop-types'

const Canvas = ({ onSave, children }) => {
	return (
		<div className="flex h-full w-full justify-center">
			<div className="flex h-full w-full flex-col rounded-sm border">
				<div className="flex w-full items-center justify-between bg-gray-200 p-4">
					<button
						onClick={onSave}
						className="rounded bg-blue-500 px-4 py-2 text-white"
					>
						Save
					</button>
					<div className="flex gap-2"></div>
				</div>

				<div className="flex-grow rounded-b-lg border bg-white">
					{children}
				</div>
			</div>
		</div>
	)
}

Canvas.propTypes = {
	onSave: PropTypes.func.isRequired,
	children: PropTypes.node,
}

export default Canvas
