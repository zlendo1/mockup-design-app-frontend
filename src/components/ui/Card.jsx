import { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { classMerger } from '@/utils/cssClassHandler.js'

const Card = forwardRef(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={classMerger(
			'rounded-xl border bg-card text-card-foreground shadow',
			className
		)}
		{...props}
	/>
))

Card.propTypes = {
	className: PropTypes.string,
}

const CardHeader = forwardRef(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={classMerger('flex flex-col space-y-1.5 p-6', className)}
		{...props}
	/>
))

CardHeader.propTypes = {
	className: PropTypes.string,
}

const CardFooter = forwardRef(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={classMerger('flex items-center p-6 pt-0', className)}
		{...props}
	/>
))

CardFooter.propTypes = {
	className: PropTypes.string,
}

const CardTitle = forwardRef(({ className, ...props }, ref) => (
	<h3
		ref={ref}
		className={classMerger(
			'font-semibold leading-none tracking-tight',
			className
		)}
		{...props}
	/>
))

CardTitle.propTypes = {
	className: PropTypes.string,
}

const CardDescription = forwardRef(({ className, ...props }, ref) => (
	<p
		ref={ref}
		className={classMerger('text-sm text-muted-foreground', className)}
		{...props}
	/>
))

CardDescription.propTypes = {
	className: PropTypes.string,
}

const CardContent = forwardRef(({ className, ...props }, ref) => (
	<div ref={ref} className={classMerger('p-6 pt-0', className)} {...props} />
))

CardContent.propTypes = {
	className: PropTypes.string,
}

Card.displayName = 'Card'
CardHeader.displayName = 'CardHeader'
CardFooter.displayName = 'CardFooter'
CardTitle.displayName = 'CardTitle'
CardDescription.displayName = 'CardDescription'
CardContent.displayName = 'CardContent'

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
