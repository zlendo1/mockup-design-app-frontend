import { useNode } from '@craftjs/core'
import PropTypes from 'prop-types'

const Container = ({ children }) => {
	const {
		connectors: { connect, drag },
	} = useNode()

	return (
		<div
			className="flex-grow rounded-b-lg border bg-white"
			ref={ref => {
				if (ref) {
					connect(drag(ref))
				}
			}}
		>
			{children}
		</div>
	)
}

Container.propTypes = {
	children: PropTypes.node,
}

Container.craft = {
	displayName: 'div',
	props: {
		className: 'w-full h-full',
	},
}

export default Container
