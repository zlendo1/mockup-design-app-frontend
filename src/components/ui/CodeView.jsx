import { CopyBlock, dracula } from 'react-code-blocks'
import PropTypes from 'prop-types'

const CodeView = ({ codeString }) => {
	return (
		<div className="h-full rounded-md border border-input">
			<CopyBlock
				customStyle={{ height: '100%', overflow: 'scroll' }}
				text={codeString}
				language={'javascript'}
				theme={dracula}
				codeBlock
			/>
		</div>
	)
}

CodeView.propTypes = {
	codeString: PropTypes.string.isRequired,
}

export default CodeView
