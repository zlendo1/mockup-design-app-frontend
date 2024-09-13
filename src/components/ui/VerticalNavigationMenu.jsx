import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { ChevronRightIcon } from '@radix-ui/react-icons'
import { cva } from 'class-variance-authority'
import { forwardRef } from 'react'
import { classMerger } from '../../utils/cssClassHandler.js'
import PropTypes from 'prop-types'

const navigationMenuTriggerStyle = cva(
	'group inline-flex h-9 w-max items-center justify-center rounded-md bg-background p-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'
)

const NavigationMenu = forwardRef(({ className, children, ...props }, ref) => (
	<NavigationMenuPrimitive.Root
		ref={ref}
		className={classMerger(
			'relative z-10 flex max-w-max flex-1 items-center justify-center',
			className
		)}
		{...props}
	>
		{children}
	</NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

NavigationMenu.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
}

const NavigationMenuList = forwardRef(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.List
		ref={ref}
		className={classMerger('group flex flex-1 list-none', className)}
		{...props}
	/>
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

NavigationMenuList.propTypes = {
	className: PropTypes.string,
}

const NavigationMenuItem = NavigationMenuPrimitive.Item

const NavigationMenuContent = forwardRef(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.Content
		ref={ref}
		className={classMerger(
			'left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute',
			className
		)}
		{...props}
	/>
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

NavigationMenuContent.propTypes = {
	className: PropTypes.string,
}

const NavigationMenuTrigger = forwardRef(
	({ className, children, ...props }, ref) => (
		<>
			<NavigationMenuPrimitive.Trigger
				ref={ref}
				className={classMerger(
					navigationMenuTriggerStyle(),
					'group',
					className
				)}
				{...props}
			>
				<span>{children}</span>
				<ChevronRightIcon
					className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180"
					aria-hidden="true"
				/>
			</NavigationMenuPrimitive.Trigger>
		</>
	)
)
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

NavigationMenuTrigger.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
}

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuIndicator = forwardRef(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.Indicator
		ref={ref}
		className={classMerger(
			'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
			className
		)}
		{...props}
	/>
))
NavigationMenuIndicator.displayName =
	NavigationMenuPrimitive.Indicator.displayName

NavigationMenuIndicator.propTypes = {
	className: PropTypes.string,
}

const NavigationMenuViewport = forwardRef(({ className, ...props }, ref) => (
	<div className={classMerger('absolute left-full flex h-full flex-1')}>
		<NavigationMenuPrimitive.Viewport
			ref={ref}
			className={classMerger(
				'data-[state=closed]:animate-fade-out absolute left-0 top-0 h-full w-full overflow-hidden bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in',
				className
			)}
			{...props}
		/>
	</div>
))
NavigationMenuViewport.displayName =
	NavigationMenuPrimitive.Viewport.displayName

NavigationMenuViewport.propTypes = {
	className: PropTypes.string,
}

export {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuContent,
	NavigationMenuTrigger,
	NavigationMenuLink,
	NavigationMenuIndicator,
	NavigationMenuViewport,
}
