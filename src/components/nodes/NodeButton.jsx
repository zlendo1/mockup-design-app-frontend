import withNode from './WithNode.jsx'
import Button from '@/components/ui/Button.jsx'
import SettingsControl from '@/components/ui/SettingsControl.jsx'

const draggable = true

const NodeButton = withNode(Button, { draggable })

NodeButton.craft = {
	...NodeButton.craft,
	related: {
		toolbar: SettingsControl,
	},
}

export default NodeButton
