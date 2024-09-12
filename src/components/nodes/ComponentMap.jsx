import Button from '../ui/Button.jsx'
import NodeButton from './NodeButton.jsx'

const componentsMap = [
	{
		name: 'Buttons',
		items: [
			{
				name: 'Default',
				demo: <Button>Default</Button>,
				node: <NodeButton>Default</NodeButton>,
			},
			{
				name: 'Outline',
				props: { variant: 'outline', children: 'Outline' },
				demo: <Button variant={'outline'}>Outline</Button>,
				node: <NodeButton variant={'outline'}>Outline</NodeButton>,
			},
			{
				name: 'Destructive',
				props: { variant: 'destructive', children: 'Destructive' },
				demo: <Button variant={'destructive'}>Destructive</Button>,
				node: (
					<NodeButton variant={'destructive'}>Destructive</NodeButton>
				),
			},
		],
	},
]

export default componentsMap
