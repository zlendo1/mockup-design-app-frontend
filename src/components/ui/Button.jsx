import { Slot } from '@radix-ui/react-slot'
import PropTypes from 'prop-types'
import { forwardRef } from 'react'

import { classMerger } from '@/utils/cssClassHandler.js'
import { buttonVariants } from '@/assets/variants.js'

const Button = forwardRef(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button'

		return (
			<Comp
				className={classMerger(
					buttonVariants({ variant, size, className })
				)}
				ref={ref}
				{...props}
			/>
		)
	}
)
Button.displayName = 'Button'

Button.propTypes = {
	className: PropTypes.string,
	variant: PropTypes.string,
	size: PropTypes.string,
	asChild: PropTypes.bool,
}

export default Button
