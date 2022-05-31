import React from 'react'
import { View } from 'react-native'
import { Colors } from '../assets/Assets'
import PropTypes from 'prop-types'

const Separator = ({ direction, color }) => {
	return (
		<View
			style={[
				{ backgroundColor: color ?? Colors.silver },
				direction === 'vertical' ? { width: 1 } : { height: 1 },
			]}
		/>
	)
}

Separator.propTypes = {
	direction: PropTypes.oneOf(['vertical', 'horizontal']),
	color: PropTypes.string,
}

export default Separator
