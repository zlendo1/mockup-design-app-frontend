/**
 * @file codeGenerator.js
 * @description Utility functions for generating React component code and import statements.
 */

let imports = []

/**
 * Generates indentation based on the given level.
 * @param {number} level - The level of indentation.
 * @returns {string} - A string containing the appropriate number of spaces.
 */
function getIndentation(level) {
	if (!level) {
		return ''
	}

	return '\t'.repeat(level)
}

/**
 * Generates a string of props for a React component.
 * @param {Object} props - The props object.
 * @returns {string} - A string representation of the props.
 */
function generatePropsString(props) {
	const propsArray = Object.entries(props)
		.filter(([key]) => key !== 'children')
		.map(([key, value]) => `${key}="${value}"`)

	return propsArray.length > 0 ? ` ${propsArray.join(' ')}` : ''
}

/**
 * Generates a string representation of child components or text.
 * @param {string|Array} children - The children of the component.
 * @param {number} level - The level of indentation.
 * @returns {string} - A string representation of the children.
 */
function generateChildString(children, level) {
	if (typeof children === 'string') {
		return children
	} else if (Array.isArray(children) && children.length > 0) {
		return children
			.map(child => generateComponentCode({ TEMP: child }, 'TEMP', level))
			.join('')
	} else {
		return ''
	}
}

/**
 * Recursively generates the code for a React component and its children.
 * @param {Object} nodesMap - A map of node IDs to node data.
 * @param {string} nodeId - The ID of the current node.
 * @param {number} level - The level of indentation.
 * @returns {string} - The generated component code.
 */
function generateComponentCode(nodesMap, nodeId, level) {
	const node = nodesMap[nodeId]
	const { displayName, props, nodes, linkedNodes, custom } = node.data

	const indentation = getIndentation(level)

	const openingTag = `<${displayName}${generatePropsString(props)}>`
	const closingTag = `</${displayName}>`

	if (!imports.find(item => item.displayName === displayName)) {
		imports.push({ displayName, importPath: custom.importPath })
	}

	if (nodes.length === 0 && Object.keys(linkedNodes).length === 0) {
		return `${indentation}${openingTag}${generateChildString(
			props.children,
			level + 1
		)}${closingTag}`
	} else {
		const childComponents = nodes.map(childId =>
			generateComponentCode(nodesMap, childId, level + 1)
		)

		const childComponentsString = childComponents.length
			? `\n${childComponents.join(`\n`)}`
			: ''

		const linkedChildComponents = Object.entries(linkedNodes).map(
			([, childId]) => generateComponentCode(nodesMap, childId, level + 1)
		)

		const linkedChildComponentsString = linkedChildComponents.length
			? `\n${linkedChildComponents.join(`\n`)}`
			: ''

		return `${indentation}${openingTag}${childComponentsString}${linkedChildComponentsString}\n${indentation}${closingTag}`
	}
}

/**
 * Generates import statements for the components used in the code.
 * @param {Array} components - An array of component objects.
 * @returns {string} - A string of import statements.
 */
function generateImportStatements(components) {
	const filteredComponents = components.filter(
		comp => comp.displayName !== 'div'
	)

	const groupedComponents = {}

	filteredComponents.forEach(comp => {
		const key = comp.importPath || ''

		if (!groupedComponents[key]) {
			groupedComponents[key] = []
		}

		groupedComponents[key].push(comp)
	})

	const importStatements = Object.values(groupedComponents).map(group => {
		const displayNameList = group.map(comp => comp.displayName).join(', ')
		const importPath = group[0].importPath
			? ` from "${group[0].importPath}"`
			: ''

		return `import { ${displayNameList} }${importPath}`
	})

	return importStatements.join('\n')
}

/**
 * Wraps the generated component code inside a React functional component.
 * @param {string} input - The generated component code.
 * @returns {string} - The wrapped component code.
 */
function wrapInsideComponents(input) {
	return `
export function Component() {
	return (
		${input.trim().replace(/^/gm, '  ')}
	)
}
	`.trim()
}

/**
 * Generates the final output code including import statements and component code.
 * @param {Object} nodes - The nodes map containing the component structure.
 * @returns {Object} - An object containing the import statements and the component code.
 */
function getOutputCode(nodes) {
	imports = []

	const componentString = generateComponentCode(nodes, 'ROOT', 2)
	const importString = generateImportStatements(imports)
	const output = wrapInsideComponents(componentString)

	return { importString, output }
}

export { getOutputCode }
