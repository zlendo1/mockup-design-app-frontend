import PropTypes from 'prop-types'
import { Editor } from '@craftjs/core'

import LeftSidebar from './LeftSidebar/LeftSidebar.jsx'
import RightSidebar from './RightSidebar/RightSidebar.jsx'
import Canvas from './Canvas/Canvas.jsx'
import Viewport from './Canvas/Viewport.jsx'
import componentsMap from '@/components/nodes/ComponentMap.jsx'
import Container from '@/components/nodes/Container.jsx'
import RenderNode from '@/components/nodes/RenderNode.jsx'
import NodeButton from '@/components/nodes/NodeButton.jsx'

const Workspace = ({ project, onSave }) => {
	return (
		<Editor
			resolver={{
				Container,
				NodeButton,
			}}
			onRender={RenderNode}
		>
			<div className="relative flex flex-1 overflow-hidden">
				<LeftSidebar componentsMap={componentsMap} />
				<Viewport>
					<div className="page-container h-full w-full p-4">
						<Canvas project={project} onSave={onSave}></Canvas>
					</div>
				</Viewport>
				<RightSidebar />
			</div>
		</Editor>
	)
}

Workspace.propTypes = {
	project: PropTypes.object.isRequired,
	onSave: PropTypes.func.isRequired,
}

export default Workspace
