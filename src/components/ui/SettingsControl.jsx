import { useEditor, useNode } from '@craftjs/core'
import { Component, useEffect, useState } from 'react'
import Select, { components, createFilter } from 'react-select'
import { FixedSizeList as List } from 'react-window'
import { Trash2 } from 'lucide-react'
import PropTypes from 'prop-types'

import { suggestions } from '@/assets/twClassList.js'
import Button from '@/components/ui/Button.jsx'
import Input from '@/components/ui/Input.jsx'

const selectOptions = suggestions.map(value => ({ label: value, value }))

const SettingsControl = () => {
	const { query, actions } = useEditor()

	const {
		id,
		classNames,
		deletable,
		text,
		actions: { setProp },
	} = useNode(node => ({
		classNames: node.data.props['className'],
		text: node.data.props['children'],
		deletable: query.node(node.id).isDeletable(),
	}))

	const generateOptions = classNames => {
		const twArray = classNames ? classNames.split(' ').filter(Boolean) : []

		return twArray.map(value => ({
			label: value,
			value,
		}))
	}

	const [options, setOptions] = useState(generateOptions(classNames))

	useEffect(() => {
		setOptions(generateOptions(classNames))
	}, [classNames])

	class MenuList extends Component {
		render() {
			const { options, children, maxHeight, getValue } = this.props
			const [value] = getValue()
			const itemSize = 35
			const initialOffset = options.indexOf(value) * itemSize

			return (
				<List
					width={'100%'}
					height={maxHeight}
					itemCount={children.length}
					itemSize={itemSize}
					initialScrollOffset={initialOffset}
				>
					{({ index, style }) => (
						<div style={style}>{children[index]}</div>
					)}
				</List>
			)
		}
	}

	MenuList.propTypes = {
		options: PropTypes.array,
		children: PropTypes.array,
		maxHeight: PropTypes.number,
		getValue: PropTypes.func,
	}

	const CustomOption = ({ children, ...props }) => {
		// eslint-disable-next-line no-unused-vars
		const { onMouseMove, onMouseOver, ...rest } = props.innerProps

		const newProps = { ...props, innerProps: rest }

		return (
			<components.Option {...newProps}>
				<div className="text-xs">{children}</div>
			</components.Option>
		)
	}

	CustomOption.propTypes = {
		children: PropTypes.node,
		innerProps: PropTypes.any,
	}

	return (
		<>
			{deletable && (
				<Button
					variant={'destructive'}
					className="mb-4 w-full cursor-pointer"
					onClick={event => {
						event.stopPropagation()

						if (parent) {
							actions.delete(id)
						}
					}}
				>
					<Trash2 className="mr-2 h-4 w-4" />
					Delete
				</Button>
			)}
			{typeof text === 'string' && (
				<Input
					type="text"
					value={text}
					className="mb-4"
					onChange={event =>
						setProp(
							props =>
								(props.children = event.target.value.replace(
									/<\/?[^>]+(>|$)/g, // HTML tag match regex
									''
								))
						)
					}
				/>
			)}
			<Select
				placeholder={'Add new class'}
				value={options}
				options={selectOptions}
				isSearchable
				isClearable={false}
				isMulti
				components={{ MenuList, Option: CustomOption }}
				filterOption={createFilter({ ignoreAccents: false })}
				onChange={option => {
					if (!option) {
						setProp(props => (props.className = ''))
					} else if (Array.isArray(option)) {
						const classNames = option
							.map(item => item.value)
							.join(' ')

						setProp(props => {
							props.className = classNames
						})
					}

					setOptions(option)
				}}
			/>
		</>
	)
}

export default SettingsControl
