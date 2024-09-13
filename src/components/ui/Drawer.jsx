import { Drawer as DrawerPrimitive } from 'vaul'
import { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { classMerger } from '../../utils/cssClassHandler.js'

const Drawer = ({
	shouldScaleBackground: shouldScaleBackground = true,
	...props
}) => (
	<DrawerPrimitive.Root
		shouldScaleBackground={shouldScaleBackground}
		{...props}
	/>
)
Drawer.displayName = 'Drawer'

Drawer.propTypes = {
	shouldScaleBackground: PropTypes.bool,
}

const DrawerTrigger = DrawerPrimitive.Trigger

const DrawerPortal = DrawerPrimitive.Portal

const DrawerOverlay = forwardRef(({ className, ...props }, ref) => (
	<DrawerPrimitive.Overlay
		ref={ref}
		className={classMerger('fixed inset-0 z-50 bg-black/80', className)}
		{...props}
	/>
))
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName

DrawerOverlay.propTypes = {
	className: PropTypes.string,
}

const DrawerContent = forwardRef(({ className, children, ...props }, ref) => (
	<DrawerPortal>
		<DrawerOverlay />
		<DrawerPrimitive.Content
			ref={ref}
			className={classMerger(
				'fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background',
				className
			)}
			{...props}
		>
			<DrawerPrimitive.Title />
			<DrawerPrimitive.Description />
			<div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
			{children}
		</DrawerPrimitive.Content>
	</DrawerPortal>
))
DrawerContent.displayName = 'DrawerContent'

DrawerContent.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
}

export { Drawer, DrawerContent, DrawerTrigger }
