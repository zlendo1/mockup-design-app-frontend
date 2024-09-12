import withNode from './WithNode.jsx'
import Button from '@/components/ui/Button.jsx'

const draggable = true

const NodeButton = withNode(Button, { draggable })

NodeButton.craft = {
	...NodeButton.craft,
}

export default NodeButton
