import PropTypes from 'prop-types'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { ImageBackground } from 'react-native'
import { StyleSheet } from 'react-native'
import Assets from '../../assets/Assets'
import Const from '../../constants/Const'

export default function ImageViewPlaceHolder({
	source,
	disable,
	onPress,
	height,
	width,
	borderRadius = Const.r4,
	style,
	children,
	aspectRatio,
	onLayout,
}) {
	return (
		<ImageBackground
			resizeMode={source?.uri ? 'cover' : 'contain'}
			resizeMethod="resize"
			onLayout={onLayout}
			//   source={source?.uri ? source : Assets.Images.img_place_holder_2}
			style={[styles.container, { height, width, borderRadius, aspectRatio }]}>
			<TouchableOpacity
				disabled={disable}
				onPress={onPress}
				style={[{ flex: 1, height: '100%', width: '100%' }, style]}>
				{children}
			</TouchableOpacity>
		</ImageBackground>
	)
}

ImageViewPlaceHolder.propTypes = {
	aspectRatio: PropTypes.number,
	borderRadius: PropTypes.number,
	children: PropTypes.any,
	disable: PropTypes.bool,
	height: PropTypes.number,
	onLayout: PropTypes.func,
	onPress: PropTypes.func,
	source: PropTypes.object,
	style: PropTypes.any,
	width: PropTypes.number,
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		// color placeholder
		backgroundColor: Assets.Colors.lightgoldenrodyellow,
		overflow: 'hidden',
	},
})
