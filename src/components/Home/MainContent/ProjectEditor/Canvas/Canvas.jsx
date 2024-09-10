import PropTypes from 'prop-types'
import { useEditor, useNode } from '@craftjs/core'
import { Code, Redo, Undo, Save } from 'lucide-react'
import { useContext, useState } from 'react'

import { getOutputCode } from '../../../../../utils/codeGenerator.js'
import { Drawer, DrawerContent, DrawerTrigger } from '../../../../ui/Drawer.jsx'
import CodeView from '../../../../ui/CodeView.jsx'
import { SaveContext } from '../Workspace.jsx'

const Canvas = ({ children }) => {
	const onSave = useContext(SaveContext)

	const {
		connectors: { connect, drag },
	} = useNode()

	const { canUndo, canRedo, actions, query } = useEditor((state, query) => ({
		canUndo: query.history.canUndo(),
		canRedo: query.history.canRedo(),
	}))

	const [output, setOutput] = useState('')

	const generateCode = () => {
		const { importString, output } = getOutputCode(query.getNodes())

		setOutput(`${importString}\n\n${output}`)
	}

	const [exportOpen, setExportOpen] = useState(false)

	const handleSave = () => {
		const serialized = query.serialize()

		onSave(serialized)
	}

	return (
		<div className="flex h-full w-full justify-center">
			<div className="flex h-full w-full flex-col rounded-sm border">
				<div className="flex w-full items-center justify-between bg-gray-200 p-4">
					<button className="flex w-16 justify-center">
						<Save
							size={24}
							strokeWidth={1.75}
							onClick={handleSave}
							className="text-gray-500 transition duration-300 hover:text-primary"
						/>
					</button>
					<div className="flex gap-2">
						<Drawer
							open={exportOpen}
							onOpenChange={isOpen => {
								generateCode()
								setExportOpen(isOpen)
							}}
						>
							<DrawerTrigger>
								<div className="flex w-16 justify-center">
									<Code
										size={24}
										strokeWidth={1.75}
										className="text-gray-500 transition duration-300 hover:text-primary"
									/>
								</div>
							</DrawerTrigger>
							<DrawerContent className="h-[75vh]">
								<CodeView codeString={output} />
							</DrawerContent>
						</Drawer>
					</div>
					<div className="flex items-center gap-2 opacity-80 active:text-primary">
						<div className="flex">
							<button className="w-8">
								{canUndo && (
									<Undo
										size={24}
										strokeWidth={1.75}
										className="text-gray-500 transition duration-300 hover:text-primary"
										onClick={() => actions.history.undo()}
									/>
								)}
							</button>
							<button className="w-8">
								{canRedo && (
									<Redo
										size={24}
										strokeWidth={1.75}
										className="text-gray-500 transition duration-300 hover:text-primary"
										onClick={() => actions.history.redo()}
									/>
								)}
							</button>
						</div>
					</div>
				</div>
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
			</div>
		</div>
	)
}

Canvas.propTypes = {
	children: PropTypes.node,
}

Canvas.craft = {
	displayName: 'div',
	props: {
		className: 'w-full h-full',
	},
}

export default Canvas
