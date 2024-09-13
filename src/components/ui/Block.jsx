import { forwardRef } from 'react'

const Block = forwardRef(({ ...props }, ref) => {
	const Comp = 'div'

	return <Comp ref={ref} {...props} />
})
Block.displayName = 'div'

export default Block
