import { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { classMerger } from '@/utils/cssClassHandler.js'

const Input = forwardRef(({ className, type, ...props }, ref) => {
	return (
		<input
			ref={ref}
			type={type}
			className={classMerger(
				'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
				className
			)}
			{...props}
		/>
	)
})
Input.displayName = 'Input'

Input.propTypes = {
	className: PropTypes.string,
	type: PropTypes.string,
}

export default Input
