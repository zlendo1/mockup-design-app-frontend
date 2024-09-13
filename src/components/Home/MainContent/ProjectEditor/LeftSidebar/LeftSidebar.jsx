import PropTypes from 'prop-types'
import { useEditor } from '@craftjs/core'
import { forwardRef } from 'react'

import { classMerger } from '@/utils/cssClassHandler.js'
import {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuTrigger,
	NavigationMenuLink,
	NavigationMenuContent,
	NavigationMenuViewport,
} from '@/components/ui/VerticalNavigationMenu.jsx'

const ListItem = forwardRef(({ className, children, ...props }, ref) => (
	<li className="w-full p-2">
		<NavigationMenuLink asChild>
			<a
				ref={ref}
				className={classMerger(
					'block w-full select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
					className
				)}
				{...props}
			>
				<div className="w-full text-sm font-medium leading-none">
					{children}
				</div>
			</a>
		</NavigationMenuLink>
	</li>
))
ListItem.displayName = 'ListItem'

const LeftSidebar = ({ componentsMap }) => {
	const { connectors } = useEditor()

	return (
		<NavigationMenu
			orientation="vertical"
			className="items-start justify-start border-r"
		>
			<NavigationMenuList className="w-36 flex-col">
				{componentsMap.map((menuItem, index) => (
					<NavigationMenuItem key={index} className="p-2">
						<NavigationMenuTrigger className="flex w-full justify-between">
							{menuItem.name}
						</NavigationMenuTrigger>
						<NavigationMenuContent className="w-full">
							<ul className="w-full">
								{menuItem.items.map((component, index) => (
									<ListItem
										key={index}
										ref={dom => {
											if (dom) {
												connectors.create(
													dom,
													component.node
												)
											}
										}}
									>
										{component.demo
											? component.demo
											: component.name}
									</ListItem>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
			<NavigationMenuViewport className="left-1 w-48 border-r shadow-none" />
		</NavigationMenu>
	)
}

ListItem.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
}

LeftSidebar.propTypes = {
	componentsMap: PropTypes.array.isRequired,
}

export default LeftSidebar
