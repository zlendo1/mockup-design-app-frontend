import { Element } from '@craftjs/core'

import SettingsControl from '@/components/ui/SettingsControl.jsx'
import withNode from '@/components/nodes/withNode.jsx'
import Block from '@/components/ui/Block.jsx'

const draggable = true
const droppable = true

const NodeOneBlock = withNode(Block, {
	draggable,
	droppable,
})

const NodeTwoBlocks = ({ ...props }) => (
	<NodeOneBlock {...props}>
		<Element canvas is={NodeOneBlock} id="first-block" />
		<Element canvas is={NodeOneBlock} id="second-block" />
	</NodeOneBlock>
)

NodeOneBlock.craft = {
	...NodeOneBlock.craft,
	props: {
		className: 'w-full',
	},
	related: {
		toolbar: SettingsControl,
	},
}

NodeTwoBlocks.craft = {
	displayName: 'div',
	props: {
		className: 'flex flex-row m-2 p-4',
	},
	related: {
		toolbar: SettingsControl,
	},
}

export { NodeOneBlock, NodeTwoBlocks }
