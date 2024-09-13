import { useEditor } from '@craftjs/core'
import { createElement } from 'react'

const Styling = () => {
	const { active, related } = useEditor((state, query) => {
		const selectedNodeId = query.getEvent('selected').first()

		return {
			active: selectedNodeId,
			related: selectedNodeId && state.nodes[selectedNodeId].related,
		}
	})

	return (
		<div className="p-1">
			{active && related.toolbar && createElement(related.toolbar)}
		</div>
	)
}

export default Styling
