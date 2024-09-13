import { Element } from '@craftjs/core'

import Button from '../ui/Button.jsx'
import NodeButton from './NodeButton.jsx'
import Block from '../ui/Block.jsx'
import { NodeOneBlock, NodeTwoBlocks } from './NodeBlock.jsx'

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
	{
		name: 'Layout',
		items: [
			{
				name: 'One Block',
				demo: (
					<Block className="bg-yellow-100 p-4 text-center italic outline-dashed outline-amber-400">
						One Block
					</Block>
				),
				node: <Element canvas is={NodeOneBlock} id="one-block" />,
			},
			{
				name: 'Two Blocks',
				demo: (
					<Block className="flex flex-row bg-yellow-100 p-4 text-center italic outline-dashed outline-amber-400">
						<Block className="bg-yellow-100 text-center italic outline-dashed outline-amber-400">
							First Block
						</Block>
						<Block className="bg-yellow-100 text-center italic outline-dashed outline-amber-400">
							Second Block
						</Block>
					</Block>
				),
				node: <NodeTwoBlocks></NodeTwoBlocks>,
			},
		],
	},
]

export default componentsMap
