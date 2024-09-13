import { forwardRef } from 'react'
import { useEditor, useNode } from '@craftjs/core'
import PropTypes from 'prop-types'

const BUTTON_PATH = '@/components/Button'
const CARD_PATH = '@/components/Card'

const importPathMap = {
	button: BUTTON_PATH,
	card: CARD_PATH,
	cardheader: CARD_PATH,
	cardcontent: CARD_PATH,
	cardfooter: CARD_PATH,
	cardtitle: CARD_PATH,
	carddescription: CARD_PATH,
}

const withNode = (Component, { draggable = true, droppable = true }) => {
	const WithNode = forwardRef(({ className, children, ...props }, ref) => {
		const {
			id,
			connectors: { connect, drag },
		} = useNode()

		const { isActive } = useEditor((_, query) => ({
			isActive: query.getEvent('selected').contains(id),
		}))

		const applyRef = node => {
			if (!node) {
				return
			}

			if (draggable && droppable) {
				connect(drag(node))
			} else if (droppable) {
				connect(node)
			} else if (draggable) {
				drag(node)
			}

			if (typeof ref === 'function') {
				ref(node)
			} else if (ref) {
				ref.current = node
			}
		}

		return (
			<Component
				ref={applyRef}
				className={
					isActive ? `${className} component-selected` : className
				}
				{...props}
			>
				{typeof children === 'string' && children.trim() === '' ? (
					<>Empty text</>
				) : (
					children || (
						<div className="bg-yellow-100 p-4 text-center italic outline-dashed outline-amber-400">
							Empty container
						</div>
					)
				)}
			</Component>
		)
	})

	WithNode.displayName = `WithNode(${Component.displayName})`

	WithNode.propTypes = {
		className: PropTypes.string,
		children: PropTypes.node,
	}

	const importPathMapKey = Component.displayName?.toLowerCase()

	WithNode.craft = {
		displayName: Component.displayName,
		custom: {
			importPath: importPathMapKey
				? importPathMap[importPathMapKey] || ''
				: '',
		},
	}

	return WithNode
}

export default withNode
