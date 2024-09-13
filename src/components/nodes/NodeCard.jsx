import { Element } from '@craftjs/core'

import SettingsControl from '@/components/ui/SettingsControl.jsx'
import withNode from '@/components/nodes/WithNode.jsx'
import {
	Card,
	CardHeader,
	CardFooter,
	CardTitle,
	CardDescription,
	CardContent,
} from '@/components/ui/Card.jsx'
import NodeButton from '@/components/nodes/NodeButton.jsx'

const draggable = true
const droppable = true

const NodeCardHeader = withNode(CardHeader, {
	droppable,
})

const NodeCardFooter = withNode(CardFooter, {
	droppable,
})

const NodeCardTitle = withNode(CardTitle, {
	draggable,
	droppable,
})

NodeCardTitle.craft = {
	...NodeCardTitle.craft,
	related: {
		toolbar: SettingsControl,
	},
}

const NodeCardDescription = withNode(CardDescription, {
	draggable,
	droppable,
})

NodeCardDescription.craft = {
	...NodeCardDescription.craft,
	related: {
		toolbar: SettingsControl,
	},
}

const NodeCardContent = withNode(CardContent, {
	droppable,
})

const NodeCardContainer = withNode(Card, {
	draggable,
	droppable,
})

const NodeCard = ({ ...props }) => (
	<NodeCardContainer {...props}>
		<Element canvas id="card-header" is={NodeCardHeader}>
			<NodeCardTitle>Card Title</NodeCardTitle>
			<NodeCardDescription>Card Description</NodeCardDescription>
		</Element>
		<Element canvas id="card-content" is={NodeCardContent}></Element>
		<Element canvas id="card-footer" is={NodeCardFooter}>
			<NodeButton>Footer button</NodeButton>
		</Element>
	</NodeCardContainer>
)

NodeCard.craft = {
	...NodeCard.craft,
	displayName: 'Card',
	props: {
		className: 'p-6 m-2',
	},
	custom: {
		importPath: '@/components/Card',
	},
	related: {
		toolbar: SettingsControl,
	},
}

export {
	NodeCard,
	NodeCardContainer,
	NodeCardHeader,
	NodeCardFooter,
	NodeCardTitle,
	NodeCardDescription,
	NodeCardContent,
}
