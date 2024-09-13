import PropTypes from 'prop-types'
import { Element, Frame, useEditor } from '@craftjs/core'
import { Code, Redo, Undo, Save, LoaderCircle } from 'lucide-react'
import { useState } from 'react'

import { getOutputCode } from '@/utils/codeGenerator.js'
import {
	Drawer,
	DrawerContent,
	DrawerTrigger,
} from '@/components/ui/Drawer.jsx'
import CodeView from '@/components/ui/CodeView.jsx'
import Container from '@/components/nodes/Container.jsx'

const Canvas = ({ project, onSave, children }) => {
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

	const [saveLoading, setSaveLoading] = useState(false)

	const handleSave = () => {
		setSaveLoading(true)

		const serialized = query.serialize()

		onSave(serialized, () => {
			setSaveLoading(false)
		})
	}

	return (
		<div className="flex h-full w-full justify-center">
			<div className="flex h-full w-full flex-col rounded-sm border">
				<div className="flex w-full items-center justify-between bg-gray-200 p-4">
					<button className="flex w-16 justify-center">
						{(!saveLoading && (
							<Save
								size={24}
								strokeWidth={1.75}
								onClick={handleSave}
								className="text-gray-500 transition duration-300 hover:text-primary"
							/>
						)) || (
							<LoaderCircle
								size={24}
								strokeWidth={1.75}
								className="animate-spin text-gray-500 transition duration-300 hover:text-primary"
							/>
						)}
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
				<Frame data={project.serialized}>
					<Element is={Container} id="ROOT" canvas>
						{children}
					</Element>
				</Frame>
			</div>
		</div>
	)
}

Canvas.propTypes = {
	project: PropTypes.object.isRequired,
	onSave: PropTypes.func.isRequired,
	children: PropTypes.node,
}

export default Canvas
