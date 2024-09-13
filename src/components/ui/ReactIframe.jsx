import { useState, useCallback, useLayoutEffect } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'

const ReactIframe = ({ children, title, ...props }) => {
	const [contentRef, setContentRef] = useState(null)

	const mountNode = contentRef?.contentWindow?.document?.body
	const iframeDoc = contentRef?.contentWindow?.document

	useLayoutEffect(() => {
		if (iframeDoc) {
			// Clone and append all style elements from parent head to iframe head
			document.head.querySelectorAll('style').forEach(style => {
				const frameStyles = style.cloneNode(true)
				iframeDoc.head.appendChild(frameStyles)
			})

			// Clone and append all meta elements from parent head to iframe head
			document.head.querySelectorAll('meta').forEach(meta => {
				const frameMeta = meta.cloneNode(true)
				iframeDoc.head.appendChild(frameMeta)
			})

			document.head
				.querySelectorAll('link[rel="stylesheet"]')
				.forEach(stylesheet => {
					const frameStylesheet = stylesheet.cloneNode(true)
					iframeDoc.head.appendChild(frameStylesheet)
				})

			// Inject Tailwind CSS script into iframe head
			const tailwindScript = document.createElement('script')
			tailwindScript.src = 'https://cdn.tailwindcss.com'
			iframeDoc.head.appendChild(tailwindScript)

			// Add overflow hidden class to iframe body
			iframeDoc.body.classList.add('overflow-hidden')
		}
	}, [iframeDoc])

	const mountRef = useCallback(node => {
		setContentRef(node)
	}, [])

	return (
		<iframe title={title} id="canvas-iframe" ref={mountRef} {...props}>
			{mountNode && createPortal(children, mountNode)}
		</iframe>
	)
}

ReactIframe.propTypes = {
	children: PropTypes.node,
	title: PropTypes.string,
}

export default ReactIframe
