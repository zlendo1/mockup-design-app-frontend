import Hierarchy from './Hierarchy/Hierarchy.jsx'
import Styling from './Styling/Styling.jsx'

const RightSidebar = () => {
	return (
		<aside className="flex w-80 flex-col border-l bg-white">
			<div className="h-1/2 w-full border-b">
				<h3 className="text-md border-b px-4 py-2 text-left font-semibold">
					Hierarchy
				</h3>
				<div>
					<Hierarchy />
				</div>
			</div>
			<div className="h-1/2 w-full">
				<h3 className="text-md border-b px-4 py-2 text-left font-semibold">
					Styling
				</h3>
				<div className="p-4">
					<Styling />
				</div>
			</div>
		</aside>
	)
}

export default RightSidebar
