import PropTypes from 'prop-types'
import { useNode } from '@craftjs/core'
import { useEffect } from 'react'

const RenderNode = ({ render }) => {
	const { id } = useNode()
	const { isHover, dom } = useNode(node => ({
		isHover: node.events.hovered,
		dom: node.dom,
	}))

	useEffect(() => {
		if (dom && id !== 'ROOT') {
			if (isHover) {
				dom.classList.add('component-hover', isHover)
			} else {
				dom.classList.remove('component-hover')
			}
		}
	}, [id, dom, isHover])

	return <>{render}</>
}

RenderNode.propTypes = {
	render: PropTypes.node,
}

export default RenderNode
